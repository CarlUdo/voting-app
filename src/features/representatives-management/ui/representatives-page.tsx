import { Heading } from "@/ui";
import { InputForm } from "./input-form";
import { RepresentativesBoard } from "./representatives-board";


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
