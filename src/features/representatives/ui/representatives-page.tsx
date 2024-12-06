import { Heading } from "@/ui";
import { InputForm } from "./input-form";
import { RepresentativesBoard } from "./representatives-board";

export function RepresenativesPage() {
  return (
    <main>
      <Heading title="Representatives management" />
      <section>
        <InputForm />
      </section>
      <RepresentativesBoard />
    </main>
  );
}
