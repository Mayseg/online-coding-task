function CodeBlock(props) {
  const onClickHandle = () => {
    console.log("Clicked!");
  };
  return (
    <>
      <li key={props.id} onClick={onClickHandle}>
        {props.title}
      </li>
    </>
  );
}

export default CodeBlock;
