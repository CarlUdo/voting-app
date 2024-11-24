import { Heading } from "@/ui";
import { InputForm, RepresentativeBoard } from ".";

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
        <RepresentativeBoard />
      </section>
    </main>
  );
}
