import { Link } from "react-router-dom"

// rafce
const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>This page doesn't exist</p>
        <Link to="/">Go to homepage</Link>
    </div>
  )
}

export default NotFound