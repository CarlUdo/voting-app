import { issuesService } from "../";
import { Issue } from ".";

export async function IssuesBoard() {
  const issues = await issuesService.getAll();
  return (
    <section className="p-4">
      <header>
        <h2 className="text-2xl font-bold mb-4">Issues</h2>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {issues.map((issue) => (
          <article key={issue.id}>
            <Issue data={issue} />
          </article>
        ))}
      </div>
    </section>
  );
}
