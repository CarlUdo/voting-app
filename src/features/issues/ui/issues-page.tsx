import { Heading } from "@/ui";
import { InputForm } from "./input-form";
import { IssuesBoard } from "./issues-board";

export function IssuesPage() {
  return (
    <main>
      <header>
        <Heading title="Manage Issues" />
      </header>
      <section>
        <InputForm />
      </section>
      <section>
        <IssuesBoard />
      </section>
    </main>
  );
}
