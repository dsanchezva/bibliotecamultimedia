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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function ProductCard(props) {
  const { id, nombre, autor, clasificacion, imgUrl, fechaCreacion } =
    props.data;
  const [showEditForm, setShowEditForm] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEditButton = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    setOpen(false);
    props.handleDelete(id);
  };

  const handleEditWrapper = (data) => {
    props.handleEdit(data);
    setShowEditForm(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
          <CardBody className="text-center p-4">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-wrap"
            >
              {nombre}
            </Typography>
            <Typography>{autor}</Typography>
            <Typography color="pink">{clasificacion}</Typography>
            <Typography>Creado: {fechaCreacion.toDateString()}</Typography>
          </CardBody>

          <CardFooter className="flex flex-column items-center gap-7">
            <Button onClick={handleEditButton} color="pink" className="mr-5">
              Editar
            </Button>
            <Button onClick={handleOpen} color="red">
              Borrar
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }} color="black">
                  ¿Estas seguro que quieres borrar este articulo?
                </Typography>
                <Button onClick={handleDeleteButton} color="red">
              Borrar
            </Button>
              </Box>
            </Modal>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

export default ProductCard;
