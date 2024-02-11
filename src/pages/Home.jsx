import { useEffect, useState } from "react";
import allArticle from "../data/peliculas.json";
import ProductCard from "../components/ProductCard";
import _ from "lodash";
import { Input, Button } from "@material-tailwind/react";
import CreateForm from "../components/CreateForm";

function Home() {
  const [articleShow, setArticleShow] = useState([]);
  const [lastId, setLastId] = useState();
  const [createFormShow, setCreateFormShow] = useState(false);

  const handleShowCreateForm = () => {
    if (createFormShow === true) {
      setCreateFormShow(false);
    } else {
      setCreateFormShow(true);
    }
  };

  const handleCreate = (data) => {
    const cloneData = articleShow.slice(0)
    setCreateFormShow(false)
    setLastId(lastId + 1 ) 
    const newArticle = {
      id: lastId,
      nombre: data.nombre,
      autor: data.autor,
      clasificacion: data.clasificacion,
      imgUrl: data.imgUrl,
      fechaCreacion: data.fechaCreacion
    }

    cloneData.unshift(newArticle)
    setArticleShow(cloneData)

  };
  const handleEdit = (data) => {
    const cloneData = articleShow.slice(0);

    const articleIndex = _.findIndex(cloneData, (it) => it.id === data.id);
    if (articleIndex >= 0) {
      cloneData[articleIndex] = data;
      console.log(cloneData);
      setArticleShow(cloneData);
    }
  };

  const handleDelete = (data) => {
    const cloneData = articleShow.slice(0);
    const articleIndex = _.findIndex(cloneData, (it) => it.id === data);
    console.log(articleIndex);
    if (articleIndex >= 0) {
      cloneData.splice(articleIndex, 1);
      setArticleShow(cloneData);
    }
  };

  useEffect(() => {
    setLastId(allArticle.length);
  }, []);

  useEffect(() => {
    setArticleShow(
      allArticle.map((it) => ({
        id: it.id,
        nombre: it.nombre,
        autor: it.autor,
        clasificacion: it.clasificacion,
        imgUrl: it.imgUrl,
        fechaCreacion: new Date(it.fechaCreacion),
      }))
    );
  }, []);

  return (
    <>
      <Button onClick={handleShowCreateForm} color="pink">Añadir nuevo articulo</Button>
      {createFormShow ? <CreateForm handleCreate={handleCreate} /> : <></>}
      <hr />
      <div className="w-72 flex gap-4">
        <Input label="Buscar por nombre:" />
        <input type="date"></input>
      </div>
      <div className="article-container">
        {articleShow.map((eachArticle, index) => {
          return (
            <ProductCard
              key={index}
              data={eachArticle}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
