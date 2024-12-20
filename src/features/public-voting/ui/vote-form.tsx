"use client";

import { addPublicVoteAction } from "../actions";

type Props = {
  publicVoterId: string;
  representativeId: string;
  isCurrentVote: boolean;
};

export function VoteForm({
  publicVoterId,
  representativeId,
  isCurrentVote,
}: Props) {
  const handleVote = async () => {
    const formData = new FormData();
    formData.append("publicVoterId", publicVoterId);
    formData.append("representativeId", representativeId);
    await addPublicVoteAction(formData);
  };

  return (
    <form action={handleVote}>
      <input type="hidden" name="publicVoterId" value={publicVoterId} />
      <input type="hidden" name="representativeId" value={representativeId} />
      <button
        disabled={isCurrentVote}
        type="submit"
        className="btn btn-primary"
      >
        Vote for this representative
      </button>
    </form>
  );
}
