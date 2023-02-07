const Navbar = () => {
  return (
    <nav className="fixed px-8 md:px-32 sm:px-20 bg-white py-2.5  w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center">
          <span className="judul self-center text-3xl font-semibold whitespace-nowrap text-sky-900 ">
            JEJAK
          </span>
        </p>
        <div className="items-center justify-between w-full md:flex md:w-auto hidden">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
              >
                Saran
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
