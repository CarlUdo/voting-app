import { Issue as IssueType } from "../validation";
import { DeactivateButton } from "./deactivate-button";

export function Issue({ data }: { data: IssueType }) {
  return (
    <div className="card shadow-md p-4 bg-white rounded-lg border border-gray-200 min-w-80 max-w-fit">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <DeactivateButton id={data.id} active={data.active} />
      </div>
      <div className="mt-2">
        <span className={`badge ${data.active ? 'badge-success' : 'badge-error'}`}>
          {data.active ? 'Active' : 'Inactive'}
        </span>
        <span className="text-sm text-gray-500 ml-2">
          Created: {data.dateCreated.toDateString()}
        </span>
      </div>
    </div>
  );
} 