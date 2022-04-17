import { Fragment } from 'react'
import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'

const MeetupListPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='List of highly active meetups' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/meetups')
  const meetups = await response.json()

  return {
    props: {
      meetups: meetups.map((item) => ({
        id: item._id.toString(),
        image: item.image,
        title: item.title,
        address: item.address,
        description: item.description,
      })),
    },
    revalidate: 10,
  }
}

export default MeetupListPage
