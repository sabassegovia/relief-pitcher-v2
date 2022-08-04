/** @jsxRuntime classic  */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/Link'
import NavCSS from '../../styles/Nav.module.css';

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a className={NavCSS.centerHeader} sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer', width:'50%'}}>&#127866; Relief Pitcher</a>
      </Link>
    </nav>
  </header>
)

export default Nav;