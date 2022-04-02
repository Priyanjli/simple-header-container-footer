import React, { useState, useEffect, useRef } from "react";
import { NavBarWreper, DropdownContent } from "./ui";

const NavBar = () => {
  const [currentTab, setTab] = useState("");
  const showTabMenu = tab => {
    setTab(tab);
  };

  const myHeaderRef = useRef(null);
  useEffect(() => {
    const hideTab = event => {
      if (myHeaderRef.current.contains(event.target)) {
      } else {
        setTab("");
      }
    };
    document.addEventListener("click", hideTab);

    return () => document.removeEventListener("click", hideTab);
  }, []);

  return (
    <>
      <NavBarWreper ref={myHeaderRef}>
        <ul>
          <li onClick={() => showTabMenu("Home")} id={"Home"}>
            Home
            <ul className={currentTab === "Home" && "active"}>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
          <li onClick={() => showTabMenu("Contact")}>
            Contact
            <ul className={currentTab === "Contact" && "active"}>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
          <li onClick={() => showTabMenu("Address")}>Address</li>
          <li onClick={() => showTabMenu("AboutUs")} id={"AboutUs"}>
            AboutUs
            <ul className={currentTab === "AboutUs" && "active"}>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
        </ul>
      </NavBarWreper>
    </>
  );
};

export default NavBar;
