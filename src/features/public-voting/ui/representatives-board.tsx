import { represenativesService } from "@/features/representatives/instance";
import { PublicVoteCard } from "./public-vote-card";

export async function RepresentativesBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <>
      {representatives.map(representative => <PublicVoteCard key={representative.id} representative={representative} />)}
    </>
  );
}