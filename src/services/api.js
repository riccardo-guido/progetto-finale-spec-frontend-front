import { BASE_URL } from "../config";

const SMARTPHONES_ENDPOINT = `${BASE_URL}/smartphones`;

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const message = text || `Request failed with status ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export const fetchAllSmartphones = async () => {
  const res = await fetch(SMARTPHONES_ENDPOINT);
  return handleResponse(res);
};

export const fetchSmartphoneById = async (id) => {
  const res = await fetch(`${SMARTPHONES_ENDPOINT}/${id}`);
  return handleResponse(res);
};
