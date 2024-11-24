import { PublicVotingPage } from "@/features/public-voting/ui";

type Props = {
  searchParams: { voterId?: string };
};

export default function Page({ searchParams }: Props) {
  return <PublicVotingPage searchParams={searchParams} />;
}
