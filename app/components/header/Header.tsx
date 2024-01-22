import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/app/components/header/Searchbar";
import Navbar from "@/app/components/header/Navbar";

const Header = ({ placeholder }: { placeholder?: string }) => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md py-5 ">
      <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 my-auto">
          <Image
            src="/logo.png"
            alt="logo_image"
            fill
            className="object-contain object-left"
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
