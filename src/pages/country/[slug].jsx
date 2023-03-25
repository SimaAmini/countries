import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

import { Button } from '@components/button'
import { mapCountry } from '@mappers/map-country'

import styles from './country.module.css'

const Country = ({ country }) => {
  const router = useRouter()

  const current = [
    { label: 'Native Name', value: country?.nativeName },
    { label: 'Population', value: country?.population },
    { label: 'Region', value: country?.region },
    { label: 'Capital', value: country?.capital },
    { label: 'Top Level Domain', value: country?.topLevelDomain },
    { label: 'Subregion', value: country?.subregion },
    { label: 'Languages', value: country?.languages },
    { label: 'Currencies', value: country?.currencies },
  ]

  const goBack = () => router.back()

  if (country)
    return (
      <div className={styles.detail}>
        <div className={styles.controls}>
          <Button onClick={goBack} withShadow>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </Button>
        </div>
        <div className={styles.informationGrid}>
          <div className={styles.flag}>
            <Image
              fill
              src={country?.flag}
              alt={country?.flagAlt}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUMq2sBwACggFJ59+4jwAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </div>
          <div className={styles.info}>
            <h1>{country?.name}</h1>

            {current.map((c, index) => (
              <div className={styles.basicInfo} key={index}>
                <label className={styles.label}>{c.label}: </label>
                <p>{c.value}</p>
              </div>
            ))}
            <div className={styles.borders}>
              <label className={styles.label}>Border Countries: </label>
              {(country?.borderCountries || []).map((borderCountry) => (
                <Link
                  href={`[slug]`}
                  as={`${borderCountry}`}
                  key={borderCountry}
                >
                  <Button withShadow className={styles.borderCountry}>
                    {borderCountry}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const country = await fetch(`https://restcountries.com/v3.1/name/${slug}`)
    .then((response) => response.json())
    .catch((error) => console.log(error))

  const countries = await fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .catch((error) => console.log(error))

  return {
    props: {
      country: mapCountry(country, countries),
    },
  }
}

export default Country
