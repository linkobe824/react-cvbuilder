import classes from '../css/ButtonControl.module.css'

function ButtonControl({ children, onChangeState, state }) {
  return (
    <button
      className={state === 'active' ? classes.active : classes.button}
      onClick={onChangeState}
    >
      {children}
    </button>
  )
}

export default ButtonControl
