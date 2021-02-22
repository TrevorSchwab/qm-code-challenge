import PredicateSelector from './PredicateSelector'
import OperatorSelector from './OperatorSelector'
import InputSelector from './InputSelector'

const PredicateRow = ({
  index,
  row,
  predicateRows,
  setPredicateRows,
  handlePredicateChange,
  handleOperatorChange,
  handleInputChange,
  resetPredicateBuilder,
}) => {
  return (
    <div className="predicate-row-container">
      <PredicateSelector
        index={index}
        row={row}
        predicateRows={predicateRows}
        setPredicateRows={setPredicateRows}
        handlePredicateChange={handlePredicateChange}
        resetPredicateBuilder={resetPredicateBuilder}
      />
      <OperatorSelector
        index={index}
        row={row}
        handleOperatorChange={handleOperatorChange}
      />
      <InputSelector
        index={index}
        row={row}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default PredicateRow
