
import './App.css'
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './context/UserContextProvider';

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello Context ApI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;