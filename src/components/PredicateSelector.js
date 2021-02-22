const PredicateSelector = ({
  index,
  row,
  predicateRows,
  setPredicateRows,
  handlePredicateChange,
  resetPredicateBuilder,
}) => {
  return (
    <div className="row-selector-container">
      <button
        className="predicate-row-remove-button"
        type="button"
        onClick={
          predicateRows.length > 1
            ? () =>
                setPredicateRows(predicateRows.filter((_, i) => i !== index))
            : resetPredicateBuilder
        }
      >
        <i className="fas fa-times"></i>
      </button>
      <label className="selector-container">
        <select
          value={row.predicateValue}
          className="selector"
          onChange={e => handlePredicateChange(e, index)}
        >
          <option value="user_email">User Email</option>
          <option value="screen_width">Screen Width</option>
          <option value="screen_height">Screen Height</option>
          <option value="number_of_visits"># of Visits</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="page_response_time_ms">Page Response Time (ms)</option>
          <option value="domain">Domain</option>
          <option value="page_path">Page Path</option>
        </select>
      </label>
      {row.operator !== 'equals' && row.predicateType === 'INTEGER' && (
        <div className="is-and-container">
          <span>is</span>
        </div>
      )}
    </div>
  )
}

export default PredicateSelector
