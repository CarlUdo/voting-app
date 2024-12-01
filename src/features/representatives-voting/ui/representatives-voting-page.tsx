import { Suspense } from "react";
import { Heading } from "@/ui";

import { representativesVotingService } from "../instance";
import { RepresentativesVotingSelector } from "./representatives-voting-selector";
import { IssuesBoard } from "./issues-board";

type Props = {
  searchParams: { representativeId?: string };
};

export async function RepresenativesVotingPage({ searchParams }: Props) {
  const representatives =
    await representativesVotingService .getAllRepresentatives();
  const selectedRepId = searchParams.representativeId;

  return (
    <main>
      <header>
        <Heading title="Representative vote for issue" />
      </header>
      <section className="p-4">
        <RepresentativesVotingSelector representatives={representatives} />
        <Suspense fallback={<div>Loading...</div>}>
          <IssuesBoard selectedRepId={selectedRepId} />
        </Suspense>
      </section>
    </main>
  );
}
