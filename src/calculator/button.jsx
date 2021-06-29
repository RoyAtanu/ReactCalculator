import React from 'react';

class Button extends React.Component {
    render() {
        const { onKeystroke } = this.props;
        return (
            <div>
                <button className='button' value={this.props.buttontext} onClick={onKeystroke}>{this.props.buttontext}</button>
            </div>
        );
    }
}

export default Button;