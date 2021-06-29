import React from 'react';
import Button from './button';

class ButtonGrid extends React.Component {
    state = {
        keystroke: null
    }

    onKeystrokeHandler = (key) => {
        this.props.onKeystroke(key.target.value);
    }

    render() {
        return (
            <div>
                <tr>
                    <td><Button buttontext='1' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='2' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='3' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='+' onKeystroke={this.onKeystrokeHandler}/></td>
                </tr>
                <tr>
                    <td><Button buttontext='4' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='5' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='6' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='-' onKeystroke={this.onKeystrokeHandler}/></td>
                </tr>
                <tr>
                    <td><Button buttontext='7' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='8' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='9' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='*' onKeystroke={this.onKeystrokeHandler}/></td>
                </tr>
                <tr>
                    <td><Button buttontext='.' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='0' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='=' onKeystroke={this.onKeystrokeHandler}/></td>
                    <td><Button buttontext='/' onKeystroke={this.onKeystrokeHandler}/></td>
                </tr>
            </div>
        );
    }
}

export default ButtonGrid;