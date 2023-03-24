import styles from './card.module.css'

export const Card = () => {
  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={styles.flag}
        style={{ backgroundImage: "url('http://placehold.it/800x600')" }}
      />
      <div className={styles.info}>
        <h3>Germany</h3>
        <div className={styles.basicInfo}>
          <label>Population:</label>
          <p>4854545454</p>
        </div>
        <div className={styles.basicInfo}>
          <label>Region:</label>
          <p>Europe</p>
        </div>
        <div className={styles.basicInfo}>
          <label>Capital:</label>
          <p>4854545454</p>
        </div>
      </div>
    </a>
  )
}
