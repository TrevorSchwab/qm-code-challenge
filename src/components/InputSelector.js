import {placeholderBuilder} from '../utils'

const InputSelector = ({row, handleInputChange, index}) => {
  return (
    <div className="row-selector-container">
      <label className="selector-container">
        <input
          name="firstInput"
          className="selector"
          value={row.firstInput}
          onChange={e => handleInputChange(e, index)}
          placeholder={placeholderBuilder(row.predicateValue)}
        />
      </label>
      {row.operator === 'between' && (
        <div className="second-input-container">
          <div className="is-and-container">
            <span>and</span>
          </div>
          <form>
            <label>
              <input
                className="selector"
                placeholder="0"
                name="secondInput"
                value={row.secondInput}
                onChange={e => handleInputChange(e, index)}
              />
            </label>
          </form>
        </div>
      )}
    </div>
  )
}

export default InputSelector
