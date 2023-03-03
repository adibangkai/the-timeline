import Link from "next/link";

export default function DashboardBar({ children }) {
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="fixed btn bg-white text-black border-0 hover:bg-white hover:text-sky-600 drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div className="h-screen grid ">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <h1 className="judul text-center text-2xl text-sky-700">Jejak</h1>
          <div className="divider"></div>
          <li>
            <a>Tokoh</a>
          </li>
          <li>
            <a>Saran</a>
          </li>{" "}
          <li>
            <a>Masukan</a>
          </li>
          <li>
            <Link href={"/api/logout"}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
