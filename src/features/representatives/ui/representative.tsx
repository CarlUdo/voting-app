import { RepresentativeType } from "@/libs";

export function Representative({ data }: { data: RepresentativeType }) {
  return (
    <div className="card shadow-md p-4 bg-white rounded-lg border border-gray-200 min-w-80 max-w-fit">
      <h2 className="text-xl font-semibold">{data.name}</h2>
    </div>
  );
}
