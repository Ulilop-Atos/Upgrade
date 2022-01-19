import Bootbox from 'bootbox-react';
import React from 'react';

/*
 * Returns an element showing an alert to the user.
 */
class BootboxAlert extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }

    onClickAction() {
        this.setState({ show:true });
    }
    
    render() {
        const { show } = this.state;

        return (
            <div>
                <button type="button" className="btn btn-light" 
                    onClick={() => this.setState({show:true})}>Show</button>
                <Bootbox 
                    show={show} 
                    type={"alert"}  
                    message={this.props.message}  
                    onClose = {() => this.setState({show:false})}/>
            </div>
        );
    }
}

export default BootboxAlert;