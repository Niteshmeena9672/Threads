import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Topbar() {
  const isUserLoggedIn = true;
  return (
    <nav className="topbar">
      Topbar
      <Link href="/" className="flex items-center gap-4">
        <img
          src="./assets/threads_logo.svg"
          width={28}
          height={28}
          alt="logo"
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="assests/logout.svg"
                  width={24}
                  height={24}
                  alt="logout"
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
        appearance={{elements:{organizationSwitcherTrigger:"py-2 px-4 text-light-1"}}}
        />
      </div>
    </nav>
  );
}

export default Topbar;
