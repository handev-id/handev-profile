import Menu from "./components/Menu";
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { displayMenu } from "./redux/menuSlice";
import About from "./components/About";

function App() {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.menu);
  return (
    <>
      <div
        onClick={() => dispatch(displayMenu({ showMenu: !showMenu }))}
        className="text-white p-3 menu-icon"
      >
        <i class="fa-solid fa-bars-staggered"></i>
      </div>
      <Menu />
      <Profile />
      <About />
    </>
  );
}

export default App;
