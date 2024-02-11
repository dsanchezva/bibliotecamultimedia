import { useEffect, useState } from 'react'
import allArticle from '../data/peliculas.json'
import ProductCard from '../components/ProductCard'
import { Input, Select, Option } from "@material-tailwind/react";


function Home() {
  const [articleShow, setArticleShow] = useState([])
  const [showEditForm, setShowEditForm] = useState(false)

  //Hooks para editar
  const [articleEdit, setArticleEdit] = useState(null)
  const[nombreEdit, setNombreEdit] = useState("")
  const handleNombreEdit = (e) => setNombreEdit(e.target.value)
  const[autorEdit, setAutorEdit] = useState("")
  const handleAutorEdit = (e) => setAutorEdit(e.target.value)
  const[clasificacionEdit, setClasificacionEdit] = useState("")
  const handleClasificacionEdit = (e) => console.log(e)
  const[imgUrlEdit, setImgUrlEdit] = useState("")
  const handleImgUrlEdit = (e) => setImgUrlEdit(e.target.value)
  


  const handleEdit = (data) => {
    const articulo = articleShow.find((article) => article.id === data)
    setArticleEdit(articulo)
    setShowEditForm(true)
  }

  //Borra el elemento seleccionado
  const handleDelete = (data) => {
    //copio el array para no mutar el original
    const cloneData = articleShow.slice(0)
    //borro el elemento por su id del array
    cloneData.splice(data, 1)
    //asignamos el parametro de id que sea igual al indice del array
    const newArray = cloneData.map((each, index) => {
      each.id = index
      return each
    })
    //visualizamos en pantalla el nuevo array con el elemetno eliminado
   setArticleShow(newArray)


  }
  useEffect(() => {
      setArticleShow(allArticle)
  }, [])





  return (
    <>
    
    {showEditForm ? <div className='edit-form'>
    <div className="w-72">
      <Input label="Nombre" value={articleEdit.nombre} onChange={handleNombreEdit}/>
      <br />
      <Input label="Autor" value={articleEdit.autor} onChange={handleAutorEdit}/>
    <br />
    <Select label="Select Version" onSelect={handleClasificacionEdit}>
        <Option>Pelicula</Option>
        <Option>E-Book</Option>
        <Option>Videojuego</Option>
        </Select>
    <br />
      <Input label="Url Imagen" value={articleEdit.imgUrl} onChange={handleImgUrlEdit}/>

    </div>
    </div> : <></>}
    
    <div className='article-container'>  
      {articleShow.map((eachArticle, index) => {
        return <ProductCard key={index}data={eachArticle} handleEdit={handleEdit} handleDelete={handleDelete}/>
      })}
    </div>
    
    </>
    
  )
}

export default Home