import { IssueType } from "../validation";
import { DeactivateButton } from "./deactivate-button"; // App crashes if I import from "." Why??

export function Issue({ data }: { data: IssueType }) {
  return (
    <article className="card shadow-lg p-6 bg-white rounded-xl border border-gray-200 transform transition duration-300 hover:shadow-xl">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
        <DeactivateButton id={data.id} active={data.active} />
      </header>
      <div className="mb-4">
        <span className={`badge ${data.active ? "badge-success" : "badge-error"}`}>
          {data.active ? "Active" : "Inactive"}
        </span>
        <span className="text-sm text-gray-500 ml-2">
          Created: {data.dateCreated.toDateString()}
        </span>
      </div>
      <section>
        <h3 className="font-semibold mb-2 text-lg text-gray-700">Choices:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {data.choices.map((choice) => (
            <li key={choice.id}>{choice.name}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
