import React, { Component } from 'react';
import config from '../config';
import NavBar from './staticNavBar';
import KPIAndMiniChart from './KPIAndMiniCardSection';
import KPICard from './KPISection';
import miniChart from './miniChartSection';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;

class App extends Component{
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(url).then((response) => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values;
      let rows = [];
      for (let i = 1; i < batchRowValues.length; i++){
        rows.push(batchRowValues[i].map(data => data));
      }
      console.log(rows);
      this.setState({items: rows});
    });
  }
  render () {    
        return (
          <container>
            <NavBar/>
            <div className="container-fluid">
                  <KPICard data = {this.state.items}/>  
                  <KPIAndMiniChart data = {this.state.items}/>
                  <miniChart data = {this.state.items}/>
              </div>
          </container>
          );
      }
}

export default App;