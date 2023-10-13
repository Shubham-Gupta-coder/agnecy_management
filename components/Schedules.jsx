import React from 'react'
import DeleteBtn from './DeleteBtn';

const Schedules = async () => {
  const schedulesData = await fetch("http://localhost:3000/api/schedules", {
    cache: "no-store",
  });
  const schedulesDataJson = await schedulesData.json();
    // a table showing the list of events and timing , a button to add event
  return (
    <section>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-blue-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-white"
                    >
                      With (person)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-white"
                    >
                      Purpose
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-white"
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-white"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {schedulesDataJson.map(schedule => {
                    return (
                      <tr key={schedule._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {schedule.with}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {schedule.purpose}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {schedule.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <DeleteBtn slug="schedules" id={schedule._id} />
                        </td>
                      </tr>
                    );
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedules