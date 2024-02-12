import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import EditForm from "./EditForm";

function ProductCard(props) {
  const { id, nombre, autor, clasificacion, imgUrl, fechaCreacion } =
    props.data;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditButton = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    props.handleDelete(id);
  };

  const handleEditWrapper = (data) => {
    props.handleEdit(data);
    setShowEditForm(false);
  };

  return (
    <Card
      className="flex flex-col justify-items-center items-center"
      id="article-card"
    >
      {showEditForm ? (
        <EditForm data={props.data} handleEdit={handleEditWrapper} />
      ) : (
        <>
          <CardHeader floated={false} className="h-80" id="img-card-container">
            <img
              src={imgUrl}
              alt="imagen del producto"
              className="max-h-40"
              id="img-card"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-wrap"
            >
              {nombre}
            </Typography>
            <Typography>{autor}</Typography>
            <Typography>{clasificacion}</Typography>
            <Typography>Creado: {fechaCreacion.toDateString()}</Typography>
          </CardBody>

          <CardFooter className="flex flex-column items-center gap-7 pt-2">
            <Button onClick={handleEditButton} color="pink" className="mr-5">
              Editar
            </Button>
            <Button onClick={handleDeleteButton} color="red">
              Borrar
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

export default ProductCard;
