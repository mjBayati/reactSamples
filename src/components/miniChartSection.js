import React from 'react';
class miniChartSection extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            items: props.data
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="chart-div"></div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default KPIAndMiniCardSection;