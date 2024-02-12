import { useEffect, useState } from "react";
import allArticle from "../data/peliculas.json";
import ProductCard from "../components/ArticleCard";
import _ from "lodash";
import { Button } from "@material-tailwind/react";
import CreateForm from "../components/CreateForm";
import DatePick from "../components/DatePick";
import Search from "../components/Search";

function Home() {
  const [articleShow, setArticleShow] = useState([]);
  const [lastId, setLastId] = useState();
  const [createFormShow, setCreateFormShow] = useState(false);
  const [articleList, setArticleList] = useState([]);

  const handleShowCreateForm = () => {
    if (createFormShow === true) {
      setCreateFormShow(false);
    } else {
      setCreateFormShow(true);
    }
  };

  const handleCreate = (data) => {
    const cloneData = articleList.slice(0);
    setCreateFormShow(false);
    setLastId(lastId + 1);
    const newArticle = {
      id: lastId,
      nombre: data.nombre,
      autor: data.autor,
      clasificacion: data.clasificacion,
      imgUrl: data.imgUrl,
      fechaCreacion: data.fechaCreacion,
    };

    cloneData.unshift(newArticle);
    setArticleList(cloneData);
    setArticleShow(cloneData);
  };
  const handleEdit = (data) => {
    const cloneData = articleList.slice(0);

    const articleIndex = _.findIndex(cloneData, (it) => it.id === data.id);
    if (articleIndex >= 0) {
      cloneData[articleIndex] = data;
      setArticleShow(cloneData);
      setArticleList(cloneData);
    }
  };

  const handleDelete = (data) => {
    const cloneData = articleList.slice(0);
    const articleIndex = _.findIndex(cloneData, (it) => it.id === data);

    if (articleIndex >= 0) {
      cloneData.splice(articleIndex, 1);
      setArticleShow(cloneData);
      setArticleList(cloneData);
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
    setArticleList(
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
      <div>
        <Button
          className=""
          onClick={handleShowCreateForm}
          color={createFormShow ? "red" : "pink"}
        >
          {createFormShow ? "Cancelar" : "Añadir nuevo articulo"}
        </Button>
        {createFormShow ? <CreateForm handleCreate={handleCreate} /> : <></>}
      </div>
      <div className="w-72 flex flex-col items-center justify-items-center gap-4">
        <Search
          label="Buscar por nombre:"
          data={{ setArticleShow, articleList }}
        />
        <DatePick data={{ setArticleShow, articleList }} />
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
