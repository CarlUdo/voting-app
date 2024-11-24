"use client";

import { useState } from "react";
import { addIssueAction } from "../actions";

export function InputForm() {
  const [choices, setChoices] = useState<string[]>([""]);

  const addChoice = () => {
    setChoices([...choices, ""]);
  };

  const updateChoice = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  const handleSubmit = async (formData: FormData) => {
    const validChoices = choices.filter((choice) => choice.trim() !== "");
    formData.append(
      "choices",
      JSON.stringify(validChoices.map((name) => ({ name }))),
    );
    await addIssueAction(formData);
    setChoices([""]);
  };

  const validChoices = choices.filter((choice) => choice.trim() !== "");

  return (
    <form className="flex flex-col gap-4" action={handleSubmit}>
      <div className="flex">
        <label className="input input-bordered flex items-center gap-2 mr-4">
          <input
            required
            name="name"
            type="text"
            className="grow"
            placeholder="Issue name"
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={validChoices.length < 2}
        >
          Add Issue
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Choices</h3>
        {choices.map((choice, index) => (
          <div key={index} className="flex gap-2 min-w-80 max-w-fit">
            <input
              type="text"
              value={choice}
              onChange={(e) => updateChoice(index, e.target.value)}
              className="input input-bordered w-full"
              placeholder={`Choice ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => removeChoice(index)}
              className="btn btn-square btn-error"
              disabled={choices.length === 1}
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addChoice}
          className="btn btn-outline w-28"
        >
          Add Choice
        </button>
      </div>
    </form>
  );
}
