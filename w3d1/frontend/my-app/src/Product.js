function Product(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <input type="button" value="Detail" onClick={props.detailClicked} />
      <hr />
    </div>
  );
}
export default Product;
