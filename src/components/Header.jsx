import { FaFacebook } from 'react-icons/fa';
import { SlHome } from 'react-icons/sl';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { CiShop } from 'react-icons/ci';
import { FaFacebookMessenger } from 'react-icons/fa';
import { GoBellFill } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';

export const Header = () => {
  return (
    <div className="min-w-[1000px]">
      <div className="w-full h-[60px] content-center pl-[20px] flex justify-between">
        <div className="flex items-center gap-[10px] ">
          <FaFacebook color="0062E0" size={40} />
          <div className="flex items-center">
            <GrSearch color="#65676B" style={{ position: 'absolute', marginLeft: '15px' }} size={15} />
            <input className="w-[235px] h-[40px] rounded-[30px] bg-[#F0F2F5] pl-[40px]" type="text" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="flex w-[367px] justify-between items-center">
          <button>
            <SlHome size={28} />
          </button>
          <button>
            <MdOutlineOndemandVideo size={28} />
          </button>
          <button>
            <CiShop size={28} />
          </button>
          <button>
            <img className="w-[28px] h-[28px]" src="/header/reel.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center gap-[10px] pr-[15px]">
          <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-[50%] content-center flex justify-center">
            <button>
              <img className="w-[20px]" src="/header/nineDots.svg" alt="" />
            </button>
          </div>
          <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-[50%] flex justify-center items-center">
            <button>
              <FaFacebookMessenger size={20} />
            </button>
          </div>
          <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-[50%] items-center flex justify-center">
            <button>
              <GoBellFill size={20} />
            </button>
          </div>
          <button>
            <img className="w-[40px] h-[40px]" src="/header/profilePic.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
