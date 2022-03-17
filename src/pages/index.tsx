import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'
import { GET_PLACES } from 'graphql/querys'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    slug: `${params?.slug}`
  })
  return {
    props: {
      places
    }
  }
}
