import { VotingPage } from "@/features/representative-voting/ui";

type Props = {
  searchParams: { representativeId?: string };
};

export default function Page({ searchParams }: Props) {
  return <VotingPage searchParams={searchParams} />;
}
