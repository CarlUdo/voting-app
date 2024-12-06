import { Heading } from "@/ui";
import { InputForm } from "./input-form";
import { IssuesBoard } from "./issues-board";

export function IssuesPage() {
  return (
    <main>
      <Heading title="Issues management" />
      <section>
        <InputForm />
        <IssuesBoard />
      </section>
    </main>
  );
}
