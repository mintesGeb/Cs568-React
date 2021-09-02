function FirstName(props) {
  return (
    <div>
      <p>
        {props.children}
        {props.fname}
      </p>
    </div>
  );
}
export default FirstName;
