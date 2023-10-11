
import './App.css';

import EmojiList from './components/pages/EmojiList';
import './assets/css/card.css'


function App() {
  return (
    <div className="App"
      style={
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10
        }
      }>
      <EmojiList />
    </div>
  );
}

export default App;
