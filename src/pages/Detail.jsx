import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSmartphoneById } from "../services/api";

export default function Detail() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecord = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSmartphoneById(id);
        const smartphone = data.smartphone || data.data || data;
        setRecord(smartphone);
      } catch (err) {
        setError(err.message || "Errore nel fetch");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchRecord();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p className="empty-message">Errore: {error}</p>;
  if (!record) return <p className="empty-message">Smartphone non trovato.</p>;

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
