import { RepresenativesVotingPage } from "@/features/representatives-voting";

type Props = {
  searchParams: { representativeId?: string };
};

export default function Page({ searchParams }: Props) {
  return <RepresenativesVotingPage searchParams={searchParams} />;
}
