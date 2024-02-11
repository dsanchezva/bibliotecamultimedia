import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProductCard(props) {
    const {id, nombre, autor, clasificacion, imgUrl} = props.data

 const handleEditButton = (e) => {
    e.preventDefault()
    props.handleEdit(id)
 }

 const handleDeleteButton = (e) =>{
  e.preventDefault()
  props.handleDelete(id)
 }

  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80" id="img-card-container">
          <img src={imgUrl} alt="imagen del producto" className="max-h-40" id='img-card'/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">{nombre}</Typography>
        <Typography>{autor}</Typography>
        <Typography>{clasificacion}</Typography>
      </CardBody>

        <CardFooter className="flex justify-center gap-7 pt-2">
        <Button onClick={handleEditButton} color='pink'>Edit</Button>
        <Button onClick={handleDeleteButton} color='red'>Borrar</Button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard