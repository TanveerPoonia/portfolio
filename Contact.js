import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css'
const handleURL = (url) => {
    return() => window.open(url, "_blank")
}
const Contact = () => {
    return (
       <div className={classes.Contact} id="contact">
           <div className={classes.ContactIcons}>
           <FaInstagramSquare color="white" sixe='30px' style={{padding: '1%'}}
       onClick={handleURL('https://www.instagram.com/tanveer.poonia/')} />
       <FaGithub color="white" sixe='30px' style={{padding: '1%'}}
       onClick={handleURL('https://github.com/TanveerPoonia')} />
       <FaLinkedin color="white" sixe='30px' style={{padding: '1%'}}
       onClick={handleURL('https://www.linkedin.com/in/tanveer-poonia-44110021b/')} />
       </div> 
       </div>
    )
}
export default Contact