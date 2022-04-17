import { Fragment } from 'react'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList = (props) => {
  return (
    <Fragment>
      {props.meetups.length > 0 ? (
        <ul className={classes.list}>
          {props.meetups.map((meetup) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </ul>
      ) : (
        <div className={classes.noDataMessage}>
          <h3>There is no meetup to show</h3>
        </div>
      )}
    </Fragment>
  )
}

export default MeetupList
