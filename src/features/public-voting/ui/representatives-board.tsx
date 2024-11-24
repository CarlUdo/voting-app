import { represenativesService } from "@/features/representatives/instance";
import { PublicVoteCard } from "./public-vote-card";
import { Vote } from "../validation";

type Props = {
  publicVoterId: string | undefined;
  currentVote: Vote;
};

export async function RepresentativesBoard({ publicVoterId, currentVote }: Props) {
  const representatives = await represenativesService.getAll();
  return (
    <>
      {!publicVoterId ? (
        <p className="text-center text-gray-500">Please select a voter first</p>
      ) : representatives.length === 0 ? (
        <p className="text-center text-gray-500">No representatives found</p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {representatives.map((representative) => (
          <PublicVoteCard
            key={representative.id}
            representative={representative}
            publicVoterId={publicVoterId}
            isCurrentVote={currentVote?.representativeId === representative.id}
          />
        ))}
      </div>
    )}
    </>
  );
}
