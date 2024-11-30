import { Representative } from ".";
import { represenativesService } from "../instance";

export async function RepresentativesBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <section className="p-4">
      <header>
        <h2 className="text-2xl font-bold mb-4">Representatives</h2>
      </header>
      <div className="grid grid-cols-1 gap-2">
        {representatives.map((representative) => (
          <article key={representative.id}>
            <Representative data={representative} />
          </article>
        ))}
      </div>
    </section>
  );
}
