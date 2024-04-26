import React from 'react';

export default function NavbarComponent(props) {
    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <span style={brandStyle}>Navbar</span>
                <ul style={listStyle}>
                    <li style={listItemStyle}><a href="#" style={linkStyle}>{ props.h }</a></li>
                    <li style={listItemStyle}><a href="#" style={linkStyle}>{ props.g }</a></li>
                    <li style={listItemStyle}><a href="#" style={linkStyle}>{ props.a }</a></li>
                    <li style={listItemStyle}><a href="#" style={linkStyle}>{ props.c }</a></li>
                </ul>
            </div>
        </nav>
    );
}

const navStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 0',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const brandStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const listStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
};

const listItemStyle = {
    marginLeft: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
};
