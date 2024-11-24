import { represenativesService } from "@/features/representatives/instance";

export async function RepresentativesBoard() {
  const representatives = await represenativesService.getAll();
  return (
    <>
    {representatives.map(representative => <p key={representative.id}>{representative.name}</p>)}
    </>
  );
}