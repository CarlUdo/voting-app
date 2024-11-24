"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { PublicVoter } from "../validation";

type Props = {
  publicVoters: PublicVoter[];
};

export function PublicVotingSelector({ publicVoters }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentVoterId = searchParams.get("voterId") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const voterId = e.target.value;
    router.push(`/public-voting?voterId=${voterId}`);
  };

  return (
    <div className="form-control w-full max-w-xs mb-8">
      <select
        className="select select-bordered"
        value={currentVoterId}
        onChange={handleChange}
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
