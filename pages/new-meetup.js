import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const router = useRouter()

  async function onAddMetupHandler(meetupDate) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupDate),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    router.replace('/')
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetup, creating amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMetup={onAddMetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage
