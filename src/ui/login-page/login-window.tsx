import { Heading } from "../heading";
import { Form } from "./form";

import LoginButton from "./login-button";
import { Slogan } from "./slogan";

export function LoginWindow() {
  return (
    <article className="max-w-lg bg-white rounded-lg p-8 text-center border-2 border-slate-300">
      <header>
        <Heading title={`Let's vote`} />
        <Slogan text="Make your voice heard" />
      </header>
      <section>
        <Form />
      </section>
      <footer>
        <LoginButton />
      </footer>
    </article>
  );
}
