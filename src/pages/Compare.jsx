import { useEffect, useState } from "react";
import { fetchAllSmartphones, fetchSmartphoneById } from "../services/api";

export default function Compare() {
  const [records, setRecords] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [selectedRecords, setSelectedRecords] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const dataRaw = await fetchAllSmartphones();
        const data = Array.isArray(dataRaw)
          ? dataRaw
          : dataRaw.smartphones || dataRaw.data || [];
        setRecords(data);
      } catch (err) {
        console.error("Errore caricamento lista smartphone:", err);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchSelected = async () => {
      try {
        const promises = selectedIds.map(async (id) => {
          const data = await fetchSmartphoneById(id);
          return data.smartphone || data.data || data;
        });
        const results = await Promise.all(promises);
        setSelectedRecords(results);
      } catch (err) {
        console.error("Errore caricamento dettagli selezionati:", err);
      }
    };
    if (selectedIds.length > 0) fetchSelected();
    else setSelectedRecords([]);
  }, [selectedIds]);

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <div className="compare">
        <h2>Confronta Smartphone</h2>

        <div className="selector-list">
          {records.map((r) => (
            <label key={r.id} className="selector-item">
              <input
                type="checkbox"
                value={r.id}
                checked={selectedIds.includes(r.id)}
                onChange={() => handleToggle(r.id)}
              />
              {r.title}
            </label>
          ))}
        </div>

        <div className="comparison-grid">
          {selectedRecords.length === 0 ? (
            <p className="empty-message">
              📊 Seleziona uno o più smartphone da confrontare.
            </p>
          ) : (
            <div className="comparison" id="comparison-container">
              {selectedRecords.map((record) => (
                <div key={record.id} className="card">
                  <img
                    src={record.image}
                    alt={record.title}
                    className="card-image"
                  />
                  <h3>{record.title}</h3>
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
                    <strong>Anno:</strong> {record.releaseYear}
                  </p>
                  <p>
                    <strong>Display:</strong> {record.screenSize}
                  </p>
                  <p>
                    <strong>Batteria:</strong> {record.battery}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
