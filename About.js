import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader'
import me from './../../img/me.jpg'
const About = () => {
    return (
       <div className={classes.About} id="about">
           <PageHeader title={'WHO I AM'} />
           <div className={classes.Container}>
               <div className={classes.Text}>
                   <h2>Hello.. I am Tanveer</h2>
                   <p>
                       I am an Undergraduate Computer Science student at University of Windsor.
                   </p>
               </div>
               <div className={classes.Photo}>
                   <img className={classes.Me} src={me} alt="me"></img>
               </div>
           </div>
       </div> 
    )
}
export default About