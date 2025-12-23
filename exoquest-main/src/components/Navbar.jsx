import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import ExoDrawer from "./ExoDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Main>
      <Container>
        <ArrowBackIcon />
        <MenuIcon onClick={() => toggleDrawer(true)} />
        <ExoDrawer open={open} toggleDrawer={toggleDrawer} />
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  background: rgba(61, 77, 100, 0.67);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
`;

export default Navbar;
