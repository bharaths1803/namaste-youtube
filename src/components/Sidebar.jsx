import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  console.log("Menu open", isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 m-2 shadow-lg">
      <ul className="">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
