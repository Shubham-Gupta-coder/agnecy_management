"use client";
import Schedules from "@/components/Schedules";
import Link from "next/link";
import { useEffect } from "react";

// ? We will be creating an digital agency managemnt site to manage leads, projects, budget etc. We will use next js 13 app router with mongoDB and this is going to be very useful as well as knowledgable project.

// TODO Goals of the website
// * 1. Save and view all the leads
// * 2. Workspace - contains all essential links
// * 3. view all the past and ongoing projects
// * 4. see all schedules and upcoming meetings

export default function Home() {
  useEffect(() => {
    import("preline");
  });
  return (
    <main className="pt-10 flex container mx-auto">
      <div className="w-2/3 h-[600px] p-5 rounded-md border border-gray-500">
        <h1 className="mb-5 text-gray-300">Upcoming</h1>
        <button
          type="button"
          className="py-3 px-4 mb-5 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:text-gray-500 dark:hover:bg-blue-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
        >
          Add Schedule
        </button>
        <Schedules/>
      </div>
      <div className="w-1/3 min-h-[80vh] px-5 ">
        <div className="p-5 flex flex-col items-center justify-center w-full h-[600px] rounded-md border border-gray-500 space-y-5">
          <Link href="/leads" className="w-full h-full rounded-md border-2 border-gray-500 text-white flex items-center justify-around text-3xl font-bold hover:bg-white hover:text-black transition-all cursor-pointer">View all Leads</Link>
          <Link href="/projects" className="w-full h-full rounded-md border-2 border-gray-500 text-white flex items-center justify-around text-3xl font-bold hover:bg-white hover:text-black transition-all cursor-pointer">View all Projects</Link>
          <Link href="/workspace" className="w-full h-full rounded-md border-2 border-gray-500 text-white flex items-center justify-around text-3xl font-bold hover:bg-white hover:text-black transition-all cursor-pointer">Visit Workspace</Link>
        </div>
      </div>
    </main>
  );
}
