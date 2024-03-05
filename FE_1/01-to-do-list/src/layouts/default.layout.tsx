import { Link, Outlet } from "react-router-dom";
import "./default.layout.css";

function DefaultLayout() {
  return (
    <div id="layout">
      <header id="header">
        <Link to="/">
          <h1>Cool~ ToDo List</h1>
        </Link>
      </header>

      <Outlet />

      <footer id="footer">제작자 : 당신들의 이름...~</footer>
    </div>
  );
}

export default DefaultLayout;
