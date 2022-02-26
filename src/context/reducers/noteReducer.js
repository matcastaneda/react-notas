import { type } from './type';

// * Estado inical de la nota
// * Se extrae del Local Storage del computador
export const initialNoteState = {
  notes: [],
};

export const noteReducer = (state = initialNoteState, action = {}) => {
  switch (action.type) {
    case type.ADD_NOTE:
      return;

    case type.UPDATE_NOTE:
      return;

    case type.DELETE_NOTE:
      return;

    default:
      return state;
  }
};
