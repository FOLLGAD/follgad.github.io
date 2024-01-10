import Link from "next/link";

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="print:hidden bg-blue-700 mb-4">
    <div className="flex container mx-auto justify-between">
      <div className="p-4">
        <span className="text-decoration-none text-gray-200 text-2xl font-semibold">
          <Link href="/">{siteTitle}</Link>
        </span>
      </div>

      <div className="my-auto flex">
        {/* <Link to="/about" className="mx-2 px-2 py-1 text-decoration-none text-gray-200">
          About me
        </Link> */}
        <span className="mx-2 px-2 py-1 text-decoration-none text-gray-200">
          <Link href="/resume">Resume</Link>
        </span>
        <span className="mx-2 px-2 py-1 text-decoration-none text-gray-200">
          <Link href="https://linkedin.com/in/emil-ahlback">
            <a target="_blank" rel="noopener noreferrer">
              About me
            </a>
          </Link>
        </span>
      </div>
    </div>
  </header>
);

export default Header;
