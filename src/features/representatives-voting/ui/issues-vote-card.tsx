"use client";

import { IssueType } from "@/features/issues-management";
import { useState } from "react";
import { addRepresentativeVoteAction } from "../actions";

type Props = {
  issue: IssueType;
  representativeId: string;
  currentVoteChoiceId?: string;
};

export function IssuesVoteCard({
  issue,
  representativeId,
  currentVoteChoiceId,
}: Props) {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string>("");
  console.log("Selected id:", selectedChoiceId);

  const handleVote = async () => {
    const formData = new FormData();
    formData.append("representativeId", representativeId);
    formData.append("issueId", issue.id);
    formData.append("choiceId", selectedChoiceId);
    await addRepresentativeVoteAction(formData);
  };

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
              <label key={choice.id}>
                <input
                  type="radio"
                  name={`choice-${issue.id}`}
                  value={choice.id}
                  className="radio radio-primary mr-2"
                  checked={selectedChoiceId === choice.id}
                  onChange={(e) => setSelectedChoiceId(e.target.value)}
                />
                <span>{choice.name}</span>
                {currentVoteChoiceId === choice.id && (
                  <span className="ml-auto badge badge-success">
                    Current Vote
                  </span>
                )}
              </label>
            ))}
          </div>
        </section>
        <footer>
          <button
            onClick={handleVote}
            disabled={!selectedChoiceId}
            className="btn btn-primary w-full"
          >
            Vote
          </button>
        </footer>
      </div>
    </article>
  );
}
