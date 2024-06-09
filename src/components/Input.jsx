export default function Input(props) {
  return (
    <input
        id={props.id}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required
    />
  )
}
