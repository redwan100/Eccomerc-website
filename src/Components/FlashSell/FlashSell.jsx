import img1 from "../../assets/img1.jpg";

const flashSellProducts = [
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 100,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 200,
    discount: 20,
  },
];

const FlashSell = () => {
  return (
    <div className="w-full bg-white myContainer  my-4 py-4  px-2  rounded-md ">
      <h1 className="text-center text-3xl font-bold  text-primaryColor1 capitalize my-4">
        Flash sell
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {flashSellProducts.map(({ pName, pImg, originalPrice, discount }) => {
          return (
            <div
              key={pName}
              className="cursor-pointer rounded-md p-3 shadow-md hover:-translate-y-2 transition-transform  duration-300"
            >
              <img
                src={pImg}
                alt="flash sell"
                className="w-[8rem] mx-auto  mb-2"
              />

              <div className="space-y-2">
                <h3>{pName}</h3>

                <h2 className="text-primaryColor1  text-xl font-semibold">
                  ট30
                </h2>
                <p className="text-lg">
                  <span className="line-through text-slate-400">
                    ট{originalPrice}
                  </span>
                  <span className=""> - {discount}%</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashSell;
