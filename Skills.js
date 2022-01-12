import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader'

import codethinking from './../../img/codethinking.png'
const listTitleStyle ={ fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}
const backendSkills =

<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Java - SQL</li>
    
</ul>
const frontendSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>React - HTML - CSS</li>
    
</ul>
const messagingSkills =
<ul>
    <li style={listTitleStyle}>TYPING</li>
    <li>TYPIST</li>
    
</ul>
const dataScienceSkills =
<ul>
    <li style={listTitleStyle}>DATA SCIENCE TOOLS</li>
    <li>ELK Stack - Apache Spark</li>
    
</ul>
const buildToolsSkills =
<ul>
    <li style={listTitleStyle}>BUILD TOOLS</li>
    <li>Maven - SBT</li>
    
</ul>
const otherSkills =
<ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>Git - Json - XML</li>
    
</ul>

const totalSkills =[backendSkills, frontendSkills, messagingSkills, dataScienceSkills, buildToolsSkills, otherSkills]


const Skills = () => {
    return (
       <div className={classes.Skills} id="skills">
           <PageHeader title={'what about the Skills?'} />
       <p>
           Here are some of my skills listed below.
       </p>
       <div className={classes.Container}>
       < img className={classes.CodeThinking} src={codethinking} alt="codethinking"></img>
{totalSkills.map(Skills =>{
    return (
        <div className={classes.List}>
            {Skills}
            </div>
    )
})}
       </div>
       </div> 
    )
}
export default Skills