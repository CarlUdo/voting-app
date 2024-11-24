"use client";

import { updateIssueActiveAction } from "../actions";

type Props = {
  id: string;
  active: boolean;
};

export function DeactivateButton({ id, active }: Props) {
  const deactivate = async () => {
    await updateIssueActiveAction(id, false);
  };

  if (!active) return null;

  return (
    <button onClick={deactivate} className="btn btn-sm btn-error">
      Deactivate
    </button>
  );
}
