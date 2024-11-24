import type { PublicVoter } from "../validation";

type Props = {
  publicVoters: PublicVoter[];
};

export async function PublicVotingSelector({ publicVoters }: Props) {  
  return (
    <div className="form-control w-full max-w-xs mb-8">
      <select 
        className="select select-bordered"
      >
        <option value="">Select a voter...</option>
        {publicVoters.map((voter) => (
          <option key={voter.id} value={voter.id}>
            {voter.name}
          </option>
        ))}
      </select>
    </div>
  );
}
