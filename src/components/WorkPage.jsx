import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion, AnimatePresence } from "motion/react";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { DronePropeller } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: ${(props) => `calc(${props.$totalCards * 60}vh + 60vh)`};
  position: relative;
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  position: fixed;
  top: 7rem;
  left: calc(8rem + 10vw);
  display: flex;
  gap: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    top: 6rem;
    left: 2rem;
    gap: 0.5rem;
  }
`;

const FilterBtn = styled.button`
  background: ${(props) => (props.$active ? props.theme.text : "transparent")};
  color: ${(props) => (props.$active ? props.theme.body : props.theme.text)};
  border: 1px solid ${(props) => props.theme.text};
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transform: translateY(-2px);
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 11rem;
  left: calc(8rem + 10vw);
  height: 52vh;
  display: flex;

  color: white;

  @media (max-width: 768px) {
    left: 2rem;
    top: 9.5rem;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3,
      duration: 0.4,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }

      if (yinyang.current) {
        yinyang.current.style.transform =
          "rotate(" + -window.pageYOffset + "deg)";
      }
    };

    rotate();
    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, [filter]);

  const filteredWork = filter === "all" ? Work : Work.filter((item) => item.category === filter);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box $totalCards={filteredWork.length}>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <FilterContainer>
          <FilterBtn $active={filter === "all"} onClick={() => handleFilterChange("all")}>
            ALL ({Work.length})
          </FilterBtn>
          <FilterBtn $active={filter === "software"} onClick={() => handleFilterChange("software")}>
            SOFTWARE ({Work.filter((w) => w.category === "software").length})
          </FilterBtn>
          <FilterBtn $active={filter === "hardware"} onClick={() => handleFilterChange("hardware")}>
            HARDWARE ({Work.filter((w) => w.category === "hardware").length})
          </FilterBtn>
        </FilterContainer>

        <AnimatePresence mode="wait">
          <Main key={filter} ref={ref} variants={container} initial="hidden" animate="show">
            {filteredWork.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
        </AnimatePresence>

        <Rotate ref={yinyang}>
          <DronePropeller width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
