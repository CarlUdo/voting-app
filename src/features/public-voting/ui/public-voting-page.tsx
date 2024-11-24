import { Heading } from "@/ui";
import { PublicVotingSelector, RepresentativesBoard } from ".";
import { publicVotingService } from "../instance";
import { Suspense } from "react";

type Props = {
  searchParams: { voterId?: string };
};

export async function PublicVotingPage({ searchParams }: Props) {
  const selectedVoterId = searchParams.voterId;
  const currentVote = selectedVoterId
    ? await publicVotingService.getLatestVoteByPublicVoter(selectedVoterId)
    : null;
  const publicVoters = await publicVotingService.getAllPublicVoters();

  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <PublicVotingSelector publicVoters={publicVoters} />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <RepresentativesBoard
          publicVoterId={selectedVoterId}
          currentVote={currentVote}
        />
      </Suspense>
    </main>
  );
}
