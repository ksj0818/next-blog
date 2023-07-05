import ProfileCard from "@/components/profile/ProfileCard";

const TITLE_CLASS = "text-2xl font-bold";
export default function AboutPage() {
  return (
    <section>
      <ProfileCard />
      <article className="w-full gap-4 p-2 mt-4 text-center bg-gray-100 rounded-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>상상을 코딩하는 코더 Kim</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>인프라큐브 개발팀 (21.10~23.02)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Typescript, Next.js, Git, Tailwind, HTML5, CSS3, Javescript</p>
      </article>
    </section>
  );
}
