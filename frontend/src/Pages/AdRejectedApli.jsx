import React from 'react'
import AdTable from '../components/Admin/AdTable'

const AdRejectedApli = () => {
  return (
    <div className='flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]'>
      <div className="mb-10 text-5xl text-center font-bold text-[#ff2e2e]">
        <h1>Rejected Applications</h1>
      </div>

      <AdTable />
    </div>
  )
}

export default AdRejectedApli
