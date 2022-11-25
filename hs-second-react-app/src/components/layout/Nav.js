import { Link } from "react-router-dom";
// 创建并引用react包里自带的css模块.module.css
import classes from './Nav.module.css'
function Nav(){
    return(
        <header className={classes.header}>
            <div>Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/Favourites'>My Favourites</Link>
                    </li>
                    <li>
                        <Link to='/new'>New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav