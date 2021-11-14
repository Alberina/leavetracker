import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');


class Example extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {data: []}
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/vacations').then(resp => {

        this.setState({
            data: resp.data
        });

        console.log(this.state.data);
    });
    }

    render() {
      return (
          <div className="vacations">
               {this.state.data.map((el) => (
                    <div>{el.employee_id}</div>
                ))}
          </div>
      )
    }
  }

export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
