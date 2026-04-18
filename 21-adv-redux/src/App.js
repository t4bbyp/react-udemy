import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

/*
NOTES: 
- reducers must me pure, side-effect free, synchronous functions
- side-effects & async tasks can go: in the components (useEffect()) or
inside custom action creators
*/