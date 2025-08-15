export async function fetchBooks() {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL // SSR
      : "";

  const res = await fetch(`${baseUrl}/api/books`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "책 목록을 불러오지 못했습니다.");
  }
  const data = await res.json();
  return data;
}
