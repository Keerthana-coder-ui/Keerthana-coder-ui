import PropTypes from "prop-types";
const userData =[
    {
        name: "Jack",
        city: "New york",
        description: "Front end developer",
        skills:["UL/UX", "Front-end-development","HTML","CSS", "javascript", "React","Node"],
        online: true,
        profile:"images/1.jpeg",
    },
    {
        name: "Stella",
        city: "California",
        description: "Full-stack developer",
        skills:["C", "C++","Java programming", "python", "C#.Net","MySQL", "MongoDB"],
        online: false,
        profile: "images/2.jpeg",
    },
    {
        name: "Robert",
        city: "Canada",
        description: "Senior Software Developer",
        skills:["UL/UX", "Front End development","HTML","CSS", "javascript", "React","Node"],
        online:true,
        profile:"images/3.jpeg",
     }
];
function User(props){
    return(
        <div className = "card-container">
         <span className = {props.online ? "pro online":"pro offline"}>{props.online ?"ONLINE" : "OFFLINE"}</span>
         <img src={props.profile} className="img" alt ="user"/>
         <h3>{props.name}</h3>
         <h3>{props.city}</h3>
         <p>{props.description}</p>
         <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
         </div >
         <div className="skills">
         <h4>Skills</h4>
         <ul>
            {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
         </ul>
         </div>
        </div>
    );
}
 export const UserCard = () => {
  
    
         {<User name="Jack" city="New york" description="Front end developer"
           skills={["UI/UX","HTML","CSS","Reactjs","Node","Front-end-development"]} online={true}/>}
 

return(
    <>
    {userData.map((user, index) =>(
        <User key={index} 
        name = {user.name}
        city ={user.city}
        description = {user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
    ))}
    </>

);
};
User.propTypes ={
name: PropTypes.string.isRequired,
city: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
skills: PropTypes.arrayOf(PropTypes.string).isRequired,
online:PropTypes.bool.isRequired,
profile: PropTypes.string.isRequired
};
