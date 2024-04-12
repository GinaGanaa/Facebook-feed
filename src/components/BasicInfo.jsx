import { GrSearch } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';

export const BasicInfo = () => {
  return (
    <div className="flex justify-center min-w-[1250px] ">
      <div className="bg-gradient-to-b from-black to-white"></div>
      <div className="w-[75%]">
        <img className="w-full" src="/basicInfo/coverPhoto.png" alt="" />
        <div className="w-full flex flex-col items-center">
          <div className="flex w-[92%] items-center justify-between">
            <div className="flex items-center gap-[25px] ">
              <img className="w-[135px] " src="/basicInfo/codeFivePage.png " alt="" />
              <div className="">
                <div className="flex gap-[10px]">
                  <p className="font-bold text-[28px]">Codefive</p>
                  <img src="/basicInfo/codeFiveIcon.svg" alt="" />
                </div>
                <div className="flex gap-[10px] text-[#65676B]">
                  <p>@codefive.pt</p>
                  <img src="/basicInfo/dot.svg" alt="" />
                  <img src="/basicInfo/star.svg" alt="" />
                  <p>21 critics</p>
                  <img src="/basicInfo/dot.svg" alt="" />
                  <p>Agency</p>
                </div>
              </div>
            </div>
            <div className=" w-[300px] flex flex-col items-center pt-[50px]">
              <div className="flex w-full">
                <button className="text-[17px] bg-[#1877F2] w-full h-[42px] rounded-[6px] text-white flex justify-center items-center gap-[10px]">
                  <img className="w-[16px]" src="/basicInfo/contactIcon.svg " alt="" />
                  Contact us
                </button>
              </div>
              <div className="flex pt-[10px] gap-[15px]">
                <img src="/basicInfo/link.svg" alt="" />
                <p className="text-[#65676B]">codefive.pt</p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[92%] bg-[#CED0D4]"></div>
          <div className="flex justify-between p-[15px] w-[90%]">
            <div className="flex gap-[25px]">
              <button>Main page</button>
              <button>Critics</button>
              <button>Videos</button>
              <button>Photos</button>
              <button className="flex items-center gap-[10px]">
                More <img src="/basicInfo/dropDown.svg" alt="" />
              </button>
            </div>
            <div className="flex gap-[10px]">
              <button className="flex items-center gap-[10px] text-[#1877F2] bg-[#E7F3FF] w-[147px] h-[35px] rounded-[6px] justify-center">
                <AiFillLike size={20} color="#1877F2" />
                Liked
              </button>
              <button className="flex items-center gap-[10px] bg-[#E4E6EB] w-[128px] h-[35px] text-[15px] rounded-[6px] justify-center">
                <FaFacebookMessenger />
                Messenger
              </button>
              <button className="bg-[#E4E6EB] w-[50px] h-[35px] rounded-[6px] flex items-center justify-center">
                <GrSearch size={15} />
              </button>
              <button className="bg-[#E4E6EB] w-[50px] h-[35px] rounded-[6px] flex items-center justify-center">
                <BsThreeDots size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
