import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Modal,
  Box,
  TextField,
  Button
} from "@mui/material";
import React, { Children, useState } from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "../../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";


const { Logo } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);


const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [openModal,setShowModal]=useState(false)

  
const save =()=>{
  
}

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
 <Modal
 sx={{height:"67%",mt:10,width:"30%",ml:"37.5%",backgroundColor:"white", zIndex:100, opacity:"95%"}}
  open={openModal}
  onClose={()=>setShowModal(false)}
  hideBackdrop={false}
  backdropFilter={"20%"}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<form onSubmit={save} style={{display:"flex",flexDirection:"column"}}>
<TextField  InputLabelProps={{
        style: { color: 'white' }
      }}
      inputProps={{
        style: { color: 'white' }
      }}id="standard-basic" label="First Name" variant="standard"  sx={{width:"90%", mt:2,ml:3,mr:10}} />

<TextField  InputLabelProps={{
        style: { color: 'white' }
      }}
      inputProps={{
        style: { color: 'white' }
      }}id="standard-basic" label="Last Name" variant="standard"sx={{width:"90%", mt:2,ml:3,mr:10}} />
<TextField InputLabelProps={{
        style: { color: 'white' }
      }}
      inputProps={{
        style: { color: 'white' }
      }} id="standard-basic" label="Email" variant="standard"  sx={{width:"90%", mt:2,ml:3,mr:10}}/>
<TextField InputLabelProps={{
        style: { color: 'white' }
      }}
      inputProps={{
        style: { color: 'white' }
      }} id="standard-basic" label="Phone" variant="standard"  sx={{width:"90%", mt:2,ml:3,mr:10}} />
<TextField InputLabelProps={{
        style: { color: 'white' }
      }}
      inputProps={{
        style: { color: 'white' }
      }} id="standard-basic" label="Address" variant="standard" sx={{width:"90%", mt:2,ml:3,mr:10}} />
      <>
      <Button variant="filled" sx={{mt:2, width:"50%", ml:"25%",backgroundColor:"black"}} >Enquire Now</Button>
      <Button onClick={()=>setShowModal(false)} variant="filled" sx={{mt:2,width:"50%", ml:"25%", backgroundColor:"white", mb:2, color:"black"}} >Cancel</Button>    
          </>
     
  </form>
</Modal>
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          {/* <img src={Logo} style={{ height: "100%", objectFit: "contain" }} /> */}
          <h3>VIRIDIAN</h3>

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <a href='#section1' style={{textDecoration:"none"}}>
              <LinkButton >
                <Typography variant="body2">Home</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>
              </a>


              <a href='#section2' style={{textDecoration:"none"}}>
              <LinkButton>
                <Typography variant="body2">Technology</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>
              </a>

              
              <a href='#section3' style={{textDecoration:"none"}}>
              <LinkButton>
                <Typography variant="body2">Projects</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>
              </a>

              <LinkButton>
                <Typography onClick={()=>window.location="/zete"} variant="body2">ZETE AI</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>


              <LinkButton>
                <Typography onClick={()=>setShowModal(true)} variant="body2">Contact Us</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              {/* <LinkButton spacing={0.5}>
                <Typography variant="body2">Blog</Typography>
                <CallMadeIcon sx={{ fontSize: 12 }} />
              </LinkButton> */}
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton spacing={1}>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>

              {/* <LaunchButton sx={{ borderRadius: 3 }} /> */}
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
