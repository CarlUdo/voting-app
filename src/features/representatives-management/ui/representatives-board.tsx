
import { represenativesService } from "../instance";
import { Representative } from "./representative";


export async function RepresentativesBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
      <header>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Choosen representatives
        </h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {representatives.map((representative) => (
          <article
            key={representative.id}
            className="transform transition duration-300 hover:scale-105"
          >
            <Representative data={representative} />
          </article>
        ))}
      </div>
    </section>
  );
}
