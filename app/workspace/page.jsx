import React from "react";

const page = () => {
  return (
    <section className="container mx-auto py-10">
      <h1 className="my-5 mb-2">Workspace</h1>
      <h3 className="text-xl font-bold text-gray-300">All Important Links</h3>
      <div className="flex flex-wrap my-10">
        <div class="flex flex-col min-w-[300px] bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              LinkedIn
            </h3>
            <p className="text-gray-300">Get leads by finding connections</p>
            <a
              class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:cursor-pointer hover:text-blue-700"
            >
              Go
              <svg
                class="w-2.5 h-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
