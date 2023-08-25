import { useEffect, useState } from "react";
import agent from "../api/agent";
import { FlashcardSet } from "../models/flashcardSet";
import SetItem from "../components/SetItem";
import Pagination from "@mui/material/Pagination";
import { Pagination as Paginate } from "../models/pagination";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem } from "@mui/material";
import React from "react";

const Library = () => {
  const [sets, setSets] = useState<FlashcardSet[]>([]);
  const [paginated, setPagination] = useState<Paginate>();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [searchChanged, setSearchChanged] = useState(false);
  const [sort, setSort] = useState("");
  const debounceDelay = 300;

  useEffect(() => {
    let timeout: number | null = null;

    const fetchData = async () => {
      const params = new URLSearchParams();
      params.append("pageNumber", page.toString());
      if (search) {
        params.append("search", search);
      }
      if (sort) {
        params.append("orderBy", sort);
      }
      const paginatedData = await agent.Set.list(params);
      setPagination(paginatedData.pagination);
      setSets(paginatedData.data);
    };

    if (searchChanged) {
      timeout = setTimeout(() => {
        fetchData();
        setSearchChanged(false);
      }, debounceDelay);
    } else {
      fetchData();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [page, search, sort, searchChanged]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPage(1);
    setSearchChanged(true);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (sort: string) => {
    setSort(sort);
    setAnchorEl(null);
  };

  return (
    <div className="max-w-[1100px] mx-auto mt-6 p-2">
      <div className="flex justify-between">
        <div className="bg-secondary w-fit px-4 rounded-md flex items-center cursor-pointer">
          <div onClick={handleClick}>
            Sort By: {sort ? <p className="inline">{sort}</p> : "Title"}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose("")}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose("Recent")}>Recent</MenuItem>
            <MenuItem onClick={() => handleClose("")}>Title</MenuItem>
          </Menu>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </div>
            <input
              className="w-full p-2 pl-10 text-sm text-white placeholder:text-white bg-accent rounded-lg"
              placeholder="Search your sets..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        {sets
          ? sets.map((set: FlashcardSet) => <SetItem key={set.id} {...set} />)
          : null}
      </div>
      <div className="bg-secondary rounded-md mt-9 w-fit mx-auto p-2">
        <Pagination
          count={paginated?.totalPages}
          page={page}
          onChange={handlePageChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default Library;
