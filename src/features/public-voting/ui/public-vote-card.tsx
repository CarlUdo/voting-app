import { RepresentativeType } from "@/libs";
import clsx from "clsx";
import { VoteForm } from "./vote-form"; // App crashes if I import from "." - why?

type Props = {
  representative: RepresentativeType;
  publicVoterId: string;
  isCurrentVote: boolean;
};

export function PublicVoteCard({
  representative,
  publicVoterId,
  isCurrentVote,
}: Props) {
  return (
    <article
      className={clsx(
        "card shadow-lg p-6 bg-white rounded-xl border transition duration-300 transform hover:scale-105",
        {
          "border-blue-500 border-2": isCurrentVote,
          "border-gray-200": !isCurrentVote,
        }
      )}
    >
      <div className="flex flex-col gap-4">
        <header className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{representative.name}</h2>
            <p className="text-sm text-gray-500">{representative.email}</p>
          </div>
          {isCurrentVote && (
            <span className="badge badge-primary px-4 py-3 text-sm rounded-full text-white">
              Current Vote
            </span>
          )}
        </header>
        <footer className="mt-4">
          <VoteForm
            publicVoterId={publicVoterId}
            representativeId={representative.id}
            isCurrentVote={isCurrentVote}
          />
        </footer>
      </div>
    </article>
  );
}
