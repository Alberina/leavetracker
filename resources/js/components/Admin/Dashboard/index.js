import React from 'react';
import Sidebar from '../../Sidebar'
import Example from '../../Example'

export default function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-3">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-9 col-lg-9">
                    <Example />
                </div>
            </div>
        </div>
    )
}