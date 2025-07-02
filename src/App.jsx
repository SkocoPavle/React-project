import { useState } from "react"
import "./styles.css"

export default function App () {
  const [newItem, setNewItem] = useState("")

  return <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input id="item" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button className="btn">Add</button>
      </div>
    </form>

    <h1 className="header">Todo List</h1>

    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
}