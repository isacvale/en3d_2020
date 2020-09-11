import React from 'react'
import { observer } from 'mobx-react'
import { ReactComponent as Logo } from '../../../assets/logo_en3d.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import store from 'stores/store'

const Header = observer(props => {
  const { rotas } = store
  const { scrollSegment } = store.design
  const { isAuthenticated } = store.dados

  const currentAlias = rotas?.currentPage?.alias
  const specialAlias = ['pedidos', 'login', '404', 'home1']

  const size = scrollSegment === 'body' ? '--reduced' : ''

  return (
    <header className={`CommonHeader ${size}`}>
      <div className='CommonHeader__LogoWrapper'>
        <div className='CommonHeader__Logo'>
          <Logo />
        </div>
        <div className='CommonHeader__LogoLabel'>EN3D</div>
      </div>
      <nav>
        {
          rotas.availablePages
            // .filter(route => !route.hiddenFromMenu)
            .map(route => {
              const isCurrent = route.alias === currentAlias ? 'CommonHeader__Link--current' : ''
              const isSpecial = specialAlias.includes(route.alias) ? 'CommonHeader__Link--special' : ''
              return (
                <Link
                  className={`CommonHeader__Link ${isCurrent} ${isSpecial}`}
                  key={route.alias}
                  to={route.path}
                >{route.label}</Link>
              )
            })
        }
        <button
          className={`CommonHeader__Link`}
          onClick={store.openIdentityPanel}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        {/* {
          store.dados.isAuthenticated
            ? <button
              className={`CommonHeader__Link`}
            >Log out</button>
            : <button
              className={`CommonHeader__Link`}
            >Login</button>
        } */}
      </nav>
    </header>
  )
})

export default Header