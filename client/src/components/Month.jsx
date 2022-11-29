import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import Day from './Day'
import axios from 'axios'
import day from 'dayjs'
import GlobalContext from '../context/GlobalContext'

const Month = (props) => {
  const {month, user, userID, monthBg} = props
  const [event, setEvent] = useState([])
  const [list, setList] = useState([])
  const [refresh, setRefresh] = useState(false)

  //REFRESH LIST IS COMING FROM HERE
  useEffect(() => {
    axios.get("http://localhost:8000/api/event/")
      .then((res) => {
        setEvent(res.data)
        setRefresh(false)
        
      })
      .catch(err => {
        console.log(err)
      })
  },[month, refresh, list])





  return (
    
    <div className={`flex-1 grid grid-cols-7 grid-rows-5 gap-1 bg-skin-${monthBg.toLowerCase()} pr-6 pb-6`}>


        {/* row represents weeks */}
        
        {month.map((row, i) => {
            return <React.Fragment key={i}>
                {row.map((day, idx)=> {
                     return  <div> 
                      {i === 0 && (
            <p className='text-m mt-1 text-center font-bold'> {day.format('dddd')}</p>
          )}
                       <Day monthBg={monthBg} day={day} key={idx} rowIdx={i} user={user} event={event} list={list} userID={userID} refresh={()=>setRefresh(true)}/>

                     </div>
                     
                     
                })}
            </React.Fragment>
        })}
    </div>
  )
}

export default Month