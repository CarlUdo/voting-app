import { publicVotingService } from "../instance";

export async function PublicVotingSelector() {
  const voters = await publicVotingService.getAllPublicVoters();

  return (
    <div className="form-control w-full max-w-xs mb-8">
      <select 
        className="select select-bordered"
      >
        <option value="">Select a voter...</option>
        {voters.map((voter) => (
          <option key={voter.id} value={voter.id}>
            {voter.name}
          </option>
        ))}
      </select>
    </div>
  );
}
