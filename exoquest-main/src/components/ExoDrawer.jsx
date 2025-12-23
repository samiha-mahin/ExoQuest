import * as React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import profile from "../assets/pages/profile/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pages/logo/ExoQuest.png";

const navItems = [
  { label: "HOME", icon: <HomeOutlinedIcon />, route: "/home" },
  { label: "Profile", icon: <PermIdentityOutlinedIcon />, route: "#" },
  {
    label: "Buy Coins",
    icon: <MonetizationOnOutlinedIcon />,
    route: "#",
  },
  { label: "Event", icon: <DateRangeOutlinedIcon />, route: "#" },
  { label: "Settings", icon: <SettingsOutlinedIcon />, route: "#" },
];

const ExoDrawer = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
    toggleDrawer(false);
  };

  return (
    <Drawer
      anchor="right"
      style={{ background: "rgba(61, 77, 100, 0.4)" }}
      open={open}
      onClose={() => toggleDrawer(false)}
      BackdropProps={{
        sx: {
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "12% center",
          backgroundSize: "400px",
          animation: "slideIn 2s ease-out 2s",
        },
      }}
    >
      <Container>
        <Header>
          <img src={profile} alt="Profile" />
          <CloseIcon onClick={() => toggleDrawer(false)} />
        </Header>
        <ManuItems>
          <p>Menu</p>

          <ManuBox>
            {navItems.map((item, index) => (
              <ManuItem key={index} onClick={() => handleItemClick(item.route)}>
                {item.icon}
                <p>{item.label}</p>
              </ManuItem>
            ))}
          </ManuBox>
        </ManuItems>
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  width: 770px;
  padding: 20px;
  height: 100vh;
  background: rgba(61, 77, 100, 1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
  padding-bottom: 20px;
  img {
    width: 45px;
    height: 45px;
  }
  svg {
    font-size: 45px;
    font-weight: 800;
    cursor: pointer;
  }
`;

const ManuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  flex-direction: column;

  p {
    font-size: 45px;
    font-weight: 400;
  }
`;

const ManuBox = styled.div`
  width: 100%;
  height: 100%;
`;

const ManuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(168, 184, 201, 1);
  border-radius: 12px;
  margin-bottom: 8px;
  background: rgba(86, 106, 134, 255);
  cursor: pointer;
  p {
    font-size: 24px;
    font-weight: 800;
  }
  svg {
    font-size: 30px;
  }
`;

export default ExoDrawer;
