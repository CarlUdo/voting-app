import { Heading } from "@/ui";

export function PublicVotingPage() {
  const voters = [
    {
      id: 1,
      name: 'carl'
    },
    {
      id: 2,
      name: 'Andreas'
    },
  ];

  return (
    <main>
      <header>
        <Heading title="Vote for your representative" />
      </header>
      <section className="p-4">
        <div className="form-control w-full max-w-xs mb-8">
          <select 
            className="select select-bordered"
          >
            <option value="">Select a voter...</option>
            {voters.map((voter) => (
              <option key={voter.id} value={voter.id}>
                {voter.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </main>
  );
}
