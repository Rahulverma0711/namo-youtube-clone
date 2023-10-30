
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import store from './utilities/store';
import VideoContainer from './components/VideoContainer';

function App() {
  return (
      <div className='wrapper'>
        <Provider store={store}>
        <Header/>
        <div className='main-container'>
          <Sidebar/>
          <VideoContainer/>
        </div>
      </Provider>

      </div>

  );
}

export default App;



// https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64
// https://source.unsplash.com/random/600×400?healthy 