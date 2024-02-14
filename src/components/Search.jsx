import { Input } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Search(props) {
  const { setArticleShow, articleList, setDeleteSearch, deleteSearch} = props.data;
  const [nameSearch, setNameSearch] = useState("");

  const handleDeleteBtn = () => {
    setNameSearch("");
    setArticleShow(articleList);
  };
  
  const handleSearchByName = (e) => {
    setNameSearch(e.target.value);
    const filteredArr = articleList.filter((it) => {
      if (it.nombre.includes(e.target.value)) {
        return true;
      } else {
        return false;
      }
    });
    setArticleShow(filteredArr);
  };

  useEffect(() => {
    setDeleteSearch(false)
    setNameSearch("");
  }, [deleteSearch]);

  return (
    <div className="flex flex-row">
      <IconButton
        aria-label="delete"
        className="deleteDate-btn"
        onClick={handleDeleteBtn}
      >
        <DeleteIcon />
      </IconButton>
      <Input
        className="search-bar w-28"
        label="Buscar por nombre"
        onChange={handleSearchByName}
        value={nameSearch}
        color="black"
      />
    </div>
  );
}

export default Search;
