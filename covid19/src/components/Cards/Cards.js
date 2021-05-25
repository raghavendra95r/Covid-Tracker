import React from 'react';
import CountUp from 'react-countup';
import './Cards.css';

const Cards = ({data : {confirmed,deaths,recovered,lastUpdate}}) =>  {
    console.log(confirmed);
    if(!confirmed){
        return (<div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>)
    }
    return (
        <div className="mb-5">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Infected</div>
                    <div class="card-body">
                        <h5 class="card-title f2"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></h5>
                        <p class="card-text">{new Date (lastUpdate).toDateString()}</p>
                        <p>Number of active cases of <br></br> COVID-19</p>
                    </div>
                </div>

                <div class="card text-white bg-success mb-3" >
                    <div class="card-header">Recovered</div>
                    <div class="card-body">
                        <h5 class="card-title f2"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></h5>
                        <p class="card-text">{new Date (lastUpdate).toDateString()}</p>
                        <p>Number of recovered cases of<br></br> COVID-19</p>
                    </div>
                </div>

                <div class="card text-white bg-danger mb-3" >
                    <div class="card-header ">Deaths</div>
                    <div class="card-body">
                        <h5 class="card-title f2"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></h5>
                        <p class="card-text">{new Date (lastUpdate).toDateString()}</p>
                        <p>Number of deaths from <br></br> COVID-19</p>
                    </div>
                </div>
        </div>
    )
}



export default Cards;