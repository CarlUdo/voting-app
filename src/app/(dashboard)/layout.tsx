import { TopNav } from "@/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4">
      <TopNav />
      {children}
    </main>
  );
}
