import React from 'react';
import Expression from './expression';
import Result from './result';
import History from './history';
import ButtonGrid from './buttongrid';
import './calculator-style.css';

class Calculator extends React.Component {
    state = {
        expressiontoevaluate: ' ',
        result: 0,
        history: ' '
    }

    onKeystrokeHandler = (key) => {
        this.calculate(key)        
    }

    calculate = (key) => {
        if(key === '=') {
            let resultofexpression = eval(this.state.expressiontoevaluate)
            this.setState({result: resultofexpression})
            if (!this.state.expressiontoevaluate === '' ) {
                this.setState({history: String(this.state.history).concat('\n',this.state.expressiontoevaluate)})
            }
            this.setState({expressiontoevaluate: ''})
        }
        else {
            this.setState({expressiontoevaluate: String(this.state.expressiontoevaluate).concat(key)})
        }
    }

    render() {
        return (
            <div>
                <Expression expression={this.state.expressiontoevaluate}/>
                <Result result={this.state.result}/>
                <ButtonGrid onKeystroke={this.onKeystrokeHandler}/>
                <History history={this.state.history}/>
            </div> 
        );
    }
}

export default Calculator;