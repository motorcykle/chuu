import Link from "next/link";

export default function Header () {
  return <header className="">
    <nav className="text-center py-10">
      <Link href={"/"} className="text-3xl font-bold text-primary tracking-wider">chuu</Link>
    </nav>
  </header>
}