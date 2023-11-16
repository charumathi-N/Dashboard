import React from "react";
import './Updates.css'
import {UpdateData} from "../../Data/Data.js";

const Updates=()=> {
    return ( 
        <div className="Updates">
            {UpdateData.map((item,index)=>{
                return(
                    <div className="update">
                        <img src={item.img} alt=""/>
                        <div className="noti">
                            <div style={{marginBottom:'0.5rem'}} >
                                <span>{item.name}</span><br/>
                                <span>{item.noti}</span>
                            </div>
                            <span>{item.time}</span>
                        </div>
                      
                    </div>
                    
                )
            })
            
            
            }
            
             </div>
             
     );
} 
export default Updates ;