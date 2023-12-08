import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import classes from '../../css/Display.module.css'

function Display({ title, handleShowForm }) {
  return (
    <div
      onClick={handleShowForm}
      className={classes['display-container']}
    >
      {title}
      <button>
        <VisibilityIcon />
      </button>
    </div>
  )
}

export default Display
