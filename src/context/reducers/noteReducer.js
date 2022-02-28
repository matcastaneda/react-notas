import { type } from './type';

// * Estado inical de la nota
// * Se extrae del Local Storage del computador
export const initialNoteState = {
  notes:
    localStorage.getItem('notes') === null
      ? []
      : JSON.parse(localStorage.getItem('notes')),
};

export const noteReducer = (state = initialNoteState, action = {}) => {
  switch (action.type) {
    // * Añadir una nueva nota
    case type.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    // * Actualizar una nota
    case type.UPDATE_NOTE:
      const updatedNote = action.payload;
      console.log(updatedNote);

      const updatedNotes = state.notes.map(note => {
        console.log(note);
        if (note.id === updatedNote.id) {
          note.note = updatedNote.note;
          return updatedNote;
        }
        return note;
      });

      return {
        ...state,
        notes: updatedNotes,
      };

    // * Eliminar una nota
    case type.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };

    default:
      return state;
  }
};
