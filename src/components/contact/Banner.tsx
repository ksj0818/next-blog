import { ContactBanner } from "./EmailForm";

export default function Banner({ banner }: { banner: ContactBanner }) {
  const { message, state } = banner;
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <p
      className={`my-3 font-bold py-2 rounded-lg ${isSuccess ? "bg-green-500" : "bg-red-500"}`}
    >{`${icon} ${message}`}</p>
  );
}
