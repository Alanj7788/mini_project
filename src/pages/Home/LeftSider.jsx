import React from 'react'

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:hidden ">
        <div className="flex flex-col items-center">
      <div className="flex gap-3 flex-col text-gray-500 ">
      
        <a href="https://remixicon.com/" target="_blank">
            <i class="ri-facebook-box-fill"></i>
        </a>
      
      <i class="ri-mail-line"></i>
      <i class="ri-github-fill"></i>
      <i class="ri-linkedin-fill"></i>
      <i class="ri-instagram-line"></i>
      </div>
      <div className="w-[1px] h-52 bg-[#245668]">
      </div>
      </div>
    </div>
  );
}

export default LeftSider
