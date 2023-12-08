import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import classes from '../../css/Display.module.css'

import { useState } from 'react'

function Display({ data, onShowFormWithContent }) {
  const [visibility, setVisbility] = useState(true)

  function handleVisibility() {
    setVisbility(!visibility)
  }

  return (
    <div className={classes['display-container']}>
      <div
        className={classes['name-date']}
        onClick={onShowFormWithContent}
      >
        <p className={classes.title}>{data.school}</p>
        <p className={classes.date}>
          {data.startDate} &#8212; {data.endDate}
        </p>
      </div>
      <button
        className={classes.button}
        onClick={handleVisibility}
      >
        {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </button>
    </div>
  )
}

export default Display
