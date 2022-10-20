import React, {useState, useEffect} from 'react'
import Day from './Day'
import axios from 'axios'
import dayjs from 'dayjs'
const Month = (props) => {
  const {month, user} = props
  const [event, setEvent] = useState([])
  const [list, setList] = useState([])
  console.log(month)
  useEffect(() => {
    axios.get("http://localhost:8000/api/event/")
      .then((res) => {
        setEvent(res.data)
        console.log("events:", event)
      })
      .catch(err => {
        console.log(err)
      })
  },[user])


  // useEffect(() => {
  //   const listOfEvents = []
  //   event.map(event => {
  //     if (event.date === day.format('MM-DD-YY')) {
  //       listOfEvents.push(event)
  //       // console.log("lilistOfEventsst: ",listOfEvents)
  //     }
  //   })
  //   setList(listOfEvents)
  //   console.log("list", listOfEvents)
  // }, [user])

  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>


        {/* row represents weeks */}
        {month.map((row, i) => {
            return <React.Fragment key={i}>
                {row.map((day, idx)=> {
                    // {event.map(event=> {
                    //   if (event.date === day.format('MM-DD-YY')){
                    //     setList(event)
                    //   }
                    // })}
                     return <Day day={day} key={idx} rowIdx={i} user={user} event={event} list={list}/>
                })}
            </React.Fragment>
        })}
    </div>
  )
}

export default Month