import { RepresentativeType } from "@/libs";

type Props = {
  data: RepresentativeType;
};

export function Representative({ data }: Props) {
  return (
    <div className="card shadow-lg px-4 py-3 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{data.name}</h2>
      <h3 className="text-sm font-medium text-gray-500">{data.email}</h3>
    </div>
  );
}
