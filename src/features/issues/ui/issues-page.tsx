import { Heading } from "@/ui";
import { InputForm } from "./input-form";
import { IssueBoard } from "./issue-board";

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
        <IssueBoard />
      </section>
    </main>
  );
}
