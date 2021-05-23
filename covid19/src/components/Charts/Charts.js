import React,{useState,useEffect} from 'react';
import {fetchdailyData} from '../../API/api';
// import ApexCharts from 'apexcharts';
// import {LineElement ,Bar} from 'chart.js';


const  Charts =  ({data : {confirmed,deaths, recovered}, country}) =>  {
    const [dailyData,setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchdailyData());
        }
        // console.log(dailyData);
        fetchAPI();
    },[])
    
    // const lineChart = new (
    //     dailyData.length  ?
    //     (<LineElement
    //         data= {{
    //                 labels:dailyData.map(({date}) => date),
    //                 datasets : [{
    //                             data: dailyData.map(({confirmed}) => confirmed),
    //                             label : 'Infected',
    //                             borderColor : '#3333ff',
    //                             fill : true
    //                         } , {
    //                             data: dailyData.map(({deaths}) => deaths),
    //                             label : 'Deaths',
    //                             borderColor : 'red',
    //                             backgroundColor :' rgba(255,0,0,0.5)',
    //                             fill:true
                            
    //                         }]
    //                     }}
    //                         />): null
    // )
    
    return (
        <div>
           {/* {country ? barChart : lineChart}  */}
           {/* {lineChart} */}
        </div>
    )
}


export default Charts;