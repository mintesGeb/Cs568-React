function FirstName(props) {
  return (
    <div>
      <p>
        {props.children}
        {props.fname}
      </p>
      <input type="text" onChange={props.changeName} value={props.fname} />
    </div>
  );
}
export default FirstName;
