import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosPricetag, IoIosCheckmarkCircle } from "react-icons/io";

const serviceGuar = [
  {
    title: "save payments",
    icon: IoShieldCheckmarkSharp,
  },
  {
    title: "national wide delevery",
    icon: FaTruckFast,
  },
  {
    title: "Best Price Guaranteed",
    icon: IoIosPricetag,
  },
  {
    title: "100% Authentic Products",
    icon: IoIosCheckmarkCircle,
  },
];
const ServiceGuearanty = () => {
  return (
    <>
      <div className="bg-primaryColorLight myContainer flex justify-between gap-3 flex-wrap p-2 rounded-md">
        {serviceGuar.map((service) => {
          const { title, icon: Icon } = service;
          return (
            <div className="flex items-center gap-1">
              <Icon className="text-2xl  text-primaryColor1" />
              <h3 className="text-[16px] font-semibold">{title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceGuearanty;
