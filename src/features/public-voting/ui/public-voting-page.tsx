import { Suspense } from "react";
import { Heading } from "@/ui";
import { publicVotingService } from "..";
import { PublicVotingSelector } from "./public-voting-selector";
import { RepresentativesBoard } from "./representatives-board";

type Props = {
  searchParams: Promise<{ voterId?: string }>;
};

export async function PublicVotingPage({ searchParams }: Props) {
  const selectedVoterId = (await searchParams).voterId;

  const currentVote = selectedVoterId
    ? await publicVotingService.getLatestVoteByPublicVoter(selectedVoterId)
    : null;
  const publicVoters = await publicVotingService.getAllPublicVoters();

  return (
    <main>
      <Heading title="Vote for your representative" />

      <section className="p-4">
        <PublicVotingSelector publicVoters={publicVoters} />
        <Suspense fallback={<div>Loading...</div>}>
          <RepresentativesBoard
            publicVoterId={selectedVoterId}
            currentVote={currentVote}
          />
        </Suspense>
      </section>
    </main>
  );
}
