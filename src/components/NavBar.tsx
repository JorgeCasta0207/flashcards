import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { router } from "../routes/Routes";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Menu, MenuItem, Modal, Typography } from "@mui/material";
import React from "react";
import agent from "../api/agent";
import { User } from "../models/user";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem("token");
  const [openModal, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  useEffect(() => {
    const fetchData = async () => {
      const data = await agent.Account.current();
      setUser(data);
    };

    if (token) {
      fetchData();
    } else {
      setUser(null);
    }
  }, [token]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search) {
      router.navigate(`/Results/${search}`);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option: string) => {
    switch (option) {
      case "sets":
        router.navigate("/Library");
        break;
      case "create":
        router.navigate("/Create");
        break;
      case "profile":
        router.navigate("/Profile");
        break;
      case "logout":
        localStorage.removeItem("token");
        setUser(null);
        router.navigate("/");
        break;
      default:
        break;
    }

    setAnchorEl(null);
  };

  return (
    <nav className="bg-primary px-5">
      <div className="">
        <div className="mx-auto flex justify-between items-center p-1">
          {/*Logo vvv*/}
          <img
            className="h-20 w-auto cursor-pointer"
            src={logo}
            alt="Quiz Lit"
            onClick={() => router.navigate("/")}
          />
          {/*Search bar vvv*/}

          {/* <Link to="/">Home |</Link>
              <Link to="/Login"> Login |</Link>
              <Link to="/Signup"> Signup |</Link>
              <Link to="/Profile"> Profile |</Link>
              <Link to="/Library"> Library |</Link>
              <Link to="/Study"> Study |</Link>
              <Link to="/Results"> SearchResults |</Link>
              <Link to="/Create"> Create |</Link>
              <Link to="/Edit"> Edit |</Link> */}

          <div className="relative w-1/3 visible max-lg:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </div>
            <input
              className="w-full p-2 pl-10 text-sm text-white placeholder:text-white bg-accent rounded-lg"
              placeholder="Search all sets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
          </div>

          {/*-- Modal toggle --*/}
          <Button variant="outlined" startIcon={<SearchIcon sx={{color:'black', fontSize:'1.5rem'}}/>} sx={{ display: { xs: 'visible', lg: 'none'}, color:'white', bgcolor: 'rgb(156 115 246)', ":hover": {bgcolor:'#834AFF'}, textTransform: 'none'}} onClick={handleOpenModal}>
          <Typography sx={{ fontWeight: 'medium' }}>Search</Typography>
           </Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Search
              </Typography>
            <div className="relative w-[100%] mt-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </div>
            <input
              className="w-full p-2 pl-10 text-white placeholder:text-white bg-accent rounded-lg"
              placeholder="Search all sets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
          </div>
          </Box>
          </Modal>




          {user ? (
            <div>
              {user.image ? (
                <Avatar
                  src={user.image}
                  className="cursor-pointer"
                  onClick={handleClick}
                />
              ) : (
                <Avatar
                  sx={{ bgcolor: "#ff5722", width: 45, height: 45 }}
                  className="cursor-pointer"
                  onClick={handleClick}
                >
                  {user.username[0].toUpperCase()}
                </Avatar>
              )}

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose("")}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleClose("sets")}>
                  Your Sets
                </MenuItem>
                <MenuItem onClick={() => handleClose("create")}>
                  Create Set
                </MenuItem>
                <MenuItem onClick={() => handleClose("profile")}>
                  Your Profile
                </MenuItem>
                <MenuItem onClick={() => handleClose("logout")}>
                  Log out
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <button
              type="button"
              className="bg-secondary py-2 px-4 rounded-full text-lg"
              onClick={() => router.navigate("/Login")}
            >
              Login / Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
