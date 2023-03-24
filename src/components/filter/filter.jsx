import styles from './filter.module.css'
export const Filter = () => {
  return (
    <select className={styles.select}>
      {/* <option hidden selected>
        Filter by Region
      </option> */}
      <option value="" selected>
        All Regions
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
