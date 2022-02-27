import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

import { useNoteContext } from '../../context/noteContext';

/**
 * @param id
 * @param note
 * @param create_at
 * @param create_at_full
 * @param color
 **/
const NoteItem = ({ id, note, create_at, create_at_full, color }) => {
  const { updateNote, deleteNote } = useNoteContext();

  const limitCharacters = 140;

  const [selectEdit, setSelectEdit] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleDeleteNote = id => {
    deleteNote(id);
    toast.error(`Nota Eliminada`, { duration: 2500 });
  };

  const handleSelectEdit = () => {
    setSelectEdit(!selectEdit);
    setUpdatedNote(note);
  };

  const handleChangeTextUpdate = e => {
    if (limitCharacters - e.target.value.length >= 0) {
      setUpdatedNote(e.target.value);
    }
  };

  const handleEnterSubmitUpdate = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      return;
    }
  };

  const handleSubmitNoteUpdated = e => {
    e.preventDefault();

    const note = updatedNote.trim();

    try {
      if (updatedNote !== '') {
        updateNote({
          note,
          id,
          create_at,
          create_at_full,
          color,
        });
        toast.success('Nota Actualizada ', { duration: 2500 });
      }

      setSelectEdit(!selectEdit);
    } catch (error) {
      toast.error('Algo salió mal 😥 => ', error.message, { duration: 2500 });
    }
  };

  return (
    <article
      className="relative flex flex-col group rounded-lg shadow-lg p-6 max-w-sm w-full h-64"
      style={{ background: `${color}` }}>
      <section className="flex items-start justify-between h-1/4">
        <h1 className="font-varela_round text-xl text-slate-100 font-bold">
          Nota
        </h1>

        <div className="flex items-center ml-2 transition-opacity lg:opacity-0 group-hover:opacity-100">
          {selectEdit ? (
            <XIcon
              onClick={handleSelectEdit}
              className="cursor-pointer h-5 w-5 text-slate-100"
            />
          ) : (
            <PencilIcon
              onClick={handleSelectEdit}
              className="cursor-pointer h-5 w-5 text-slate-100"
            />
          )}

          <TrashIcon
            onClick={() => handleDeleteNote(id)}
            className="cursor-pointer h-5 w-5 ml-3 text-slate-100"
          />
        </div>
      </section>

      {selectEdit ? (
        <form onSubmit={handleSubmitNoteUpdated} className="h-3/4">
          <textarea
            onChange={handleChangeTextUpdate}
            onKeyDown={handleEnterSubmitUpdate}
            value={updatedNote}
            type="text"
            name="upNote"
            id="upNote"
            className="w-full p-1 h-[129px] text-base md:text-base resize-none rounded-sm focus:outline-none whitespace-pre-line"
          />

          <button
            className="absolute bottom-6 right-6 bg-white font-bold text-sm px-2 py-1 rounded-md"
            style={{ color: `${color}` }}>
            Modificar
          </button>
        </form>
      ) : (
        <section className="h-3/4">
          <blockquote className="text-slate-100 font-medium break-all">
            {note}
          </blockquote>
        </section>
      )}

      <section className="flex items-end justify-between h-1/5">
        <small className="font-varela_round font-semibold tracking-wide text-white">
          ~ {create_at}
        </small>
      </section>
    </article>
  );
};

export default NoteItem;
