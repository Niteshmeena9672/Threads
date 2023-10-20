import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs"; // Importing necessary components from the Clerk library for authentication and organization switching.
import Image from "next/image"; // Importing the "Image" component from Next.js for displaying images.
import Link from "next/link"; // Importing the "Link" component from Next.js for routing.
import {dark} from '@clerk/themes'
import React from "react"; // Importing the React library.

function Topbar() {
  const isUserLoggedIn = true; // Assuming a user is logged in (this should be dynamically determined in a real application).

  return (
    <nav className="topbar"> 
    {/* // Creating a navigation bar with a CSS class named "topbar." */}
      Topbar
      <Link href="/" className="flex items-center gap-4"> 
      {/* // Creating a link to the home page with a flex layout and a gap between elements. */}
        <img
          src="./assets/threads_logo.svg"
          width={28}
          height={28}
          alt="logo"
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p> 
        {/* // Displaying the "Threads" text with specific styles. */}
      </Link>
      <div className="flex items-center gap-1"> 
      {/* // Creating a container with a flex layout and a gap between elements. */}
        <div className="block md:hidden">
          <SignedIn> 
            {/* // Rendering the content inside only if the user is signed in. */}
            <SignOutButton> 
              {/* // Rendering a sign-out button if the user is signed in. */}
              <div className="flex cursor-pointer"> 
              {/* // Creating a clickable button using a CSS class with a cursor pointer. */}
                <Image
                  src="assests/logout.svg"
                  width={24}
                  height={24}
                  alt="logout"
                /> 
                {/* // Displaying a logout icon as an image. */}
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme : dark, // Setting the base theme to dark.
            elements: {
              organizationSwitcherTrigger: "py-2 px-4 text-light-1", // Styling the organization switcher trigger element.
            },
          }}
        /> 
        {/* // Rendering an organization switcher component with specific appearance settings. */}
      </div>
    </nav>
  );
}

export default Topbar; // Exporting the "Topbar" component to make it available for use in other parts of the application.
