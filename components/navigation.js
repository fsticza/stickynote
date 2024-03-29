import Link from "next/link";
import ContentfulImage from "./contentful-image";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={`/`} className="mr-2 flex items-center">
          <ContentfulImage
            width={41}
            height={40}
            alt="Stickynote Consulting logo"
            className="h-8 w-8 mr-2 inline-block"
            src="/logo.png"
          />
          <span className="font-semibold text-xl tracking-tight inline-block">
            Sticky Note
          </span>
        </Link>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
      </div> */}
    </nav>
  );
}
