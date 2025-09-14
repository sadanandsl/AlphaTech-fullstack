import React from 'react';
import Home from './pages/Home';
import Event from './pages/Event';
import Test from './pages/Test';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar1 from './components/Navbar1';
import UserProfile from './components/UserProfile';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Questions from './pages/questions';
import Categories from './components/Categories';
import Subcategories from './components/Subcategories';
import About from './components/About';


function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="profile" element={<UserProfile/>}/>
   <Route exact path="/event"element={<Event />}/>
   <Route exact path="/test"element={<Test />}/>
   <Route exact path="/login" element={<Login/>} />
   <Route exact path="/Signup" element={<Signup/>} />
   <Route exact path="/questions" element={<questions/>}/>
   <Route exact path="/categories" element={<Categories/>}/>
   <Route exact path="/subcategories" element={<Subcategories/>}/>
   <Route exact path="/:subcategory_id/questions" element={<Questions/>} />
   <Route exact path="/About" element={<About/>}/>
   <Route path="/categories/:category_id/subcategories" element={<Subcategories/>} />
   <Route path="/categories/:category_id/subcategories/:subcategory_id/questions" element={<Questions/>} />

   </Routes>
   
  </Router>
      
  );
}

export default App;
