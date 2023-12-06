import EditButton from './EditButton'
import ArticleIcon from '@mui/icons-material/Article'
import DesignServicesIcon from '@mui/icons-material/DesignServices'

function EditControls({ onChangeControls, controlState }) {
  return (
    <div className='container vertical fit'>
      <EditButton
        isActive={controlState === 'content' ? 'active' : ''}
        onChangeState={() => onChangeControls('content')}
      >
        {' '}
        <ArticleIcon />
        Content
      </EditButton>
      <EditButton
        isActive={controlState === 'customization' ? 'active' : ''}
        onChangeState={() => onChangeControls('customization')}
      >
        <DesignServicesIcon />
        Customize
      </EditButton>
    </div>
  )
}

export default EditControls
