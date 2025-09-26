import { useState, useEffect } from "react";
import RecordCard from "./RecordCard";
import { BASE_URL } from "../config";
import imageMap from "../services/imageMap";
import { useDebounce } from "../hooks/useDebounce";

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("title-asc");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      let query = `${BASE_URL}/smartphones?search=${debouncedSearch}`;
      if (category) query += `&category=${category}`;
      const res = await fetch(query);
      const data = await res.json();

      let sorted = [...data];
      if (sort === "title-asc")
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      if (sort === "title-desc")
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      if (sort === "category-asc")
        sorted.sort((a, b) => a.category.localeCompare(b.category));
      if (sort === "category-desc")
        sorted.sort((a, b) => b.category.localeCompare(a.category));

      const enriched = sorted.map((record) => ({
        ...record,
        image: imageMap[record.id] || "/images/placeholder.jpg",
      }));

      setRecords(enriched);
    };
    fetchData();
  }, [debouncedSearch, category, sort]);

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Cerca per titolo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Tutte le categorie</option>
          <option value="premium">Premium</option>
          <option value="midrange">Midrange</option>
          <option value="budget">Budget</option>
        </select>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="title-asc">Titolo A-Z</option>
          <option value="title-desc">Titolo Z-A</option>
          <option value="category-asc">Categoria A-Z</option>
          <option value="category-desc">Categoria Z-A</option>
        </select>
      </div>

      <div className="grid">
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}
