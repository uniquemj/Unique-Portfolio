import {Outlet} from 'react-router';
import { Construction, CopyRight, Navbar } from './container';

const Layout = () => {
    const InConstruction = import.meta.env.VITE_CONSTRUCTION === "true";
  return (
    <main>
      <Navbar/>
      {
        InConstruction ?
        <Construction/>
        :
        <Outlet/>
      }
      <CopyRight/>
    </main>
  )
}

export default Layout