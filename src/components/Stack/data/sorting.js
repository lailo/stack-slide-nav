import { ReactComponent as DensitySVG } from '../assets/icons/density.svg'
import { ReactComponent as MaximizeSVG } from '../assets/icons/maximize.svg'
import { ReactComponent as FlagSVG } from '../assets/icons/flag.svg'
import { ReactComponent as UsersSVG } from '../assets/icons/users.svg'

export default [
  {
    dataKey: 'area',
    text: 'Area',
    unit: 'km2',
    icon: MaximizeSVG,
  },
  {
    dataKey: 'population',
    text: 'Population',
    unit: '',
    icon: UsersSVG,
  },
  {
    dataKey: 'populationDensity',
    text: 'Population Density',
    unit: '/ km2',
    icon: DensitySVG,
  },
  {
    dataKey: 'countries',
    text: 'Countries',
    unit: '',
    icon: FlagSVG,
  },
]
