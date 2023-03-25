import Image from 'next/image'
import Link from 'next/link'

import styles from './card.module.css'

export const Card = (props) => {
  const { name, capital, population, region, flag, flagAlt } = props
  return (
    <Link
      href={`country/[slug]`}
      className={styles.card}
      as={`country/${name}`}
    >
      <div className={styles.flagContainer}>
        <Image
          className={styles.flag}
          fill
          src={flag}
          alt={flagAlt}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUMq2sBwACggFJ59+4jwAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div className={styles.basicInfo}>
          <label>Population:</label>
          <p>{population}</p>
        </div>
        <div className={styles.basicInfo}>
          <label>Region:</label>
          <p>{region}</p>
        </div>
        <div className={styles.basicInfo}>
          <label>Capital:</label>
          <p>{capital}</p>
        </div>
      </div>
    </Link>
  )
}
