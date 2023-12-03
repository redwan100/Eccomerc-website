import { useEffect, useRef, useState } from "react";

const Searchbar = () => {
  const [scrolling, setScrolling] = useState(null);
  useEffect(() => {
    const handleScrolling = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <>
      <div
        className={`mx-auto my-2 px-3 py-4 transition-colors duration-500 md:hidden ${
          scrolling && "bg-primaryColor1 sticky top-0 z-30"
        }`}
      >
        <input
          type="text"
          placeholder="search here..."
          className="w-full bg-white rounded-md border border-primaryColor1 outline-2 outline-primaryColor1 p-2 "
        />
      </div>
    </>
  );
};

export default Searchbar;
