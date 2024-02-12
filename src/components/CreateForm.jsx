import React, { useEffect, useState } from 'react'
import { Input, Select, Option, Button } from "@material-tailwind/react";


function CreateForm(props) {
    const [nombre, setNombre] = useState("")
    const handleNombre = (e) => setNombre(e.target.value)
    const [autor, setAutor] = useState("")
    const handleAutor = (e) => setAutor(e.target.value)
    const [clasificacion, setClasificacion] = useState("")
    const handleClasificacion = (e) => setClasificacion(e)
    const [imgUrl, setImgUrl] = useState("")
    const handleImgUrl = (e) => setImgUrl(e.target.value)
    const [fechaCreacion, setFechaCreacion] = useState(null)

    const [disabledBtn, setDisabledBtn] = useState(true)




    const handleCreate = () => {
        const data = {
            nombre,
            autor,
            clasificacion,
            imgUrl,
            fechaCreacion,
        }
        props.handleCreate(data)
    }

    useEffect(() => {
        setFechaCreacion(new Date())
        setImgUrl("https://res.cloudinary.com/dqdhb1efh/image/upload/v1704718316/no-fotos_mihqdq.png")
    }, [])
    useEffect(() => {
        if (nombre && autor && clasificacion) {
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }
    },[nombre ,autor , clasificacion, imgUrl])

  return (
    <div className="edit-form">
    <div className="w-72">
      <Input label="Nombre" value={nombre} onChange={handleNombre} />
      <br />
      <Input label="Autor" value={autor} onChange={handleAutor} />
      <br />
      <Select label="Selecciona tipo:" value={clasificacion} onChange={handleClasificacion} >
        <Option value="Película">Pelicula</Option>
        <Option value="E-Book">E-Book</Option>
        <Option value="Videojuego">Videojuego</Option>
      </Select>
      <br />
      <Input label="Url Imagen" value={imgUrl} onChange={handleImgUrl} />
      <br />
      <Button onClick={handleCreate} disabled={disabledBtn} color="pink">Crear</Button>
    </div>
  </div>
  )
}

export default CreateForm