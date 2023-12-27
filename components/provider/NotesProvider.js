import React, { useContext, useState } from 'react';
const NotesContext = React.createContext();
const notesDemo = [""]
const NotesProvider = ({children}) => {
    const [notes,setNotes] = React.useState(notesDemo)
    return (
        <NotesContext.Provider value={{notes,setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesListContext = () => React.useContext(NotesContext)

export default NotesProvider