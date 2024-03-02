import { Link } from "react-router-dom";

const SubMenu = ({ navMenu, index, closeNavbar }) => {
  const handleClick = () => {
    closeNavbar();
  };
  return (
    <div
      className={`md:absolute left-0 z-10 mt-2 md:w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
        navMenu.id === index ? "" : "hidden"
      }`}
    >
      <ul className=" flex flex-col gap-y-1 px-2 py-4">
        {navMenu.submenu.map((submenu) => (
          <li key={submenu.id}>
            <Link
              to={submenu.link}
              onClick={handleClick}
              className="p-2  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer "
            >
              {submenu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
