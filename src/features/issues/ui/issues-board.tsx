import { issuesService } from "..";
import { Issue } from "./issue";

export async function IssuesBoard() {
  const issues = await issuesService.getAll();
  return (
    <section className="p-6 mt-6 bg-gray-100 rounded-lg shadow-lg">
      <header>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Issues
        </h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {issues.map((issue) => (
          <article
            key={issue.id}
            className="transform transition duration-300 hover:scale-105"
          >
            <Issue data={issue} />
          </article>
        ))}
      </div>
    </section>
  );
}
