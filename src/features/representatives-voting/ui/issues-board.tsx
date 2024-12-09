import { representativesVotingService } from "../instance";
import { IssuesVoteCard } from "./issues-vote-card"; 

type Props = {
  selectedRepId: string | undefined;
};

export async function IssuesBoard({ selectedRepId }: Props) {
  const issues = await representativesVotingService.getActiveIssues();

  const currentVotes = selectedRepId
    ? await Promise.all(
        issues.map((issue) =>
          representativesVotingService.getLatestVoteByRepresentativeAndIssue(
            selectedRepId,
            issue.id,
          ),
        ),
      )
    : [];

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">
          On-going Issues to vote for
        </h2>
      </header>
      {!selectedRepId ? (
        <p className="text-center text-gray-500 text-lg mt-4">
          Please select a representative first
        </p>
      ) : issues.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-4">
          No on-going issues found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <IssuesVoteCard
              key={issue.id}
              issue={issue}
              representativeId={selectedRepId}
              currentVoteChoiceId={currentVotes[index]?.choiceId}
            />
          ))}
        </div>
      )}
    </section>
  );
}
