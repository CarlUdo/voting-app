import { RepresentativeType } from "@/libs";

type Props = {
  representative: RepresentativeType;
};

export function PublicVoteCard({ representative }: Props) {
  return (
    <article className="card shadow-md p-4 bg-white rounded-lg border">
      <div>
        <div className="flex flex-col gap-4">
          <header className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{representative.name}</h2>
              <p className="text-sm text-gray-500">{representative.email}</p>
            </div>
          </header>
        </div>
      </div>
    </article>
  );
}
