"use client";

import { removeRepresentativeAction } from "../actions";

type Props = {
  id: number;
};

export function RemoveButton({ id }: Props) {
  return (
    <button
      onClick={() => removeRepresentativeAction(id)}
      className="absolute top-1 right-1 text-red-600 text-2xl"
    >
      {" "}
      &times;{" "}
    </button>
  );
}
