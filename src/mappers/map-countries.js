export const mapCountries = (countries) => {
  return (countries || []).map((country) => ({
    name: country?.name?.common,
    capital: (country?.capital && country?.capital[0]) || null,
    population: country?.population,
    region: country?.region,
    flag: country?.flags.svg,
    flagAlt: country?.flags?.alt || null,
  }))
}
