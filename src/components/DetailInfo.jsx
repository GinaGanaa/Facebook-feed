export const DetailInfo = () => {
  return (
    <div className="bg-white h-[542px] w-[425px] rounded-[8px] p-[20px] ">
      <div className="flex justify-between pb-[10px]">
        <p className="text-[20px] font-semibold">About</p>
        <button className="text-[15px] text-[#1877F2]">See all</button>
      </div>
      <div className="bg-green-200 w-[385px] h-[170px] rounded-[6px]"></div>
      <div className="text-[15px]">
        <div className="flex gap-[20px]">
          <img src="/detailInfo/iMark.svg" alt="" />
          <p className=" text-[#050505] pt-[20px]">We design and develop digital solutions tailored to your needs, let us know.</p>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/likeIcon.svg" alt="" />
          <p>1163 people liked this page</p>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/followIcon.svg" alt="" />
          <p>1169 peoplo follow this page</p>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/visitIcon.svg" alt="" />
          <p>120 people visited this place</p>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/globalIcon.svg" alt="" />
          <button className="text-[#1877F2]">codefive.pt</button>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/phoneIcon.svg" alt="" />
          <p>21 138 0568</p>
        </div>
        <div className="flex gap-[20px] pt-[15px]">
          <img src="/detailInfo/mail.svg" alt="" />
          <button className="text-[#1877F2] text-[15px]">info@codefive.pt</button>
        </div>
      </div>
    </div>
  );
};
