import { ContactEmailForm } from "@/components/contact/EmailForm";

export async function sendContactEmail(email: ContactEmailForm) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "서버 요청 실패");

  return data;
}
