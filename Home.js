import classes from './Home.module.css'
import logo from './../../img/logo.png'
import lancers from './../../img/lancers.png'
const Home = () => {
    return (
       <div className={classes.Home} id="home">
           <div className={classes.container}>
               <h1 className={classes.Hello}>Hello, Universe</h1>
           <h1>Welcome to my Website</h1>
           </div>
           <img className={classes.Logo} src={logo} alt="code"></img>
           <img className={classes.Lancers} src={lancers} alt="lancers"></img>
      
       </div> 
    )
}
export default Home