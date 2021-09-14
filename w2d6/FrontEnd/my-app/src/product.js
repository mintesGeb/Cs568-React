function Product(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <input
        type="button"
        value="show detail"
        onClick={props.showDetailClicked}
      />
      <input type="button" value="Edit" onClick={props.editProduct} />
    </div>
  );
}

export default Product;
