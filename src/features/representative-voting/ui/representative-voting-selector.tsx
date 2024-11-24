"use client";

import { RepresentativeType } from "@/libs";

type Props = {
  representatives: RepresentativeType[];
};

export function RepresentativeVotingSelector({ representatives }: Props) {
  return (
    <div className="form-control w-full max-w-xs mb-8">
      <select
        className="select select-bordered"
        // value={currentRepresentativeId}
        // onChange={handleChange}
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
