import home from "../assets/home.png";
import person from "../assets/person.png";
import plus from "../assets/plus.png";
import searchpic from "../assets/search.png";
import note from "../assets/note.png";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { router } from "../routes/Routes";

const MobileNavBar = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpen] = useState(false);
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

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search) {
      router.navigate(`/Results/${search}`);
    }
  };
  
  {
    return (
      <div className="sticky w-full z-50 bottom-0 py-3 absolute bg-primary hidden max-lg:block drop-shadow-[0px_2px_5px_rgba(0,0,0,0.75)]">
        <div
          className="container flex items-center place-content-evenly m-auto" /*style={{ padding-right: ` 5%!important; `, padding-left:` 5%!Important` }}*/
        >
          <div>
            <Link to="/">
              <img
                src={home}
                alt="home"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="block ">
            <Button onClick={handleOpenModal}>
              <img
                src={searchpic}
                alt="search"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Button>
            {/*modal stuff*/}
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
          </div>

          <div className="block ">
            <Link to="/Create">
              <img
                src={plus}
                alt="note"
                className="p-[5px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] w-[100px] h-auto active:translate-y-2 transition-all duration-150"
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Edit">
              <img
                src={note}
                alt="note"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Profile">
              <img
                src={person}
                alt="person"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default MobileNavBar;
