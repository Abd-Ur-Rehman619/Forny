export default function BrowseCatagories({ catagoryImg, children }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-[145px] w-[170px] border border-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-all duration-500 ease-in-out">
        <img src={catagoryImg} alt="catagoryImg" />
        <label className="font-medium">{children}</label>
      </div>
    </>
  );
}
