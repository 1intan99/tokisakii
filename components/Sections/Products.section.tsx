import { BsArrowRightShort } from "../Misc/Icons.collection";

const Products = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="products">
      <p className="text-3xl font-bold text-white">Product</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Discord Bot </span>
          &nbsp;Order your custom Discord Bot with a cheap price.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Hosting</span>
          &nbsp;your very secure and fast Web Hosting & Discord Bot Hosting.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Top Up</span>
          &nbsp;your lovely game and be the number one.
        </p>
      </div>
    </div>
  );
};

export default Products;
