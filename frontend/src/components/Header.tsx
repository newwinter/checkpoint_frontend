import Link from "next/link";

export default function Header() {
  return (
    <header className="header bg-emerald-100 py-6 flex flex-col justify-center">
      <h1 className="text-center font-light text-2xl">Checkpoint : frontend</h1>
      <Link href="/" className="font-light text-base text-center">
        Countries
      </Link>
    </header>
  );
}
