import { NoteContextProvider } from '../context/providers/NoteContextProvider';

import Home from '../pages/Home';

import '../assets/styles/tailwind.css';

const App = () => {
  return (
    <NoteContextProvider>
      <Home />
    </NoteContextProvider>
  );
};

export default App;
