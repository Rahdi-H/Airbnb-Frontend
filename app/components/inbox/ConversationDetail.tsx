import React from 'react'

function ConversationDetail() {
  return (
    <div className='p-6 space-y-3'>
        <div className=' w-[80%] bg-gray-200 p-4 rounded-lg'>
          <p className='text-gray-500 font-bold'>John Doe</p>
          <p className=''>asdf asdf asdf sadf adf</p>
        </div>
        <div className=' w-[80%] ml-[20%] bg-blue-200 p-4 rounded-md'>
          <p className='text-gray-500 font-bold'>Rahdin Hussain</p>
          <p className=''>asdf asdf asdf sadf adf</p>
        </div>
        <div className='p-3 border rounded-lg space-x-3 flex justify-center items-center'>
          <input type="text" className='p-3 focus:outline-airbnb bg-gray-200 rounded-full flex-1 w-full' placeholder='Enter message ...' />
          <button className='py-2 px-3 rounded-full text-center text-white bg-airbnb hover:bg-airbnb-dark'>Send</button>
        </div>
    </div>
  )
}

export default ConversationDetail