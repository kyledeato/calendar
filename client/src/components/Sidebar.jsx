import React from 'react'

const Sidebar = (props) => {
  const {monthBg} = props
  return (
    <div className={`bg-skin-${monthBg.toLowerCase()}` }>
      
      Sidebar</div>
  )
}

export default Sidebar