import Head from 'next/head'

import styles from './list.module.css'
import { Search } from '@components/search/search'
import { Filter } from '@components/filter/filter'
import { Card } from '@components/card/card'
import { mapCountries } from '../mappers/mapper'

function List({ countries }) {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.controls}>
            <Search />
            <Filter />
          </div>
          <div className={styles.grid}>
            {(countries || []).map((country) => (
              <Card {...country} key={country.fifa} />
            ))}
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  return {
    props: {
      countries: mapCountries(countries),
    },
  }
}

export default List