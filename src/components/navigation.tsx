import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="navigation">
        <div>
          <Link href="/">home</Link>
        </div>

        <div className="navigation__items">
          <div>
            <Link href="/about">about</Link>
          </div>

          <div>
            <Link href="/contact">contact</Link>
          </div>

          <div>
            <Link href="/blogs">blogs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
