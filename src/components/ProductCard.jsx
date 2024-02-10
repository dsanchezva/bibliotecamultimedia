

function ProductCard(props) {
    const {id, nombre, autor, clasificacion, imgUrl} = props.data

  return (
    <div>
        <img src={imgUrl} alt="imagen del producto" />
        <h4>{nombre}</h4>
        <p>{autor}</p>
        <p>{clasificacion}</p>
    </div>
  )
}

export default ProductCard