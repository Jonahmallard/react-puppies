import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink style={{textDecoration: 'none', color: 'black'}} to="/orders">Order History</NavLink>
      &nbsp; | &nbsp;
      <NavLink style={{textDecoration: 'none', color: 'black'}} to="/orders/new">New Order</NavLink>
    </nav>
  );
}