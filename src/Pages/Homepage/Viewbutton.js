import {React,useContext} from 'react'
import './Viewbutton.css'
import axios from 'axios'
import {homeContext } from '../../Context/HomeContext'

function Viewbutton() {

  const [post]=useContext(homeContext)
 
    
    return (
        <div>
            <button className="but1">
            {post.storyButton}
            </button>
            <h1></h1><br></br><br></br><br></br>
        </div>
    )
}

export default Viewbutton
