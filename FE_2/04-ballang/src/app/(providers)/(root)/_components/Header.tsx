import Link from "next/link";

function Header() {
  return (
    <header className="border-b h-16 px-5 flex items-center">
      <Link href="/" className="text-2xl font-bold">
        발랑
      </Link>

      <nav className="ml-20">
        <ul>
          <li>
            <Link href="/brands" className="text-[15px] font-medium">
              BRANDS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
