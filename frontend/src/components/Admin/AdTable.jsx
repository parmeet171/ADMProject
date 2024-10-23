import React from 'react'

const AdTable = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-white">
          <thead class="text-xs uppercase bg-[#2c6fff]">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.No.
              </th>
              <th scope="col" class="px-6 py-3">
                Student Name
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Course
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            <tr class="odd:bg-white  even:bg-gray-300  border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
               1
              </th>
              <td class="px-6 py-4">Prabhjot Singh</td>
              <td class="px-6 py-4">9067238242</td>
              <td class="px-6 py-4">Master of Science in Information Technology</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-200  border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
               2
              </th>
              <td class="px-6 py-4">Prabhjot Singh</td>
              <td class="px-6 py-4">9067238242</td>
              <td class="px-6 py-4">Master of Science in Information Technology</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
  )
}

export default AdTable
