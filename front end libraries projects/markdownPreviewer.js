// import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        input: ''
      }
      
      this.change = this.change.bind(this);
    }
    
    change = (e) => {
      this.setState({
        input: e.target.value
      })
    }
    
    
    
    render() {
      return (
         <div>
          <textarea id='editor' onChange={this.change}></textarea>
          <div id='preview'>
            <div dangerouslySetInnerHTML = {{__html: marked(this.state.input)}}></div>
            {/* note: dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM */}
          </div>
         </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));