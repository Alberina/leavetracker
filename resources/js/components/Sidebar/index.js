import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
class Sidebar extends React.Component {
    render() {
      return (
          <div className="sidebar">
              <SidebarHeader title={'Dashboard'}/>
              <SidebarBody />
          </div>
      )
    }
  }

export default Sidebar;