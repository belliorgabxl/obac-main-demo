import React from 'react'
interface Props{
    slug:string;
}

export default function MenuBar({slug}:Props) {
  return (
    <div className='px-5 py-10 bg-blue-500'>
        <div className='text-white'>
            กลุ่มเรียนทั้งหมด
        </div>
    </div>
  )
}
