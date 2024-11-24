"use client";

import { RepresentativeType } from "@/libs";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  representatives: RepresentativeType[];
};

export function RepresentativesVotingSelector({ representatives }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRepId = searchParams.get("representativeId") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const repId = e.target.value;
    router.push(`/representatives-voting?representativeId=${repId}`);
  };
  return (
    <div className="form-control w-full max-w-xs mb-8">
      <select
        className="select select-bordered"
        value={currentRepId}
        onChange={handleChange}
      >
        <option value="">Select a voter...</option>
        {representatives.map((representative) => (
          <option key={representative.id} value={representative.id}>
            {representative.name}
          </option>
        ))}
      </select>
    </div>
  );
}
