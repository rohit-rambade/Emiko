const SubMenu = ({ navMenu, index }) => {
  return (
    <div
      className={`md:absolute left-0 z-10 mt-2 md:w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
        navMenu.id === index ? "" : "hidden"
      }`}
    >
      <ul className=" flex flex-col gap-y-1 px-2 py-4">
        {navMenu.submenu.map((submenu) => (
          <li key={submenu.id} className="p-2 w-full ">
            {submenu.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
