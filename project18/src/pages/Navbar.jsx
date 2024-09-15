import { Outlet,NavLink } from 'react-router-dom';

export default function Navbar(){
    return<>
    <table>
        <tr>
        <td>
            <NavLink to='/'></NavLink>
        </td>
        <td>
            <NavLink to='/home' style={({isActive})=>{return{color:isActive?"red":"",fontWeight:isActive?"bold":""}}}>Home</NavLink>
        </td>
        <td>
            <NavLink to='/about'style={({isActive})=>{return{color:isActive?"red":"",fontWeight:isActive?"bold":""}}}>About</NavLink>
        </td>
        <td>
            <NavLink to='/contact' style={({isActive})=>{return{color:isActive?"red":"",fontWeight:isActive?"bold":""}}}>Contact</NavLink>
        </td>
        <td>
            <NavLink to="/*">Error</NavLink>
        </td>
    </tr>
    </table>
    <Outlet />
    </>
}