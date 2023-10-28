
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import store from './utilities/store';

function App() {
  return (
      
      <Provider store={store} className='wrapper'>
        <Header/>
        <div className='main-container'>
          <Sidebar/>
          <div className='video-container'>video container</div>
        </div>
      </Provider>
  );
}

export default App;
