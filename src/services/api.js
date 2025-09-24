const BASE_URL = "http://localhost:3000/smartphones";

export const fetchAll = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const fetchById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};
