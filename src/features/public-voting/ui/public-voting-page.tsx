import { Heading } from "@/ui";
import { PublicVotingSelector, RepresentativesBoard } from ".";


export function PublicVotingPage() {
  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <PublicVotingSelector />        
      </section>
      <RepresentativesBoard />
    </main>
  );
}
