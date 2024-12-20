import { PublicVotingPage } from "@/features";

type Props = {
  searchParams: Promise<{ voterId?: string }>;
};

export default function Page({ searchParams }: Props) {
  return <PublicVotingPage searchParams={searchParams} />;
}
