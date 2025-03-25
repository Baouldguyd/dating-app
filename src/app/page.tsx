"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  return (
    <div className=" flex items-center justify-center font-[inter-regular] h-screen">
      <button onClick={()=>{
        router.push('/dashboard')
      }} className=" bg-[#00A389] p-6 rounded-full hover:transition-all cursor-pointer text-[#fff] ">
        Go to Dashboard
      </button>
    </div>
  );
};

export default Page;
