import { useNoteContext } from '../../context/noteContext';
import NoteItem from './NoteItem';

const NoteList = () => {
  const { notes } = useNoteContext();

  return (
    <>
      {notes.length === 0 ? (
        <div className="container-ecommit md:py-10 px-3 md:px-10">
          <p className="text-lg md:text-xl select-none">
            No encontramos ninguna nota. 🔍️
          </p>
        </div>
      ) : (
        <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-2 md:gap-x-2 lg:gap-y-6 py-6 lg:p-6">
          {notes.map(note => (
            <div key={note.id} className="flex justify-center w-full">
              <NoteItem key={note.id} {...note} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NoteList;
