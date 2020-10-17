import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
const App =()=>{
  const Name=()=>{

    return <h1>hello i am new page</h1>;
  };

  return (
    <>
    <Switch>
      <Route exact path="/"   component={About} />
      <Route exact  path="/contact"  component={Contact} />
      <Route path="/contact/name"  component={Name} />
      <Route   component={Error} />
      </Switch>

    {/* switch shows first match path
    if u would not use it  ,so it shows both */}
    {/* <About/>
    <Contact/> */}
    </>
  )
};
export default App;
