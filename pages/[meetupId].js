import { Fragment } from 'react'
import Head from 'next/head'
import MeetupDetails from '../components/meetups/MeetupDetails'

const MeetupDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name='description' content={props.meetup.description} />
      </Head>
      <MeetupDetails
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </Fragment>
  )
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/meetups')
  const meetups = await response.json()

  return {
    // fallback: 'blocking',
    fallback: false,
    paths: meetups.map((item) => ({
      params: { meetupId: item._id.toString() },
    })),
  }
}

export async function getStaticProps({ params }) {
  const meetupId = params.meetupId
  const response = await fetch(`http://localhost:3000/api/meetups/${meetupId}`)
  const meetup = await response.json()

  return {
    props: {
      meetup,
    },
  }
}

export default MeetupDetailsPage
