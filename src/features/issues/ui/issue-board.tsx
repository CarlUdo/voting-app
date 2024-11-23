import { issuesService } from "../instance";
import { Issue } from "./issue";

export async function IssueBoard() {
  const issues = await issuesService.getAll();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Issues</h1>
      <div className="grid grid-cols-1 gap-4">
        {issues.map((issue) => (
          <Issue key={issue.id} data={issue} />
        ))}
      </div>
    </div>
  );
} 