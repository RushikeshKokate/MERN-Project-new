import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './ui/dashboard/Dashboard';
import PostUser from './ui/postUser/PostUser';
import UpdateUser from './ui/updateUser/UpdateUser';
import NoMatch from './ui/nomatch/NoMatch';
import Header from './ui/Header';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/postUser" element={<PostUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </div>
  );
}

export default App;
