import React from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo'
import { Listing, ListingsData } from './types'

const LISTING = gql`
  query Listing {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`

interface Props {
  title?: string;
}

export const Listings: React.FC<Props> = ({ title }) => {
  const { 
    data, loading, error, 
  } = useQuery<ListingsData>(LISTING)

  const listings = data ? data.listings : null
  const listingsList = listings ? (
    <ul>
      {listings.map((item: Listing) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  ) : null

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error...</h2>

  return (
    <>
      <h2>
        TinyHouse Listings{title}
      </h2>
      {listingsList}
    </>
  )
}

