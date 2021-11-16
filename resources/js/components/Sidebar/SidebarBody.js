import React from 'react';

class SidebarBody extends React.Component {
  render() {
    return (
      <div className="side-menu-container">
        <ul className="nav navbar-nav">

          <li><a href="#">All</a></li>
          <li><a href="#">Waiting List</a></li>
          <li><a href="#">Approved</a></li>

          <li className="panel panel-default" id="dropdown">
            <a data-toggle="collapse" href="#dropdown-lvl1" className="arrow-icon">
             Dropdown
              <span className="caret"></span>
            </a>
            <div id="dropdown-lvl1" className="panel-collapse collapse">
              <div className="panel-body">
                <ul className="nav navbar-nav">
                  <li><a href="#">Mail</a></li>
                  <li><a href="#">Calendar</a></li>
                  <li><a href="#">Ecommerce</a></li>
                  <li><a href="#">User</a></li>
                  <li><a href="#">Social</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default SidebarBody;