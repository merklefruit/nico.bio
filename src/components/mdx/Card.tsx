interface Props {
  title: string;
  content: string;
}

export default function Card({ title, content }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}
