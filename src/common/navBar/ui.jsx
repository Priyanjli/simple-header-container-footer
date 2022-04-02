import styled from "styled-components";

export const NavBarWreper = styled.div`
  ul {
    padding: 0px;
  }
  ul li ul {
    opacity: 0;
    visibility: hidden;
    transform: translateY(2em);
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
      z-index 0s linear 0.01s;

    a {
      transition: all 0.3s ease 0s;
      :hover {
        color: #fa8d08;
      }
    }
  }

  ul li {
    float: left;
    background: #494e54;
    list-style: none;
    color: white;
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    opacity: 1;
    cursor: pointer;
    :hover {
      background-color: #6a6d7380;
    }
  }
  .active {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
  }
`;

export const DropdownContent = styled.div``;
