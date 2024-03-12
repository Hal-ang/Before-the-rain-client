export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? process.env.NEXT_MOCKING_API_URL
    : process.env.NEXT_API_URL;

export const getSummary = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/summary?lat=${lat}&lon=${lon}`
  );
  const data = await res.json();

  return data as { dt: number; rainGage: number[] };
};
