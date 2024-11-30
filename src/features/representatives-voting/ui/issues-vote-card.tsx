import { IssueType } from "@/features/issues-management";

type Props = {
  issue: IssueType;
  representativeId: string;
  currentVoteChoiceId?: string;
};

export function IssuesVoteCard({ issue, representativeId, currentVoteChoiceId }: Props) {
  return (
    <article className="card shadow-md p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex flex-col gap-4">
        <header>
          <h2 className="text-xl font-semibold">{issue.name}</h2>
          <span className="badge badge-success">Active</span>
        </header>
        <section className="flex flex-col gap-2">
          <h3 className="font-semibold">Choices:</h3>
          <div className="flex flex-col gap-2">
          {issue.choices.map((choice) => (
              <label
                key={choice.id}
              >
                <input
                  type="radio"
                  name={`choice-${issue.id}`}
                  value={choice.id}
                  className="radio radio-primary mr-2"
                />
                <span>{choice.name}</span>
              </label>
            ))}
          </div>
        </section>
        <footer>
          <button className="btn btn-primary w-full">Vote</button>
        </footer>
      </div>
    </article>
  );
}
