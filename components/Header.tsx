"use client";

import Image from "next/image";
import Link from "next/link";
import MenuCategory from "./header/MenuCategory";
import PhoneNumberAssistance from "./header/PhoneNumberAssistance";
import Account from "./header/Account";
import Cart from "./header/Cart";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container  mx-auto px-4 py-8 flex    items-center">
        {/* Logo */}
        <div className="w-40 md:w-48   mr-auto flex-shrink-0 cursor-pointer">
          <Link href={`/`}>
            <Image
              src="/logo.png"
              alt=""
              width="100"
              height="100"
              layout="responsive"
            />
          </Link>
        </div>

        {/* Menu Categories Block */}
        <MenuCategory />

        {/* Assistance and Phone number Block */}
        <PhoneNumberAssistance />

        {/* Account and cart butons block */}
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              {/* Account Button*/}
              <Account />
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              {/* cart Button*/}
              <Cart />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
