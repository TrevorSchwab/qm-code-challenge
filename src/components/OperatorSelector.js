const OperatorSelector = ({index, row, handleOperatorChange}) => {
  return (
    <div className="row-selector-container">
      <label className="selector-container">
        {row.predicateType === 'STRING' ? (
          <select
            className="selector"
            value={row.operator}
            onChange={e => handleOperatorChange(e, index)}
          >
            <option value="equals">equals</option>
            <option value="contains">contains</option>
            <option value="starts_with">starts with</option>
            <option value="in_list">in list</option>
          </select>
        ) : (
          <select
            className="selector"
            value={row.operator}
            onChange={e => handleOperatorChange(e, index)}
          >
            <option value="equals">equals</option>
            <option value="between">between</option>
            <option value="greater_than">greater than</option>
            <option value="less_than">less than</option>
            <option value="in_list">in list</option>
          </select>
        )}
      </label>
    </div>
  )
}

export default OperatorSelector
