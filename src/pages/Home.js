import { Toaster } from 'react-hot-toast';
import NoteForm from '../components/note/NoteForm';

const Home = () => {
  return (
    <main className="max-w-7xl m-auto pt-14 pb-40 px-2 lg:px-0">
      <section className="flex justify-center items-center mb-10">
        <NoteForm />
      </section>

      <Toaster position="top-right" />
    </main>
  );
};

export default Home;
