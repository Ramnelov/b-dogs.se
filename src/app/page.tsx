import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <Image
        src="/logo.svg"
        alt="B-DOGS"
        width={384}
        height={384}
        className="drop-shadow mb-8"
      />

      <div className="text-center space-y-4">
        <Link
          href="/saints"
          className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-white/60 backdrop-blur-sm transition hover:bg-white hover:shadow-md hover:ring-white"
        >
          Visa helgon
        </Link>
      </div>
    </main>
  );
}
