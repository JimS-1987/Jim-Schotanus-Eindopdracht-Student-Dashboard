
import React, { Component } from 'react';
import {
    VictoryBar,
    VictoryLine,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
} from 'victory';
import StudentData from './StudentData';
import LegendGraph from './LegendGraph';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleFunfactorClick = this.handleFunfactorClick.bind(this);
        this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
        this.state =
        {
            funfactor: true,
            difficulty: true
        };

    }
    handleFunfactorClick() {
        if (this.state.funfactor === false) {
            this.setState({ funfactor: true });
        } else if (this.state.funfactor === true) {
            this.setState({ funfactor: false });
        }
    }
    handleDifficultyClick() {
        if (this.state.difficulty === false) {
            this.setState({ difficulty: true });
        } else if (this.state.difficulty === true) {
            this.setState({ difficulty: false });
        }
    }
    render() {
        const assignmentArray = [...new Set(StudentData.map(data => data.Assignment))]
        const averageDifficultyCalc = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Assignment;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Difficulty;
                counts[name]++;
            }

            for (name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const averageFunfactorCalc = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Assignment;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Funfactor;
                counts[name]++;
            }

            for (name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const avgDifficulty = averageDifficultyCalc(StudentData);
        const avgFunfactor = averageFunfactorCalc(StudentData);
        if (this.state.funfactor === true && this.state.difficulty === true) {
            return (
                <div className="page">
                    <h1>React Student Dashboard</h1>
                    <p>This app showes you all the students grades, and the fun they had making the assignments.</p>
                    <p>If you want to see a specific student's grades and funlevels?...click on a name link in the navigation bar.</p>
                    <p>Click on the links below to see the the different graphics.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Show graphic difficulty level"></input>}
                        {<input type="button" onClick={this.handleFunfactorClick} value="Show graphic funfactor"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}
                    >
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                            <VictoryBar
                                data={avgDifficulty}
                                barWidth={5}
                                alignment="start"
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "coral" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Assignment"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Grade"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}
                    >
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryLine
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { stroke: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                            <VictoryLine
                                data={avgDifficulty}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { stroke: "coral" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Assignment"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Grade"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>

                </div>
            );
        } else if (this.state.funfactor === false && this.state.difficulty === true) {
            return (
                <div className="page">
                    <h1>React Student Dashboard</h1>
                    <p>This app showes you all the students grades, and the fun they had making the assignments.</p>
                    <p>If you want to see a specific student's grades and funlevels?...click on a name link in the navigation bar.</p>
                    <p>Click on the links below to see the the different graphics.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleFunfactorClick} value="Back to combined graphic"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Assignment"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Grade"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                </div>
            );
        } else if (this.state.difficulty === false && this.state.funfactor === true) {
            return (
                <div className="page">
                    <h1>React Student Dashboard</h1>
                    <p>This app showes you all the students grades, and the fun they had making the assignments.</p>
                    <p>If you want to see a specific student's grades and funlevels?...click on a name link in the navigation bar.</p>
                    <p>Click on the links below to see the the different graphics.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Back to combined graphic"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgDifficulty}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "coral" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Assignment"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Grade"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                </div>
            );
        } else {
            return (
                <div className="page">
                    <h1>React Student Dashboard</h1>
                    <p>This app showes you all the students grades, and the fun they had making the assignments.</p>
                    <p>If you want to see a specific student's grades and funlevels?...click on a name link in the navigation bar.</p>
                    <p>Click on the links below to see the the different graphics.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Show graphic difficulty level"></input>}
                        {<input type="button" onClick={this.handleFunfactorClick} value="Show graphic funfactor"></input>}
                    </div>
                    <h2>No data to display.</h2>


                </div>
            );
        }
    }
}
export default Dashboard;