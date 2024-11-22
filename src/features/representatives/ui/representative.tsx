import { Representative as RepresentativeType } from "../validation";
import { RemoveButton } from "./remove-button";

export function Representative({ data }: { data: RepresentativeType }) {
  return (
    <div className="card shadow-md p-4 bg-white rounded-lg border border-gray-200 min-w-80 max-w-fit">
      <RemoveButton id={data.id} />
      <h2 className="text-xl font-semibold">{data.name} ({data.email})</h2>
    </div>
  );
}
