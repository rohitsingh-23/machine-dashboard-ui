import React from 'react'

const ProfileCard = () => {
  return (
    <div className="shadow-md bg-white flex flex-col justify-center items-center rounded-lg">
      <img className='h-[300px]' src="Assets/media.png" alt="" />
      <p className="font-[600] mt-[10px]">John Doe</p>
      <p className="mt-[5px] text-[12px] text-gray-500">CEO</p>
      <div className="flex w-[50%] justify-between pb-[20px] pt-[10px]">
        <img className="h-[20px] w-[20px]" src="Assets/facebook.png" alt="" />
        <img className="h-[20px] w-[20px]" src="Assets/instagram.png" alt="" />
        <img className="h-[20px] w-[20px]" src="Assets/twitter.png" alt="" />
      </div>
    </div>
  );
}

export default ProfileCard