import { Input} from "@material-tailwind/react";
import { useState } from "react";

function Search(props) {
    const {setArticleShow, articleList} = props.data
    const [nameSearch, setNameSearch] = useState("")

   const handleSearchByName = (e) => {
    setNameSearch(e.target.value)
    const filteredArr = articleList.filter((it) =>{
    if (it.nombre.includes(e.target.value)) {
        return true
    } else {
        return false
    }
})
    setArticleShow(filteredArr)
}

  return (
    <Input className="search-bar" label="Buscar por nombre:" onChange={handleSearchByName} value={nameSearch} color="black"/>
  )
}

export default Search