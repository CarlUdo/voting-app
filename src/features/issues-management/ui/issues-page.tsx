import { Heading } from "@/ui";
import { InputForm, IssuesBoard } from ".";

export function IssuesPage() {
  return (
    <main>
      <header>
        <Heading title="Issues management" />
      </header>
      <section>
        <InputForm />
      </section>
      <IssuesBoard />
    </main>
  );
}
