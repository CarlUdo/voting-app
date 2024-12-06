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
    <form
      className="flex flex-col gap-6 p-6 bg-white shadow-md rounded-lg"
      action={handleSubmit}
    >
      <fieldset className="flex flex-col gap-6">
        <legend className="text-2xl font-bold text-center text-blue-600 mb-4">
          New Issue
        </legend>
        <div className="flex items-center gap-4">
          <label htmlFor="name" className="sr-only">
            Issue Name
          </label>
          <input
            required
            name="name"
            id="name"
            type="text"
            className="w-1/2 input input-bordered px-4 py-2"
            placeholder="Issue name"
          />
          <button
            type="submit"
            className="btn btn-primary px-6 py-2"
            disabled={validChoices.length < 2}
          >
            Add Issue
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700">Choices</h3>
          {choices.map((choice, index) => (
            <div key={index} className="flex gap-4 items-center">
              <label htmlFor={`choice-${index}`} className="sr-only">
                Choice {index + 1}
              </label>
              <input
                type="text"
                value={choice}
                onChange={(e) => updateChoice(index, e.target.value)}
                id={`choice-${index}`}
                className="input input-bordered w-1/2 px-4 py-2"
                placeholder={`Choice ${index + 1}`}
                required
              />
              <button
                type="button"
                onClick={() => removeChoice(index)}
                className="btn btn-error px-3 py-1"
                disabled={choices.length === 1}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addChoice}
            className="btn btn-outline w-32 px-4 py-2"
          >
            Add Choice
          </button>
        </div>
      </fieldset>
    </form> 
  );
}
