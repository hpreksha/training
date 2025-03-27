import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/states">States</Link></li>
                    <li><Link to="/lists">Lists</Link></li>
                    <li><Link to="/render">Rendering</Link></li>
                    <li><Link to="/props">Props</Link></li>
                    <li><Link to="/use-effect">useEffect</Link></li>
                    <li><Link to="/lifecycle">Component Lifecycle</Link></li>
                </ul>
            </nav>
        </>
    )
}