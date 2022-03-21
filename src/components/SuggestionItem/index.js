import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = suggestionDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="suggestion-card">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="logo" className="logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>

      <button type="button" className="delete-button" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
