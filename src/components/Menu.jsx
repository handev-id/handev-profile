import { useSelector } from "react-redux";
const Menu = () => {
  const { showMenu } = useSelector((state) => state.menu);

  return (
    <div className={showMenu ? "show-menu-pc p-4" : "menu-pc p-4"}>
      <ul className="d-flex text-end text-white flex-column gap-3">
        <li>Profile</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Menu;
