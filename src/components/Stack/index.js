import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

import useSorting from '../../hooks/useSorting'

import CONTINENT_LIST from './data/continents'
import SORT_TYPES from './data/sorting'

import StackSortActions from '../StackSortActions'
import StackItem from '../StackItem'

const Stack = () => {
  const [activeKey, setActiveKey] = useState(null)
  const { setSorting, sortedBy, continents } = useSorting(
    'area',
    SORT_TYPES,
    CONTINENT_LIST
  )

  function setActivity(key) {
    if (key === activeKey) {
      setActiveKey(null)
    } else {
      setActiveKey(key)
    }
  }

  function setSortBy(sortBy) {
    setSorting(sortBy)
    setActiveKey()
  }

  return (
    <>
      <div className="mb-4 text-center">
        <StackSortActions
          setSortBy={setSortBy}
          currentSortBy={sortedBy}
          sortTypes={SORT_TYPES}
        />
      </div>
      <Accordion activeKey={activeKey} className="w-100">
        {continents.map((continent, _index) => {
          const index = continents.length - _index
          const hasActiveHeader = activeKey === index
          return (
            <StackItem
              key={_index}
              continent={continent}
              index={index}
              isActive={hasActiveHeader}
              setActivity={setActivity}
              currentSortBy={sortedBy}
              statsTypes={SORT_TYPES}
            />
          )
        })}
      </Accordion>
    </>
  )
}

export default Stack
