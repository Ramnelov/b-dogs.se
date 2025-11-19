import Image from "next/image";
import Link from "next/link";

type Saint = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

async function getSaints(): Promise<Saint[]> {
  const response = await fetch("http://localhost:3000/saints.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch saints");
  }

  return response.json();
}

export default async function SaintsPage() {
  const saints = await getSaints();

  return (
    <main className="min-h-screen w-full">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex w-full flex-col items-center text-center">
          <div className="mb-4 flex w-full items-center justify-start">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-xl text-slate-900 shadow-sm ring-1 ring-white/60 backdrop-blur-sm transition hover:bg-white hover:shadow-md hover:ring-white"
              aria-label="Till startsidan"
            >
              <span className="text-2xl leading-none">←</span>
            </Link>
          </div>

          <Image
            src="/logo.svg"
            alt="B-DOGS"
            width={160}
            height={160}
            className="mb-4 drop-shadow"
          />
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Helgon
          </h1>
        </div>

        <div className="w-full space-y-5">
          {saints.map((saint, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl bg-white/60 px-5 py-5 text-center shadow-sm ring-1 ring-white/40 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md hover:ring-white/70 sm:flex-row sm:items-center sm:gap-5 sm:text-left"
            >
              <div className="mb-3 flex justify-center sm:mb-0 sm:justify-start">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-xl bg-slate-100/70">
                  <img
                    src={saint.image_url}
                    alt={saint.name}
                    className="max-h-28 w-auto object-contain transition-transform group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                  {saint.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-800">
                  {saint.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
