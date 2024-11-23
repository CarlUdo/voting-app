"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/representatives");
  };

  return (
    <div className="pt-4">
      <button onClick={handleClick} className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
