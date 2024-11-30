import { Heading } from "@/ui";
import { Suspense } from "react";
import { RepresentativesVotingSelector, IssuesBoard} from ".";
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
