import { PublicVoteCard } from ".";
import { PublicVote, publicVotingService } from "..";

type Props = {
  publicVoterId: string | undefined;
  currentVote: PublicVote;
};

export async function RepresentativesBoard({
  publicVoterId,
  currentVote,
}: Props) {
  const representatives = await publicVotingService.getAllRepresentatives();
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">
          Representatives to vote for
        </h2>
      </header>
      {!publicVoterId ? (
        <p className="text-center text-gray-500 text-lg mt-4">
          Please select a voter first
        </p>
      ) : representatives.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-4">
          No representatives found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {representatives.map((representative) => (
            <PublicVoteCard
              key={representative.id}
              representative={representative}
              publicVoterId={publicVoterId}
              isCurrentVote={
                currentVote?.representativeId === representative.id
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
