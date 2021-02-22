export const findPredicateType = predicate => {
  const predicateTypes = {
    user_email: 'STRING',
    screen_width: 'INTEGER',
    screen_height: 'INTEGER',
    number_of_visits: 'INTEGER',
    first_name: 'STRING',
    last_name: 'STRING',
    page_response_time_ms: 'INTEGER',
    domain: 'STRING',
    page_path: 'STRING',
  }
  return predicateTypes[predicate]
}

export const operatorKey = (operator, firstInput, secondInput) => {
  const operators = {
    equals: `= ${firstInput}`,
    greater_than: `> ${firstInput}`,
    less_than: `< ${firstInput}`,
    between: `BETWEEN ${firstInput} AND ${secondInput}`,
    in_list: `IN ${firstInput}`,
    contains: `LIKE '%${firstInput}%'`,
    starts_with: `LIKE '${firstInput}%'`,
  }
  return operators[operator]
}

export const placeholderBuilder = predicateValue => {
  const predicateValues = {
    user_email: 'johndoe.email.com',
    screen_width: '0',
    screen_height: '0',
    number_of_visits: '0',
    first_name: 'John',
    last_name: 'Doe',
    page_response_time_ms: '0',
    domain: 'website.com',
    page_path: '/contact-us/',
  }
  return predicateValues[predicateValue]
}
