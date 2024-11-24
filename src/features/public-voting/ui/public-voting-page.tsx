import { Heading } from "@/ui";
import { PublicVotingSelector, RepresentativesBoard } from ".";
import { publicVotingService } from "../instance";

export async function PublicVotingPage() {
  const publicVoters = await publicVotingService.getAllPublicVoters();
  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <PublicVotingSelector publicVoters={publicVoters} />
      </section>
      <RepresentativesBoard />
    </main>
  );
}
