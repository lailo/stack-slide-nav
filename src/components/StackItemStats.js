import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  stats: PropTypes.object.isRequired,
  statsTypes: PropTypes.array.isRequired,
}

const StackItemStats = ({ stats, statsTypes }) => (
  <div className="row">
    {statsTypes.map(({ dataKey, unit, text, icon: Icon }, index) => (
      <div className="col-12 col-sm-6 mb-3" key={index}>
        <div className="bg-light p-3 text-center h-100">
          <Icon className="mb-2 w-28px h-28px" />
          <div className="lead">
            {stats[dataKey].toLocaleString()} {unit}
          </div>
          <div className="text-uppercase text-black-50 ">
            <small>{text}</small>
          </div>
        </div>
      </div>
    ))}
  </div>
)

StackItemStats.propTypes = propTypes

export default StackItemStats
