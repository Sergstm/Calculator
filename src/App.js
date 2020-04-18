import React, {Component} from 'react';
import {InputField} from "./components/InputField";
import {SelectField} from "./components/SelectField";

// import './App.css';


class App extends Component {
    state = {
        operations: [],
        id: new Date().getTime(),
        operand1: "",
        operand2: "",
        operation: "sum",
        result: ""
    };

    handleInput = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        (name === "o1") ? this.setState({operand1: val}) : this.setState({operand2: val})
    };

    handleSelect = (e) => {
        this.setState({operation: e.target.value});
    };

    showResult = (operand1, operand2, operation) => {
        let o1 = parseInt(operand1);
        let o2 = parseInt(operand2);
        let primeNumber = [];
        if (operation === "sum") {
            return o1 + o2;
        } else if (operation === "div" && o2 !== 0) {
            return o1 / o2;
        } else if (operation === "rem") {
            return o1 % o2;
        } else if (operation === "high" && (o1 > 0 && o2 > 0)) {
            let l1 = o1;
            let l2 = o2;
            if (o1 > o2) {
                l1 = o2;
                l2 = o1
            }
            for (let i = l1; i <= l2; i++) {
                let a = this.isPrime(i);
                if (a === true) {
                    console.log(i);
                    primeNumber.push(i);
                }
            }
            return primeNumber[primeNumber.length - 1];
        } else {
            console.log("ERROR");
            return NaN;
        }
    };

    isPrime = (num) => {
        let sqr = Math.floor(Math.sqrt(num));
        let prime = num !== 1;
        for (let i = 2; i < sqr + 1; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        return prime;
    };

    handleExecuting = () => {
        let res = this.showResult(this.state.operand1, this.state.operand2, this.state.operation);
        this.setState({result: res});

        const obj = {
            id: new Date().getTime(),
            operand1: this.state.operand1,
            operand2: this.state.operand2,
            operation: this.state.operation,
            result: res
        };

        this.setState(prev => ({operations: [obj, ...prev.operations]}));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <InputField title={"Operand 1"} name={"o1"} func={this.handleInput}/>
                                <InputField title={"Operand 2"} name={"o2"} func={this.handleInput}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <SelectField name={"sel"} func={this.handleSelect}/>
                            </div>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                Result: {this.state.result}
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block"
                                onClick={this.handleExecuting}>Executing
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Operand1</th>
                                        <th>Operand2</th>
                                        <th>Operations</th>
                                        <th>Result</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.operations.map(el => (
                                        <tr key={el.id}>
                                            <td>{el.operand1}</td>
                                            <td>{el.operand2}</td>
                                            <td>{el.operation}</td>
                                            <td>{el.result}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
