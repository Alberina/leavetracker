/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');
import Example from './components/Example';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from './components/Admin/Dashboard';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";

function App() {
    return (
        <div className="container-fluid p-0">
            <Header />
            <Home />
            <Router>

                <Routes>
                    <Route exact path="/" element={<Dashboard />}>

                    </Route>
                    <Route path="/dashboard" element={<Home />}>

                    </Route>
                </Routes>
            </Router>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <Example />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
