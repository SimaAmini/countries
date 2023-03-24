const formatNativeNames = (list) =>
  Object.keys(list).map((key) => list[key].common)

const formatCurrencies = (list) =>
  Object.keys(list).map((key) => list[key].name)

const formatLanguages = (list) => Object.keys(list).map((key) => list[key])

export const mapCountry = (list) => {
  const country = list[0]
  if (!country) return null

  return {
    name: country?.name?.common,
    capital: (country?.capital && country?.capital[0]) || null,
    population: country?.population,
    region: country?.region,
    flag: country?.flags.svg,
    flagAlt: country?.flags?.alt || null,
    nativeName: formatNativeNames(country.name.nativeName).join(', '),
    subregion: country.subregion,
    topLevelDomain: country.tld.join(', '),
    currencies: formatCurrencies(country.currencies).join(', '),
    languages: formatLanguages(country.languages).join(', '),
    borderCountries: country.borders,
  }
}
