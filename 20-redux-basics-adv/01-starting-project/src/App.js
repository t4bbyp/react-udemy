import { Fragment } from 'react/jsx-runtime';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isLogged);

  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;


/*
NOTES:
- redux & react-redux


POTENTIAL ISSUES IN REDUX:
- action type identifiers, typos can appear, conflicting names, etc.
so it's nice to set them up only once somewhere
- too much data to maintain -> multiple state elements, code gets too long (fixable)
* redux toolkit helps with it all

*/

// redux steps: 
// - create store - /store/index, 
// - create reducer - /store/index
// - provider -> src/index.js