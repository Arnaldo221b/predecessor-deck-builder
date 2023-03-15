import { Link } from 'react-router-dom'

const PredNavBar = () => {

    const menuStyle = {
        marginRight: "5px",
        marginLeft: "5px"
    }

    return (<>
        <nav>
            <Link style={menuStyle} to="/" >Home</Link>
            <Link style={menuStyle} to="/builder" >Builder</Link>
        </nav>
    </>)
}

export default PredNavBar