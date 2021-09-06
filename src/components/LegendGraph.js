import React, { Component } from 'react';

export class LegendGraph extends Component {

    render(props) {
        return (
            <div className="legendGraph">
                <label>
                    <h3 className="labelDifficulty"> Difficulty Level (1-5)</h3>
                    <h3 className="labelFunfactor">   Fun factor (1-5)</h3>
                </label>
            </div>
        );
    }
}

export default LegendGraph;