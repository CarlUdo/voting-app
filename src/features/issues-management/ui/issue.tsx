import { IssueType } from "../";
import { DeactivateButton } from ".";

export function Issue({ data }: { data: IssueType }) {
  return (
    <article className="card shadow-md p-4 bg-white rounded-lg border border-gray-200 min-w-80 max-w-fit">
      <header className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <DeactivateButton id={data.id} active={data.active} />
      </header>
      <div className="mt-2">
        <span
          className={`badge ${data.active ? "badge-success" : "badge-error"}`}
        >
          {data.active ? "Active" : "Inactive"}
        </span>
        <span className="text-sm text-gray-500 ml-2">
          Created: {data.dateCreated.toDateString()}
        </span>
      </div>
      <section className="mt-4">
        <h3 className="font-semibold mb-2">Choices:</h3>
        <ul className="list-disc list-inside">
          {data.choices.map((choice) => (
            <li key={choice.id}>{choice.name}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
