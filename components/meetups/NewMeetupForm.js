import { useRouter } from 'next/router'
import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
  const router = useRouter()

  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const meetupDate = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    }

    props.onAddMetup(meetupDate)
  }

  const cancelHandler = () => {
    router.replace('/')
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            required
            type='text'
            rows='5'
            id='description'
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button
            type='button'
            className={classes.cancel}
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button type='submit' className={classes.submit}>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
