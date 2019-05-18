import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import StackItemStats from './StackItemStats'
import getStackItemSyles from '../utils/getStackItemSyles'

const propTypes = {
  continent: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  setActivity: PropTypes.func.isRequired,
  currentSortBy: PropTypes.object.isRequired,
  statsTypes: PropTypes.array.isRequired,
}

const defaultProps = {
  isActive: false,
}

const StackItem = ({
  continent: { image: ContinentImage, ...continent },
  index,
  isActive,
  setActivity,
  statsTypes,
  currentSortBy: { icon: SortIcon, ...currentSortBy },
}) => (
  <Card
    className={classnames('border mb-hover-0', {
      'shadow-sm': !isActive,
      'shadow-lg': isActive,
    })}
    style={getStackItemSyles(index)}
  >
    <Accordion.Toggle
      as={Card.Header}
      onClick={() => setActivity(index)}
      eventKey={index}
      className={classnames(
        'd-flex',
        'c-pointer',
        {
          'text-dark': !isActive,
          'bg-white': !isActive,
          'text-white': isActive,
          'bg-primary': isActive,
        },
        'bg-hover-primary text-hover-light'
      )}
    >
      <div className="mr-auto">{continent.title}</div>
      <div>
        <Badge pill variant="primary" className="border">
          <SortIcon className="h-15px" />
          {continent.data[currentSortBy.dataKey].toLocaleString()}{' '}
          {currentSortBy.unit}
        </Badge>
      </div>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body className="pb-2">
        <div className="row">
          <div className="col-12 color-50-dark">
            <p className="lead mb-3">{continent.text}</p>
          </div>
          <div className="col-12">
            <div className="text-center mb-3">
              <ContinentImage className="h-100 w-100 w-m350px" />
            </div>
          </div>
          <div className="col-12">
            <StackItemStats stats={continent.data} statsTypes={statsTypes} />
          </div>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)

StackItem.propTypes = propTypes
StackItem.defaultProps = defaultProps

export default StackItem
