import {React, Component} from 'react'

class ErrorBoundary extends Component{ 

    constructor(props){ 
        super(props); 
        this.state = {error: null, errorInfo:null }
    }

    componentDidCatch(error, errorInfo){ 
        this.setState({ 
            error:error, 
            errorInfo: errorInfo
        })
    }
 
    render(){ 
        if(this.state.errorInfo){
        return(
                <>
                <h2> An error occured in this component </h2>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary