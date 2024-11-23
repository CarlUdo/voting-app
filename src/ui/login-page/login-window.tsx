import { Form } from "./form";
import { Heading } from "../heading";
import LoginButton from "./login-button";
import { Slogan } from "./slogan";

export function LoginWindow() {
  return (
    <div className="max-w-lg bg-white rounded-lg p-8 text-center border-2 border-slate-300">
      <Heading title={`Let's vote`} />
      <Slogan text="Make your voice heard" />
      <Form />
      <LoginButton />
    </div>
  );
}
