export const Posts = (props) => {
  const { name } = props;
  return (
    <div className="w-[562px] h-[660px] bg-white rounded-[8px]">
      <div className=" p-[20px]">
        <div className="flex gap-[20px] items-center">
          <img className="w-[40px] h-[40px]" src="/posts/codeFive.png" alt="" />
          <div className="">
            <p className="text-[#050505] font-semibold  text-[15px]">{name}</p>
            <div className="flex gap-[10px]">
              <p className="text-[13px] text-[#65676B]">January 20th</p>
              <img src="/basicInfo/dot.svg" alt="" />
              <img src="/posts/earth.svg" alt="" />
            </div>
          </div>
        </div>
        <p className="pt-[20px] ">
          We have the privilege of conceiving the Foxspeed website: an eCommerce solution in Wordpress, with an avant-garden design! We invite you to visit the site foxspeed.pt
        </p>
      </div>
      <img src="/posts/foxSpeed.png" alt="" />
    </div>
  );
};
