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
      className={clsx("card shadow-md p-4 bg-white rounded-lg border", {
        "border-blue-500 border-2": isCurrentVote,
        "border-gray-200": !isCurrentVote,
      })}
    >
      <div>
        <div className="flex flex-col gap-4">
          <header className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{representative.name}</h2>
              <p className="text-sm text-gray-500">{representative.email}</p>
            </div>
            {isCurrentVote && (
              <span className="badge badge-primary">Current Vote</span>
            )}
          </header>
          <footer>
            <VoteForm
              publicVoterId={publicVoterId}
              representativeId={representative.id}
            />
          </footer>
        </div>
      </div>
    </article>
  );
}
