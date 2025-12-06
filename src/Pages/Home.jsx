import React, { useEffect } from 'react'
import { Link } from 'react-router'

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/register"} >Register Now</Link>
        </div>
    )
}

export default Home