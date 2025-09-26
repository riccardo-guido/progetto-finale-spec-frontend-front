import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export default function Compare() {
  const [records, setRecords] = useState([]);
  const [firstId, setFirstId] = useState("");
  const [secondId, setSecondId] = useState("");
  const [firstRecord, setFirstRecord] = useState(null);
  const [secondRecord, setSecondRecord] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch(`${BASE_URL}/smartphones`);
      const data = await res.json();
      setRecords(data);
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchRecord = async (id, setter) => {
      if (!id) return setter(null);
      const res = await fetch(`${BASE_URL}/smartphones/${id}`);
      const data = await res.json();
      setter(data.smartphone);
    };
    fetchRecord(firstId, setFirstRecord);
    fetchRecord(secondId, setSecondRecord);
  }, [firstId, secondId]);

  return (
    <div className="container">
      <div className="compare">
        <h2>Confronta Smartphone</h2>

        <div className="selectors">
          <select value={firstId} onChange={(e) => setFirstId(e.target.value)}>
            <option value="">Seleziona primo</option>
            {records.map((r) => (
              <option key={r.id} value={r.id}>
                {r.title}
              </option>
            ))}
          </select>

          <select
            value={secondId}
            onChange={(e) => setSecondId(e.target.value)}
          >
            <option value="">Seleziona secondo</option>
            {records.map((r) => (
              <option key={r.id} value={r.id}>
                {r.title}
              </option>
            ))}
          </select>
        </div>

        <div className="comparison-grid">
          {!firstRecord && !secondRecord ? (
            <p className="empty-message">
              Seleziona almeno due smartphone da confrontare.
            </p>
          ) : (
            <div className="comparison" id="comparison-container">
              {firstRecord && (
                <div className="card">
                  <img
                    src={firstRecord.image}
                    alt={firstRecord.title}
                    className="card-image"
                  />
                  <h3>{firstRecord.title}</h3>
                  <p>
                    <strong>Categoria:</strong> {firstRecord.category}
                  </p>
                  <p>
                    <strong>Brand:</strong> {firstRecord.brand}
                  </p>
                  <p>
                    <strong>Prezzo:</strong> €{firstRecord.price}
                  </p>
                  <p>
                    <strong>Anno:</strong> {firstRecord.releaseYear}
                  </p>
                  <p>
                    <strong>Display:</strong> {firstRecord.screenSize}
                  </p>
                  <p>
                    <strong>Batteria:</strong> {firstRecord.battery}
                  </p>
                </div>
              )}

              {secondRecord && (
                <div className="card">
                  <img
                    src={secondRecord.image}
                    alt={secondRecord.title}
                    className="card-image"
                  />
                  <h3>{secondRecord.title}</h3>
                  <p>
                    <strong>Categoria:</strong> {secondRecord.category}
                  </p>
                  <p>
                    <strong>Brand:</strong> {secondRecord.brand}
                  </p>
                  <p>
                    <strong>Prezzo:</strong> €{secondRecord.price}
                  </p>
                  <p>
                    <strong>Anno:</strong> {secondRecord.releaseYear}
                  </p>
                  <p>
                    <strong>Display:</strong> {secondRecord.screenSize}
                  </p>
                  <p>
                    <strong>Batteria:</strong> {secondRecord.battery}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
