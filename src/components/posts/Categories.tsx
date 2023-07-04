type Props = {
  categories: string[];
  onClick: (category: string) => void;
};
export default function Categories({ categories, onClick }: Props) {
  return (
    <ul className="p-2 font-bold">
      <h2 className="pb-1 border-b-2 border-sky-500">Category</h2>
      {categories.map((category, index) => (
        <li className="cursor-pointer hover:underline" key={index} onClick={() => onClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
}
