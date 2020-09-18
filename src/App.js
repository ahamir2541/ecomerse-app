import React, {useState, useEffect} from 'react';
import { auth, createUserProfileDocument } from './Firebase/firebase'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/user/userAction'
//components
import Navbar from './Components/HeaderPage/Navbar'
import Home from './Components/HomePages/Home'
import SignIn from './Components/SignInPage/SignIn'
import Shop from './Components/ShopSection/Shop'

const App = ({setCurrentUser, currentUser}) => {
  const [loading, setLoading] = useState(true)

  let unsubscribeFromAuth = null

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id : snapshot.id,
            ...snapshot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
      
    })

    setLoading(false)
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return loading ? <h2>Loading...</h2> : (
    <BrowserRouter>
      <Navbar  />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/signin" render={() => currentUser 
          ? 
          <Redirect to='/' /> : <SignIn/> } 
          />
        <Route  path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  )
};

const mapStatetoProps = state => ({
  currentUser : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);