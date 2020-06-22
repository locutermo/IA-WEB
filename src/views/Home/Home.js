import React,{useState,useEffect} from 'react'
import Header from '../../Layout/Header'
import Sillabus from './Sillabus'
import ListUsers from './UserCard/ListUsers'
import Introduction from './Introduction/Introduction'
export default function Home(props){

    const [sillabus,setSillabus] = useState([])
    const [students,setStudents] = useState([])

    useEffect(()=>{
        props.firebase.database().ref('/1/sillabus').on("value",(snapshot)=>{
            setSillabus(snapshot.val())
        }, function(error){
            console.log("Error:"+error.code)
        });

        props.firebase.database().ref('/1/students').on("value",(snapshot)=>{
            setStudents(snapshot.val())
        }, function(error){
            console.log("Error:"+error.code)
        });

    },[])

    return(
        <div className="app">
            <Header/>
            <div className="_container">
                <Introduction/>                
            </div>
            <div className="_container">
                {sillabus.length != 0 ? <Sillabus data={sillabus} /> : null}
                {students.length != 0 ? <ListUsers data={students} />:null}
            </div>
            
        </div>

    )
}