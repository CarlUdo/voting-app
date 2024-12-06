import { RepresenativesVotingPage } from "@/features";

type Props = {
  searchParams: Promise<{ representativeId?: string }>;
};

export default function Page({ searchParams }: Props) {
  return <RepresenativesVotingPage searchParams={searchParams} />;
}
