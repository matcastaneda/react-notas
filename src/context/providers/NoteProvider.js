import { noteContext } from '../noteContext';

export const NoteProvider = ({ children }) => {
  return <noteContext.Provider value={{}}>{children}</noteContext.Provider>;
};
