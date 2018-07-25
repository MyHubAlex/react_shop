import React, {Component} from 'react';

class Image extends Component {
    render() {
        return (
            <img
                src={this.props.url}
                width={this.props.width}
                height={this.props.height}
            />
        )
    }
}

export default Image;
