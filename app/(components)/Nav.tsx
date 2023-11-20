const Nav = () => {
  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <div className="w-auto h-8 text-black hover:bg-yellow-300 transition-all rounded-lg p-2">
                | Logo | Business Name |
              </div>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Pricing{" "}
            </a>
          </div>

          <a
            href="#"
            title=""
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-yellow-300 rounded-full"
            role="button"
          >
            {" "}
            Join Now{" "}
          </a>
        </div>
      </div>
    </header>

    /*  
        <nav className="flex justify-between rounded bg-slate-600 p-4">
    <div className="flex items-center justify-between h-16 lg:h-20">
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-align:center">
        <a
          href="#"
          title=""
          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
        >
          {" "}
          Features{" "}
        </a>

        <a
          href="#"
          title=""
          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
        >
          {" "}
          Solutions{" "}
        </a>

        <a
          href="#"
          title=""
          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
        >
          {" "}
          Resources{" "}
        </a>

        <a
          href="#"
          title=""
          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
        >
          {" "}
          Pricing{" "}
        </a>
        </div>
      </div>
    </nav> 
    */
  );
};

export default Nav;
