import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${sticky ? styles.stickyNavbar : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>Lawctopus</div>

          <nav
            className={`${styles.navLinks} ${mobileMenu ? styles.active : ""}`}
          >
            <Link
              to="curriculum"
              smooth
              duration={50}
              onClick={() => setMobileMenu(false)}
            >
              Curriculum
            </Link>

            <Link
              to="highlights"
              smooth
              duration={50}
              onClick={() => setMobileMenu(false)}
            >
              Highlights
            </Link>

            <Link
              to="pricing"
              smooth
              duration={50}
              onClick={() => setMobileMenu(false)}
            >
              Pricing
            </Link>

            <Link
              to="faq"
              smooth
              duration={50}
              onClick={() => setMobileMenu(false)}
            >
              FAQ
            </Link>

            <button className={styles.enrollBtn}>Enroll Now</button>
          </nav>

          <div
            className={styles.mobileIcon}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
