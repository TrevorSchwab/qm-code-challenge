import React, {useState} from 'react'
import PredicateRow from './components/PredicateRow'
import {INITIAL_ROW_STATE} from './constants'
import {findPredicateType, operatorKey} from './utils'
import './App.css'

const App = () => {
  const [predicateRows, setPredicateRows] = useState([INITIAL_ROW_STATE])
  const [sqlStatement, setSqlStatement] = useState('')

  const handlePredicateChange = (e, i) => {
    const updateRows = predicateRows.map((row, index) => {
      if (i === index) {
        return {
          ...row,
          predicateValue: e.target.value,
          predicateType: findPredicateType(e.target.value),
          operator: 'equals',
        }
      }
      return row
    })
    setPredicateRows(updateRows)
  }

  const handleOperatorChange = (e, i) => {
    const updatedRows = predicateRows.map((row, index) => {
      if (i === index) {
        return {
          ...row,
          operator: e.target.value,
        }
      }
      return row
    })
    setPredicateRows(updatedRows)
  }

  const handleInputChange = (e, i) => {
    const {name, value} = e.target
    const updatedRows = predicateRows.map((row, index) => {
      if (i === index) {
        return {
          ...row,
          [name]: value,
        }
      }
      return row
    })
    setPredicateRows(updatedRows)
  }

  const resetPredicateBuilder = () => {
    setPredicateRows([INITIAL_ROW_STATE])
    setSqlStatement('')
  }

  const createSQLStatement = () => {
    const sql = predicateRows.map((x, i) => {
      const multipleRows = i < predicateRows.length - 1 ? 'AND' : ''

      return `${x.predicateValue} ${operatorKey(
        x.operator,
        x.firstInput,
        x.secondInput,
      )} ${multipleRows}`
    })

    const builtSqlStatement = `SELECT * FROM session WHERE  ${sql.join(' ')}`
    setSqlStatement(builtSqlStatement)
  }

  return (
    <div className="container">
      <main>
        <h3 className="predicate-title">Search for Sessions</h3>
        {predicateRows.map((row, i) => {
          return (
            <PredicateRow
              key={i} // This is bad React practice. Ideally each piece of data would have a unique key, or you'd generate one with a library
              index={i}
              row={row}
              predicateRows={predicateRows}
              setPredicateRows={setPredicateRows}
              handlePredicateChange={handlePredicateChange}
              handleOperatorChange={handleOperatorChange}
              handleInputChange={handleInputChange}
              resetPredicateBuilder={resetPredicateBuilder}
            />
          )
        })}
        <div className="and-button-container">
          <button
            className="and-button"
            type="button"
            onClick={() =>
              setPredicateRows([...predicateRows, INITIAL_ROW_STATE])
            }
          >
            And
          </button>
        </div>
        <div className="search-reset-button-container">
          <button
            className="search-button"
            type="button"
            onClick={createSQLStatement}
          >
            <span className="search-icon-container">
              <i className="fas fa-search"></i>
            </span>
            Search
          </button>
          <button
            className="reset-button"
            type="button"
            onClick={resetPredicateBuilder}
          >
            Reset
          </button>
        </div>
        <div className="sql-query-container">
          {sqlStatement && <div className="sql-query">{sqlStatement}</div>}
        </div>
      </main>
    </div>
  )
}

export default App
