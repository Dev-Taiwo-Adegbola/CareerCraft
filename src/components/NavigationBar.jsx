import React, { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";

const ThemeToggleBtn = styled.button`
  border: 3px solid red;
  border-radius: 40px;
  width: 60px;
  height: 30px;
  cursor: pointer;

  & span {
    display: block;
    width: 23px;
    height: 23px;
    margin-left: 2px;
    background-color: red;
    border-radius: 50%;
    transition: 0.3s;
    animation: ${(props) =>
      props.themeToggle === true && `ThemeToggleBtn 0.4s linear 1 forwards`};
    @keyframes ThemeToggleBtn {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(29px);
        background-color: #a2b91d;
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: fit-content;
  cursor: pointer;
  animation: ${(props) =>
    props.menuToggleState === true && `main 0.4s linear 1 forwards`};
  @keyframes main {
    from {
      gap: 7px;
    }
    to {
      gap: 0;
    }
  }

  & > div:first-of-type {
    animation: ${(props) =>
      props.menuToggleState === true && `toggle 0.4s linear 1 forwards`};
    @keyframes toggle {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(44deg);
        width: 40px;
      }
    }
  }

  & > div:last-of-type {
    animation: ${(props) =>
      props.menuToggleState === true && `toggle1 0.4s linear 1 forwards`};
    @keyframes toggle1 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-54deg);
      }
    }
  }
`;

const NavigationBar = ({ themeToggle, onThemeToggle }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between ">
        <Logo type={themeToggle ? "dark" : "light"} />
        <nav className="flex md:w-[45%] items-center   justify-between pr-[30px] md:pr-[50px]">
          <ul className="hidden md:flex md:w-[60%] font-[inter] text-[0.93rem] justify-between text-text   ">
            <li>Plan</li>
            <li>Apply</li>
            <li>Interview</li>
          </ul>
          <Menu
            onClick={() => setMenuToggle(!menuToggle)}
            menuToggleState={menuToggle}
          >
            <div className="w-[25px] h-[3px] bg-blue-950"></div>
            <div className="w-[40px] h-[3px] bg-blue-950"></div>
          </Menu>
        </nav>
      </div>
      {menuToggle === true && (
        <div>
          <ThemeToggleBtn themeToggle={themeToggle} onClick={onThemeToggle}>
            <span> </span>
          </ThemeToggleBtn>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
