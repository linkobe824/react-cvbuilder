import classes from '../../css/InputField.module.css'

function InputField({ label, value, id, type = 'text', disabled }) {
  return (
    <>
      <label
        className={classes.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={classes.input}
        type={type}
        value={value}
        id={id}
        disabled={disabled}
      />
    </>
  )
}

export default InputField
