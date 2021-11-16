import React from 'react';
class SidebarHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sidebar-header navbar-header">
                <div className="brand-wrapper">
                    <div className="brand-name-wrapper">
                        <a className="navbar-brand" href="#">
                            {this.props.title}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarHeader;