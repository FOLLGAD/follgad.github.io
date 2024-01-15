import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const activeClassBtn =
    "mx-2 px-4 py-2 rounded-lg text-decoration-none text-gray-200 underline hover:text-gray-300 bg-blue-900";
  const inactiveClassBtn = "mx-2 px-4 py-2 rounded-lg text-decoration-none text-gray-200 hover:text-gray-300 bg-blue-900";

  return (
    <header className="print:hidden bg-blue-800 mb-4">
      <div className="flex container mx-auto justify-between">
        <div className="p-4">
          <span className="text-decoration-none text-gray-200 text-2xl font-semibold">
            <Link href="/">{siteTitle}</Link>
          </span>
        </div>

        <div className="my-auto flex">
          <button className={isActive("/") ? activeClassBtn : inactiveClassBtn}>
            <Link href="/">Resume</Link>
          </button>
          <button className={inactiveClassBtn}>
            <Link href="https://linkedin.com/in/emil-ahlback">
              <a target="_blank" rel="noopener noreferrer">
                About me
              </a>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
