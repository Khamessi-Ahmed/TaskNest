import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Nav from './Nav';
import { useState } from 'react';
import SideBar from './SideBar';
const NavBarManager = () => {
  const {userId,boardId}=useParams();
    const location = useLocation();
    const [Show,SetShow]=useState();
    
    useEffect(() =>{
      
    if (["/",`/listCollaborateur/${boardId}/${userId}`,`/createTask/${boardId}/${userId}`,`/taskList/${boardId}/${userId}`,`/createBoard/${userId}`,`/listBoard/${userId}`,`/listAvertisement/${boardId}/${userId}`,`/board/${boardId}/${userId}`].includes(location.pathname)){
        SetShow(true);
    }else{
        SetShow(false);}
},[location]);

  return (
    <div>{Show && (<>
        <Nav />
      
    <SideBar/>  
    </>
    )}</div>
  )
}

export default NavBarManager