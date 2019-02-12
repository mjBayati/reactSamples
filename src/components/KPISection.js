import React from 'react';
class KPISection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.data
        }   
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-heading">
                            <div>
                            Total Revenue
                            </div>
                        </div>
                        <div className="card-value">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default KPISection;