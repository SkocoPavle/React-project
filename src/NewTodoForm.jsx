import { useState } from "react"

export function NewTodoForm ({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit (e) {
    e.preventDefault()
    
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  } 

    return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input id="item" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button className="btn">Add</button>
      </div>
    </form>
    )
}