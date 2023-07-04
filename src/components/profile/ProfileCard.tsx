import Image from "next/image";

export default function ProfileCard() {
  return (
    <article className="text-center">
      <Image
        src="/images/profile.jpg"
        alt="profile"
        width={300}
        height={300}
        className="max-w-[200px] mx-auto max-h-[200px] rounded-full"
      />
      <h2 className="mt-2 text-2xl font-bold">{`Hi, I'm Kim`}</h2>
      <h3 className="text-lg font-semibold">Frontend Developer</h3>
      <p>보여지는 모든 것을 코딩하는 코더 Kim</p>
    </article>
  );
}
