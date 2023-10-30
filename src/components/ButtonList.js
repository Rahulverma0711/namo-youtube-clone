// import Button from "./Button"

import { useState } from "react"
const list=["All","News","Music","HTML","Computer Programming","Live","History","Thrillers","Lamb","T-Series","News","Parliament","Bharat","Seema Haider","Cyclone Mocha","Same Sex Marriage","Netflix"]
const ButtonList = () => {
  const[activeTab,setActiveTab]=useState('All');
  const handleTabClick=(tab)=>{
    setActiveTab(tab);
    
  }
  
  return (
    <div  className="button-list">
       {list.map((item,index)=>{return <button onClick={()=>handleTabClick(item)} key={index} className={`${activeTab === item ? 'button-list-active-btn' : 'button-list-normal-btn'}`}>{item}</button>})}
    </div>
   
  )
}
export default ButtonList


