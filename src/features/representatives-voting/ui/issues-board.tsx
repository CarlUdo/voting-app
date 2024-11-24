import { IssuesVoteCard } from "./issues-vote-card";
import { representativesVotingService } from "../instance";

type Props = {
  selectedRepId: string | undefined;
};

export async function IssuesBoard({ selectedRepId }: Props) {
  const representatives =
    await representativesVotingService.getAllRepresentatives();
  const issues = await representativesVotingService.getActiveIssues();
  return (
    <>
      {!selectedRepId ? (
        <p className="text-center text-gray-500">Please select a voter first</p>
      ) : representatives.length === 0 ? (
        <p className="text-center text-gray-500">No representatives found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {issues.map((issue) => (
            <IssuesVoteCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </>
  );
}
