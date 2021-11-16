import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');


class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        let vacations = [];
        axios.get('/api/vacations-all').then(resp => {
            // console.log("resp.data", resp.data);

            // resp.data.map((el)=>{
            //     let obj = {}
            //     axios.get("/api/users/"+el.employee_id).then(user=>{
            //         obj = {
            //             start_date: el.start_date,
            //             end_date: el.end_date,
            //             employee: user.data.first_name,
            //             approved: el.approved == 0 ? 'NO': 'YES'
            //         };
            //     })

            //     axios.get("/api/users/"+el.employer_id).then(user=>{
            //         obj.employer = user.data.first_name;
            //         console.log("obj", obj);
            //     })

            // })

            this.setState({
                data: resp.data
            });
        });
    }

    render() {
        return (
            <div className="vacations">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Employer</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Approved</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.map((el) => (
                            <tr key={el.id}>
                                <td>{el.employee_first_name} {el.employee_last_name}</td>
                                <td>{el.employer_first_name} {el.employer_last_name}</td>
                                <td>{el.start_date}</td>
                                <td>{el.end_date}</td>
                                <td>{el.approved == 0 ? 'NO' : 'YES'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
