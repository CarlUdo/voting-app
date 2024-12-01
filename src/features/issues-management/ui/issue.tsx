import type { IssueType } from "@/libs";
import { DeactivateButton } from "./deactivate-button"; // Ensure the correct import path to avoid crashes

export function Issue({ data }: { data: IssueType }) {
  return (
    <article className="card shadow-lg p-6 bg-white rounded-xl border border-gray-200 transform transition duration-300 hover:shadow-2xl hover:scale-105 w-full max-w-3xl">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      </header>
      <div className="mb-4 flex items-center">
        <span
          className={`badge ${data.active ? "badge-success" : "badge-error"} px-4 py-3 text-sm rounded-full`}
        >
          {data.active ? "On-going" : "Closed"}
        </span>
        <span className="text-sm text-gray-500 ml-4">
          Created: {new Date(data.dateCreated).toLocaleDateString()}
        </span>
      </div>
      <section className="">
        <DeactivateButton id={data.id} active={data.active} />
        <h3 className="font-semibold mb-2 mt-4 text-lg text-gray-700">Choices:</h3>
        <ul className="list-disc list-inside text-gray-600 pl-4">
          {data.choices.map((choice) => (
            <li key={choice.id} className="mb-1">
              {choice.name}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
