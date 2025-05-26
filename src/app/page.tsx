import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <Image
        src="/logo.svg"
        alt="B-DOGS"
        width={384}
        height={384}
        className="drop-shadow"
      />
    </div>
  );
}
