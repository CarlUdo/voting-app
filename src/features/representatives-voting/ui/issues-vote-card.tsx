"use client";
import { useState } from "react";
import { IssueType } from "@/features/issues-management";
import { addRepresentativeVoteAction } from "../actions"; // App crashes if I import from ".." - why?

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
    <article className="card shadow-lg p-6 bg-white rounded-xl border transition duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col gap-6">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{issue.name}</h2>
          <span className="badge badge-success px-3 py-1 text-white text-xs rounded-full">Active</span>
        </header>
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700">Choices:</h3>
          <div className="flex flex-col gap-2">
            {issue.choices.map((choice) => (
              <label key={choice.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`choice-${issue.id}`}
                  value={choice.id}
                  className="radio radio-primary"
                  checked={selectedChoiceId === choice.id}
                  onChange={(e) => setSelectedChoiceId(e.target.value)}
                />
                <span className="text-gray-700">{choice.name}</span>
                {currentVoteChoiceId === choice.id && (
                  <span className="ml-auto badge badge-success px-2 py-1 text-xs rounded-full">
                    Current Vote
                  </span>
                )}
              </label>
            ))}
          </div>
        </section>
        <footer className="mt-4">
          <button
            onClick={handleVote}
            disabled={!selectedChoiceId}
            className={`btn btn-primary w-full ${!selectedChoiceId ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Vote
          </button>
        </footer>
      </div>
    </article>
  );
}
