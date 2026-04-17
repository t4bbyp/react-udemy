import Counter from './components/Counter';


function App() {
  return (
    <Counter />
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