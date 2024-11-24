import { Heading } from "@/ui";
import { InputForm, RepresentativesBoard } from ".";

export function RepresenativesPage() {
  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section>
        <InputForm />
      </section>
      <section>
        <RepresentativesBoard />
      </section>
    </main>
  );
}
