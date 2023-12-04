import classes from '../css/EditButton.module.css'

function EditButton({ children, onChangeState, isActive }) {
  return (
    <button
      className={isActive === 'active' ? classes.active : classes.button}
      onClick={onChangeState}
    >
      {children}
    </button>
  )
}

export default EditButton
