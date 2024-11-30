import { RepresentativeType } from "@/libs";

export function Representative({ data }: { data: RepresentativeType }) {
  return (
    <div className="card shadow-md px-2 py-1 bg-white rounded-lg border border-gray-200 min-w-80 max-w-fit">
      <h2 className="text-lg font-semibold">{data.name}</h2>
    </div>
  );
}
