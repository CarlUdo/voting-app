import { represenativesService } from "@/features/representatives/instance";
import { PublicVoteCard } from "./public-vote-card";

export async function RepresentativesBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {representatives.map((representative) => (
        <PublicVoteCard
          key={representative.id}
          representative={representative}
        />
      ))}
    </div>
  );
}
