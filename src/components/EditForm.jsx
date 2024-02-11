import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function EditForm(props) {
  const { id, nombre, autor, clasificacion, imgUrl,fechaCreacion } = props.data;
  
  const [nombreEdit, setNombreEdit] = useState("");
  const handleNombreEdit = (e) => setNombreEdit(e.target.value);
  const [autorEdit, setAutorEdit] = useState("");
  const handleAutorEdit = (e) => setAutorEdit(e.target.value);
  const [clasificacionEdit, setClasificacionEdit] = useState("");
  const handleClasificacionEdit = (e) => setClasificacionEdit(e);
  const [imgUrlEdit, setImgUrlEdit] = useState("");
  const handleImgUrlEdit = (e) => setImgUrlEdit(e.target.value);
  
  
  
    useEffect(() =>{
    setNombreEdit(nombre)
    setAutorEdit(autor)
    setClasificacionEdit(clasificacion)
    setImgUrlEdit(imgUrl)
  }, [])

const handleEditBtn = () => {
    const data = {
       id,
        nombre: nombreEdit,
        autor: autorEdit,
        clasificacion: clasificacionEdit,
        imgUrl: imgUrlEdit,
        fechaCreacion
    }
    props.handleEdit(data)

}


  return (
    <div className="edit-form">
      <div className="w-72">
        <Input label="Nombre" value={nombreEdit} onChange={handleNombreEdit} />
        <br />
        <Input label="Autor" value={autorEdit} onChange={handleAutorEdit} />
        <br />
        <Select label="Select Version" value={clasificacionEdit} onChange={handleClasificacionEdit} >
          <Option value="Película">Pelicula</Option>
          <Option value="E-Book">E-Book</Option>
          <Option value="Videojuego">Videojuego</Option>
        </Select>
        <br />
        <Input label="Url Imagen" value={imgUrlEdit} onChange={handleImgUrlEdit} />
        <br />
        <Button onClick={handleEditBtn}>Guardar</Button>
      </div>
    </div>
  );
}

export default EditForm;
