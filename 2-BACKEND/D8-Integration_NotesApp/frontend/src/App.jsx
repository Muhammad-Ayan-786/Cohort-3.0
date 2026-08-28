import { useEffect, useState } from "react"
import { api } from "./config/api"
import NoteCard from "./components/NoteCard"

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: ""
  })

  const [allNotes, setAllNotes] = useState([])
  const [noteUpdateID, setNoteUpdateID] = useState(null)


  const handleChange = (e) => {
    setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // get all notes
  const getAllNotes = async () => {
    try {
      let { data: { data } } = await api.get('/notes/all')
      setAllNotes(data)
    } catch (error) {
      console.log("error in getting all notes", error);
    }
  }

  // create note
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (noteUpdateID) {
        await api.put(`/notes/update/${noteUpdateID}`, formValues)
        setNoteUpdateID(null)
      }
      else await api.post('/notes/create', formValues)

      setFormValues({
        title: "",
        description: ""
      })

      getAllNotes()

    } catch (error) {
      console.log("error in creating note", error);
    }
  }

  // delete note
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/delete/${id}`)
      getAllNotes()
    } catch (error) {
      console.log("error in deleting note", error);
    }
  }


  const noteForUpdate = (note) => {
    console.log(note);
    setNoteUpdateID(note._id)
    setFormValues(note)
  }


  useEffect(() => {
    getAllNotes()
  }, [])

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes app</h1>

      <form
        onSubmit={handleSubmit}
        className="w-70 border gap-5 border-white p-4 rounded-xl flex flex-col"
      >
        <input
          required
          onChange={handleChange}
          value={formValues.title}
          name="title"
          className="p-2 outline-none text-xl rounded border border-white"
          type="text"
          placeholder="Title"
        />
        <input
          required
          onChange={handleChange}
          value={formValues.description}
          name="description"
          className="p-2 outline-none text-xl rounded border border-white"
          type="text"
          placeholder="Description"
          minLength={3}
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          {noteUpdateID ? "Update note" : "Add note"}
        </button>
      </form>

      <div className="flex gap-4 flex-wrap">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            noteForUpdate={noteForUpdate}
            deleteNote={deleteNote}
          />
        ))}
      </div>

    </div>
  )
}

export default App