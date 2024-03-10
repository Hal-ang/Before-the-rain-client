export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? "http://localhost:9090"
    : process.env.NEXT_API_URL;
