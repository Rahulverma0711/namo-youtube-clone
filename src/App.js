
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import store from './utilities/store';
import VideoContainer from './components/VideoContainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<MainContainer/>,
  children:[
    {
      path:"/",
      element:<VideoContainer/>

    },
    {
    path:"watch",
    element:<WatchPage/>
    }
]
}])
function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
