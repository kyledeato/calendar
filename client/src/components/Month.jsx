import React, {useState, useEffect} from 'react'
import Day from './Day'
import axios from 'axios'
import dayjs from 'dayjs'
const Month = (props) => {
  const {month, user, userID} = props
  const [event, setEvent] = useState([])
  const [list, setList] = useState([])
  const [refresh, setRefresh] = useState(false)

  //REFRESH LIST IS COMING FROM HERE
  useEffect(() => {
    axios.get("http://localhost:8000/api/event/")
      .then((res) => {
        setEvent(res.data)
        console.log(res.data)
        setRefresh(false)
      })
      .catch(err => {
        console.log(err)
      })
  },[month, refresh, list])

console.log(userID)
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
                     return <Day day={day} key={idx} rowIdx={i} user={user} event={event} list={list} userID={userID} refresh={()=>setRefresh(true)}/>
                })}
            </React.Fragment>
        })}
    </div>
  )
}

export default Month