import AddIcon from '@mui/icons-material/Add'
import classes from '../../css/AddButton.module.css'

function AddButton() {
  return (
    <div className={classes['add-on-container']}>
      <button className={classes.button}>
        <AddIcon />
        Add
      </button>
    </div>
  )
}

export default AddButton
