import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      {/* This will give general tempelate of icon inbuilt in
      clerk */}
      {/* <UserButton afterSignOutUrl="/"/> */}

      <h1 className="head-text text-left">Home</h1>
    </div>
  )
}