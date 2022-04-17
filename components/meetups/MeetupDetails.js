import { Fragment } from 'react'
import classes from './MeetupDetails.module.css'

const MeetupDetails = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetails
