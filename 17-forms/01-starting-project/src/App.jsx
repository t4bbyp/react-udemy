import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
//import Login from './components/Login.jsx';
//import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;


/*
---NOTES:
1. There's more ways for data validation:
- on keystroke: u need State-StateLogin.jsx
- on submit
- on lost focus: State+onBlur-StateLogin or ref+state-Login.jsx
- can use browser validation like the 'required' prop-Signup.jsx

2. react form libraries: Formik or React Hook Form
*/