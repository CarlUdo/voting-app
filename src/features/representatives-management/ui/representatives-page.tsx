import { Heading } from "@/ui";
import { InputForm, RepresentativesBoard } from ".";

export function RepresenativesPage() {
  return (
    <main>
      <header>
        <Heading title="Representatives management" />
      </header>
      <section>
        <InputForm />
      </section>
      <RepresentativesBoard />
    </main>
  );
}
