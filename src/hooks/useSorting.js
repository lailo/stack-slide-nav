import { useState, useMemo } from 'react'

export default function useSorting(initSortBy, sortingData, continentData) {
  const [sortBy, setSorting] = useState(initSortBy)
  const sortedBy = useMemo(
    () => sortingData.find(item => item.dataKey === sortBy),
    [sortBy, sortingData]
  )
  const continents = useMemo(
    () => continentData.sort((a, b) => a.data[sortBy] - b.data[sortBy]),
    [sortBy, continentData]
  )

  return {
    setSorting,
    sortedBy,
    continents,
  }
}
