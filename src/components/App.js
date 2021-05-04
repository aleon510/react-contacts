import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';
import ContactsPage from './contacts';
import ContactDetailsPage from './contact-details';
import ContactCreatePage from './contact-create';

import NavBar from './common/NavBar';
import ContactsProvider from '../contexts/ContactsProvider';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <ContactsProvider>
        <Switch>
          <Route path='/' exact component={ContactsPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/contacts/add' component={ContactCreatePage} />
          <Route path='/contacts/:index' component={ContactDetailsPage} />
          <Route path='/'>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </ContactsProvider>
    </>
  );
};

export default App;
