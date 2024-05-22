export default function Input(props) {
  console.log(props)
  return (
    <input
        id={props.id}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
    />
  )
}
