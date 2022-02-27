import { useEffect, useReducer } from 'react';
import { noteContext } from '../noteContext';
import { initialNoteState, noteReducer } from '../reducers/noteReducer';

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }, [state.notes]);

  // * Añadir una nueva nota
  const addNote = note => {
    dispatch({
      type: 'ADD_NOTE',
      payload: note,
    });
  };

  // * Actualizar una nota
  const updateNote = note => {
    dispatch({
      type: 'UPDATE_NOTE',
      payload: note,
    });
  };

  // * Eliminar una nota
  const deleteNote = id => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id,
    });
  };

  return (
    <noteContext.Provider
      value={{ notes: state.notes, addNote, updateNote, deleteNote }}>
      {children}
    </noteContext.Provider>
  );
};
