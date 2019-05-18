import { ReactComponent as EuropeSVG } from '../assets/continents/europe.svg'
import { ReactComponent as AsiaSVG } from '../assets/continents/asia.svg'
import { ReactComponent as AfricaSVG } from '../assets/continents/africa.svg'
import { ReactComponent as AustraliaSVG } from '../assets/continents/australia.svg'
import { ReactComponent as NorthAmericaSVG } from '../assets/continents/northAmerica.svg'
import { ReactComponent as SouthAmericaSVG } from '../assets/continents/southAmerica.svg'
import { ReactComponent as AntarcticaSVG } from '../assets/continents/antarctica.svg'

export default [
  {
    title: 'Europe',
    image: EuropeSVG,
    text:
      'Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia.',
    data: {
      area: 10180000,
      population: 741447158,
      populationDensity: 72.9,
      countries: 50,
    },
  },
  {
    title: 'Asia',
    image: AsiaSVG,
    text:
      "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa",
    data: {
      area: 44579000,
      population: 4462676731,
      populationDensity: 100,
      countries: 49,
    },
  },
  {
    title: 'Africa',
    image: AfricaSVG,
    text:
      "Africa is the world's second largest and second most-populous continent. At about 30.3 million km2 including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With billion people as of, it accounts for about 16% of the world's human population",
    data: {
      area: 30370000,
      population: 1225080510,
      populationDensity: 36.4,
      countries: 54,
    },
  },
  {
    title: 'Australia',
    image: AustraliaSVG,
    text:
      "Australia, sometimes known in technical contexts by the names Sahul, Australinea or Meganesia, to distinguish it from the country of Australia, is the land masses which sits on Australia's continental shelf. This would include mainland Australia, Tasmania, and the island of New Guinea. Situated in the geographical region of Oceania, it is the smallest of the seven traditional continents in the English conception.",
    data: {
      area: 8600000,
      population: 38000000,
      populationDensity: 4.2,
      countries: 3,
    },
  },
  {
    title: 'North America',
    image: NorthAmericaSVG,
    text:
      'North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere; it is also considered by some to be a northern subcontinent of the Americas.',
    data: {
      area: 24709000,
      population: 579024000,
      populationDensity: 22.9,
      countries: 23,
    },
  },
  {
    title: 'South America',
    image: SouthAmericaSVG,
    text:
      'South America is a continent in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It may also be considered a subcontinent of the Americas, which is how it is viewed in the Spanish and Portuguese-speaking regions of the Americas. The reference to South America instead of other regions has increased in the last decades due to changing geopolitical dynamics.',
    data: {
      area: 17840000,
      population: 420458044,
      populationDensity: 21.4,
      countries: 12,
    },
  },
  {
    title: 'Antarctica',
    image: AntarcticaSVG,
    text:
      "Antarctica is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At, it is the fifth-largest continent.",
    data: {
      area: 14200000,
      population: 1106,
      populationDensity: 0.00008,
      countries: 0,
    },
  },
]
