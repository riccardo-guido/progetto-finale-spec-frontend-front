import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export default function Detail() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const res = await fetch(`${BASE_URL}/smartphones/${id}`);
        const data = await res.json();
        setRecord(data.smartphone);
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };
    fetchRecord();
  }, [id]);

  if (!record) return <p>Caricamento...</p>;

  return (
    <div className="detail">
      <h2>{record.title}</h2>
      <img src={record.image} alt={record.title} className="detail-image" />

      <p>
        <strong>Categoria:</strong> {record.category}
      </p>
      <p>
        <strong>Brand:</strong> {record.brand}
      </p>
      <p>
        <strong>Prezzo:</strong> €{record.price}
      </p>
      <p>
        <strong>Anno di uscita:</strong> {record.releaseYear}
      </p>
      <p>
        <strong>Display:</strong> {record.screenSize}
      </p>
      <p>
        <strong>Batteria:</strong> {record.battery}
      </p>
    </div>
  );
}
