import React, { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";

const ThemeToggleBtn = styled.button`
  border: 2px solid var(--backgroundO);
  border-radius: 40px;
  width: 70px;
  height: 35px;
  cursor: pointer;

  & :first-child {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: 2px;
    background-color: var(--backgroundO);
    border-radius: 50%;
    transition: 0.3s;
    animation: ${(props) =>
      props.themeToggle === true
        ? `ThemeToggleBtn 0.4s linear 1 forwards`
        : `RThemeToggleBtn 0.4s linear 1 forwards`};
    @keyframes ThemeToggleBtn {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(37px);
        background-color: var(--backgroundO);
      }
    }
    @keyframes RThemeToggleBtn {
      from {
        transform: translateX(37px);
      }
      to {
        transform: translateX(0);
        /* background-color: var(--backgroundO); */
      }
    }
  }
`;

const Menu = styled.div`
  
  flex-direction: column;
  gap: 7px;
  height: fit-content;
  cursor: pointer;
  animation: ${(props) =>
    props.menuToggleState === true
      ? `main 0.4s linear 1 forwards`
      : `Rmain 0.4s linear 1 forwards`};
  @keyframes main {
    from {
      gap: 7px;
    }
    to {
      gap: 0;
      position: relative;
      z-index: 999;
    }
  }
  @keyframes Rmain {
    from {
      gap: 0;
      position: relative;
      z-index: 999;
    }
    to {
      gap: 8px;
    }
  }

  & > div:first-of-type {
    animation: ${(props) =>
      props.menuToggleState === true
        ? `toggle 0.4s linear 1 forwards`
        : `Rtoggle 0.4s linear 1 forwards`};
    @keyframes toggle {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(44deg);
        width: 55px; 
      }
    }

    @keyframes Rtoggle {
      from {
        transform: rotate(44deg);
        width: 55px;  
      }
      to {
        transform: rotate(0deg);             
      }
    }
  }

  & > div:last-of-type {
    animation: ${(props) =>
      props.menuToggleState === true
        ? `toggle1 0.4s linear 1 forwards`
        : `Rtoggle1 0.4s linear 1 forwards`};
    @keyframes toggle1 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-54deg); 
      }
    }

    @keyframes Rtoggle1 {
      from {
        transform: rotate(-54deg); 
      }
      to {
        transform: rotate(0deg);  
    }
  }
`;

const NavigationBar = ({ themeToggle, onThemeToggle }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between ">
        <Logo menuToggle={menuToggle} type={themeToggle ? "dark" : "light"} />
        <nav className="flex md:w-[45%] items-center   justify-between pr-[30px] md:pr-[50px]">
          <ul className="hidden md:flex md:w-[60%] font-[inter] text-[0.93rem] justify-between text-text   ">
            <Link to={"/advisor"}>
              <li>Discover</li>
            </Link>
            <Link to={"/job-for-me"}>
              <li>Apply</li>
            </Link>
            <Link to={"/interview_prep"}>
              <li>Interview</li>
            </Link>
          </ul>
          <Menu
            className=" p-3 flex md:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
            menuToggleState={menuToggle}
          >
            <div className="w-[35px] h-[4px] bg-backgroundO"></div>
            <div className="w-[55px] h-[4px] bg-backgroundO"></div>
          </Menu>
          <ThemeToggleBtn
            className="max-md:hidden"
            themeToggle={themeToggle}
            onClick={onThemeToggle}
          >
            {" "}
            {themeToggle === true ? (
              <Sun
                className="p-1 bg-backgroundO rounded-full"
                color="var(--background)"
              />
            ) : (
              <Moon
                className="p-1 bg-backgroundO rounded-full"
                color="var(--background)"
              />
            )}
          </ThemeToggleBtn>
        </nav>
      </div>
      {menuToggle === true && (
        <div className=" fixed inset-0  grid place-items-center bg-background/50  backdrop-blur-3xl z-10">
          <ul className=" cursor-pointer flex flex-col gap-y-10 text-center font-[inter] text-[1.1rem] justify-between text-text   ">
            <Link to={"/advisor"}>
              <li>Discover</li>
            </Link>
            <Link to={"/job-for-me"}>
              <li>Apply</li>
            </Link>
            <Link to={"/interview_prep"}>
              <li>Interview</li>
            </Link>
          </ul>
          <ThemeToggleBtn themeToggle={themeToggle} onClick={onThemeToggle}>
            {" "}
            {themeToggle === true ? (
              <Sun
                className="p-1 bg-backgroundO rounded-full"
                color="var(--background)"
              />
            ) : (
              <Moon
                className="p-1 bg-backgroundO rounded-full"
                color="var(--background)"
              />
            )}
          </ThemeToggleBtn>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
