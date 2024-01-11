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

  const activeClass =
    "mx-2 px-2 py-1 text-decoration-none text-gray-200 underline";
  const inactiveClass = "mx-2 px-2 py-1 text-decoration-none text-gray-200";

  return (
    <header className="print:hidden bg-blue-700 mb-4">
      <div className="flex container mx-auto justify-between">
        <div className="p-4">
          <span className="text-decoration-none text-gray-200 text-2xl font-semibold">
            <Link href="/">{siteTitle}</Link>
          </span>
        </div>

        <div className="my-auto flex">
          <span className={isActive("/") ? activeClass : inactiveClass}>
            <Link href="/">Resume</Link>
          </span>
          <span className={inactiveClass}>
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
};

export default Header;
