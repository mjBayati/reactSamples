import React from 'react';
import KPICard from './KPISection';
import miniChart from './miniChartSection';

class KPIAndMiniCardSection extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            items: props.data
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-4 col-lg-3">
                    <KPICard data={this.state.items}/>
                </div>
                <div className="col-md-8 col-lg-9">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="chart-container">
                                    <miniChart data={this.state.items}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default KPIAndMiniCardSection;