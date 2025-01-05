import Link from "next/link";

export default function Header () {
  return <header className="">
    <nav className="text-center py-10">
      <Link href={"/"} className="text-xl font-bold underline tracking-wider">chuu.se</Link>
    </nav>
  </header>
}