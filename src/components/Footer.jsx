import React from 'react'

const Footer = () => {
  return (
    <div style={styles.footer}>
        <ul>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
        </ul>
        <ul>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
        </ul>
        <ul>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
        </ul>
    </div>
  )
}

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        marginTop: '20px'
    }
}

export default Footer