export function Headline (props) {
  console.log(props.title);
  return (
    <>
      <h1>This is {props.title} page!</h1>
    </>
  );
}
