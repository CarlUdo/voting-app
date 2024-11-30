import { IssuesVoteCard } from "./issues-vote-card";
import { representativesVotingService } from "../instance";

type Props = {
  selectedRepId: string | undefined;
};

export async function IssuesBoard({ selectedRepId }: Props) {
  const representatives =
    await representativesVotingService.getAllRepresentatives();
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
    <>
      {!selectedRepId ? (
        <p className="text-center text-gray-500">
          Please select a representative first
        </p>
      ) : representatives.length === 0 ? (
        <p className="text-center text-gray-500">No active issues found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </>
  );
}
