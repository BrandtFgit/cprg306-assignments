import Link from "next/link";

export default function NavBar() {
    let currentPage = "Home";

    return (
      <nav className="navbar">
        <ul>
          <li><Link href="/week-2">Week 2</Link></li>
        </ul>
      </nav>
    );
}