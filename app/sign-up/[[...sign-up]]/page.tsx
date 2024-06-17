import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (

<div className="flex justify-center items-center h-screen bg-secondary" border-radius="20px 35px">
<SignUp />
</div>
  
  )
}