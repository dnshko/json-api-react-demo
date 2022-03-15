import {React,useContext} from 'react'
import { homeContext } from '../../Context/HomeContext'
// import {homeContext} from "./Context/HomeContext"
// import '../../test.module.css'
// import * as hStyles from "../../test.module.css"
// import { Nav,Container,Navbar} from 'react-bootstrap'
export default function Header() {
    // const {featureHeading2}= useContext(homeContext)
    // console.log({featureHeading2})
    const [post]=useContext(homeContext)
    return (
        <div>
           {/* <h1>header</h1>
           <h2>{post.featureHeading2}</h2>
           <h2>{post.featureHeading1}</h2> */}
           {/* <section className={hStyles.test}>children</section> */}
        </div>
    )
}
