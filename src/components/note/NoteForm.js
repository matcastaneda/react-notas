import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import toast from 'react-hot-toast';

import getDateCreationNote from '../../functions/getDateCreationNote';
import { useNoteContext } from '../../context/noteContext';
import { colors } from './utils/colors';

const NoteForm = () => {
  const { addNote } = useNoteContext();

  const [note, setNote] = useState({ description: '' });
  const [colorActive, setColorActive] = useState(1);
  const [color, setColor] = useState('#47AEE2');

  // * Caracteres limite admitidos en la nota
  const limitCharacters = 140;

  // * Función para cambiar el color de la nota
  const handleChangeColor = (color, id) => {
    setColor(color);
    setColorActive(id);
  };

  // * Funcion para cambiar el texto de la nota
  const handleChangeNote = ({ target: { name, value } }) => {
    if (limitCharacters - value.length >= 0) {
      setNote({ ...note, [name]: value });
    }
  };

  // * Función para enviar la nota a noteReducer con el boton
  const handleSubmitNote = e => {
    e.preventDefault();

    const noteFormated = note.description.trim();

    try {
      if (noteFormated !== '') {
        console.log(noteFormated);
        toast.success('Nota añadida', { duration: 2500 });
      }

      setNote({ ...note, description: '' });
    } catch (error) {
      toast.error('Algo salió mal 😥 => ', error.message, { duration: 2500 });
    }
  };

  // * Función para enviar la nota a noteReducer con la tecla Enter
  const handleEnterSubmit = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();

      const noteFormated = note.description.trim();

      try {
        if (noteFormated !== '') {
          console.log(noteFormated);
          toast.success('Nota añadida', { duration: 2500 });
        }

        setNote({ ...note, description: '' });
      } catch (error) {
        toast.error('Algo salió mal 😥 => ', error.message, { duration: 2500 });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmitNote}
      className="flex flex-col w-full max-w-lg p-4 rounded-xl shadow-lg bg-white select-none">
      <div className="relative">
        <span
          className="absolute top-0 right-0 h-3 w-3 bg-black rounded-full"
          style={{ background: `${color}` }}
        />

        <textarea
          onChange={handleChangeNote}
          onKeyDown={handleEnterSubmit}
          value={note.description}
          name="description"
          id="description"
          cols="30"
          rows="5"
          maxLength={140}
          placeholder="Escribe tu nota aquí..."
          className="w-full overflow-y-hidden resize-none my-4 rounded-sm focus:outline-none whitespace-pre-line"
        />

        <span className="absolute bottom-0 right-0">
          <small className="opacity-40">
            {limitCharacters - note.description.length}
          </small>
        </span>
      </div>

      <hr className="mt-2 mb-4" />

      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center justify-between">
          {colors.map(color => (
            <span
              key={color.id}
              onClick={() => handleChangeColor(color.color, color.id)}
              style={{ background: `${color.color}` }}
              className={
                colorActive === color.id
                  ? `relative w-6 h-6 mr-2.5 rounded-full colorActive`
                  : `relative cursor-pointer w-6 h-6 mr-2.5 rounded-full`
              }
            />
          ))}
        </div>

        <button className="bg-green-500 hover:bg-green-600 transition-colors text-white py-1 px-3 rounded-lg font-semibold leading-6">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
