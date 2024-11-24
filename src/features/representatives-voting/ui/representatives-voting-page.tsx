import { Heading } from "@/ui";
import { Suspense } from "react";
import { RepresentativesVotingSelector } from "./representatives-voting-selector";
import { IssuesBoard } from "./issues-board";
import { representativesVotingService } from "../instance";

type Props = {
  searchParams: { representativeId?: string };
};

export async function RepresenativesVotingPage({ searchParams }: Props) {
  const representatives =
    await representativesVotingService.getAllRepresentatives();
  const selectedRepId = searchParams.representativeId;

  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <RepresentativesVotingSelector representatives={representatives} />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <IssuesBoard selectedRepId={selectedRepId} />
      </Suspense>
    </main>
  );
}
