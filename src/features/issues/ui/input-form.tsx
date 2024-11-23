import { addIssueAction } from "../actions";

export function InputForm() {
  return (
    <form className="flex" action={addIssueAction}>
      <label className="input input-bordered flex items-center gap-2 mr-4">
        <input
          required
          name="name"
          type="text"
          className="grow"
          placeholder="Issue name"
        />
      </label>
      <button className="btn btn-primary">Add Issue</button>
    </form>
  );
} 