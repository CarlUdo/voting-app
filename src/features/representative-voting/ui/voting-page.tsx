import { represenativesService } from "@/features/representatives";
import { Heading } from "@/ui";
import { Suspense } from "react";
import { RepresentativeVotingSelector } from "./representative-voting-selector";

export async function VotingPage() {
  const representatives = await represenativesService.getAll();

  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <RepresentativeVotingSelector representatives={representatives} />
      </section>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <RepresentativesBoard
          publicVoterId={selectedVoterId}
          currentVote={currentVote}
        />
      </Suspense> */}
    </main>
  );
}
