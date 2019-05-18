import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const propTypes = {
  currentSortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortTypes: PropTypes.array.isRequired,
}

const StackSortActions = ({ currentSortBy, setSortBy, sortTypes }) =>
  sortTypes.map(({ dataKey, text, icon: Icon }, index) => (
    <Button
      key={index}
      variant={
        dataKey === currentSortBy.dataKey ? 'secondary' : 'outline-secondary'
      }
      size="sm"
      onClick={() => setSortBy(dataKey)}
      className="mx-1 rounded-pill border-0"
    >
      <Icon className="h-15px" />
      {text}
    </Button>
  ))

StackSortActions.propTypes = propTypes

export default StackSortActions
