import { createContext, useContext } from 'react';

export const noteContext = createContext();

export const useNoteContext = () => {
  const context = useContext(noteContext);
  if (!context) throw new Error('Note Context error');
  return context;
};
