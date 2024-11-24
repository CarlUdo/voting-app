import { represenativesService } from "../instance";
import { Representative } from ".";

export async function RepresentativeBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Representatives</h1>
      <div className="grid grid-cols-1 gap-4">
        {representatives.map((representative) => (
          <Representative key={representative.id} data={representative} />
        ))}
      </div>
    </div>
  );
}
