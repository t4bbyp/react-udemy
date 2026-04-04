import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
      </main>
    </>
  );
}

export default App;


/*
----NOTES:
- Form Actions and useActionState only for react 19+
- when using FormActions, anytime u submit form even 
with errors, it resets the form
- if u want to empty form on Reset btn, add custom logic cuz 
we used defaultValues with prevState
*/