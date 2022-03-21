import React from "react";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        {/*------------ Navbar start-------------*/}

        <nav className="bg bg-dark ">
          <ul className="nav justify-content-center ">
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link active text-white" aria-current="page">
                  Logo
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/mental-flashcard">
                <a className="nav-link active text-white">
                  Mental
                  <span className="visually-hidden">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/input-flashcard">
                <a className="nav-link text-white">Input</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/multiple-choices-answer-flashcard">
                <a className="nav-link text-white">Multiple</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* </div>
        </nav> */}

        {/*------------ Navbar end -------------*/}
      </header>

      {/*------------ Article start-------------*/}
      <article>{children}</article>
      {/*------------ Article end -------------*/}

      {/*------------ Footer start-------------*/}
      <footer className="text-secondary">
        <Link href="#">
          <a>Made by Miora</a>
        </Link>
      </footer>
      {/*------------ Footer end-------------*/}
    </>
  );
};
export default Layout;
