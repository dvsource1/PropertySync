import { api, HydrateClient } from "~/trpc/server";
import { AllProperties } from "./_components/property";

export default async function Home() {
  void api.property.getAll.prefetch();

  return (
    <HydrateClient>
      <main>
        AllProperties
        <AllProperties />
      </main>
    </HydrateClient>
  );
}
