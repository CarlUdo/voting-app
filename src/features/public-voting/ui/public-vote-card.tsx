import { RepresentativeType } from "@/libs";

type Props = {
  representative: RepresentativeType;
}

export function PublicVoteCard({ representative }: Props) {
  return (
    <article className="card shadow-md p-4 bg-white rounded-lg border">
      <div>
        {representative.name}
      </div>       
    </article>
  );
} 