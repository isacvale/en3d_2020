import React, { useEffect } from 'react'
import Template from '../_templates/Common'
import { observer } from 'mobx-react'
import store from 'stores/store'
import "./login.css"
import {
  withRouter
} from 'react-router-dom'

const Page = observer(props => {
  useEffect(() => store.updatePaginaAtual, [])
  console.log('ahem', store.dados.userName)
  return (
    <Template>
      <h1>{store.dados.userName}</h1>
      <section className='CarouselSection' aria-hidden='true'>
        <div className='CarouselSection__Component'>
        </div>

        <div className='CarouselSection__Label'>
          Lorem Ipsum is a dummy text of the typography and has been an industry's standard since the 1500s.
        </div>

        <AmILogged />

        <hr />

        {/* <AuthButton /> */}

        <hr />

        <LoginDialog />
        
      </section>

    </Template>
  )
})

const AmILogged = observer(props => {
  return (
    <div>
      <div>Am I logged? {String(store.dados.isAuthenticated)}</div>
      <div>My name is: {String(store.dados.userName)}</div>
    </div>
  )
})

// const AuthButton = observer(withRouter(props => {
//   const { history } = props
//   const { signout } = store
//   const { isAuthenticated } = store.dados

//   // useEffect(() => {alert('netlifyAuth ' + netlifyAuth.isAuthenticated)})

//   const LoggedButton = () =>
//     <p>Welcome!{' '}
//       {isAuthenticated}{' '}
//       <button
//         onClick={() => {
//           // netlifyAuth.signout(() => history.push('/'))
//           signout(() => history.go(0))
//         }}
//       >Sign out</button>
//     </p>

//   const AnonymousButton = () =>
//     <p>You are not logged in.</p>

//   return isAuthenticated
//     ? <LoggedButton />
//     : <AnonymousButton />
//   }
// ))

const LoginDialog = observer(withRouter(props => {
  const { authenticate } = store

  const from = props?.location?.state?.from || { pathname: '/' }

  const login = () => {
    authenticate(user => {
      props.history.go(0)
    })
  }

  return <div>
      <p>You msut be logged in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>

  // return redirectToReferer
  //   ? <Redirect to={from} />
  //   : <div>
  //     <p>You mst be logged in to vie the page at {from.pathname}</p>
  //     <button onClick={login}>Log in</button>
  //   </div>
}))


export default Page