import React from 'react'
import { ReactComponent as Logo } from '../../../assets/logo_en3d.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import useRoutes from '../../../stores/useRoutes'

const Header = props => {
  const [routes] = useRoutes('pages')
  const currentAlias = routes?.current?.alias
  const specialAlias = ['pedidos', 'login', '404', 'home1']
  // const specialAlias = []

  return (
    <header className='CommonHeader'>
      <div className='CommonHeader__LogoWrapper'>
        <div className='CommonHeader__Logo'>
          <Logo />
        </div>
        <div className='CommonHeader__LogoLabel'>EN3D</div>
      </div>
      <nav>
        {
          routes.available
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
      </nav>
    </header>
  )
}

export default Header