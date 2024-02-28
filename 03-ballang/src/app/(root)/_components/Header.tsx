import Link from "next/link";

function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto h-14 flex items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          발랑
        </Link>

        <nav className="ml-20">
          <ul className="flex items-center text-[15px] font-medium">
            <li>
              <Link href="/products">전체 상품</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
