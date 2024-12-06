type Props = {
  title: string;
};

export function Heading({ title }: Props) {
  return (
    <header>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{title}</h1>
    </header>
  );
}
