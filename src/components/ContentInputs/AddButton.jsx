import AddIcon from '@mui/icons-material/Add'
import classes from '../../css/AddButton.module.css'

function AddButton({ onShowForm }) {
  return (
    <div className={classes['add-on-container']}>
      <button
        className={classes.button}
        onClick={onShowForm}
      >
        <AddIcon />
        Add
      </button>
    </div>
  )
}

export default AddButton
