import { useState } from "react"
import { Link, useNavigate } from "react-router"



export default function ThemeCard({topic, setTopic}) {
 
  let navigate = useNavigate()
  
  return (


    <div>
<Link to={`/themes/${topic.id}`}>
<h3>{topic.title}</h3></Link>
    </div>
  )
}
