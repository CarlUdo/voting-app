"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Representatives",
    href: "/representatives",
  },
  {
    name: "Stats",
    href: "/stats",
  },

  {
    name: "Logout",
    href: "/",
  },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-end">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("ml-2", {
              "text-blue-700": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
