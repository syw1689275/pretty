import React, { useState, useEffect } from 'react'
import './Pretty.css';


function Pretty(props) {
    
 const { enterData } = props
 const [prettyData, setPrettyData] = useState('')
 const  handlePretty = ( json ) => {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    return json
 }

 useEffect(() => {
    let data = handlePretty( enterData )
    setPrettyData( data )
 }, []);

  return (
    <div className="pretty" >
        <div>输入数据：{JSON.stringify(enterData)}</div>
        <div>输出数据:</div>
        <pre >{ prettyData }</pre>
    </div>
  );
}

export default Pretty;
