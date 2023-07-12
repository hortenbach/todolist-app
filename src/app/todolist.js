"use client";
import styles from "./todolist.module.css";
import React, { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  /** checkbox should change state of item status */
  function handleCheckbox(e, idx) {
    setItems(prevItems => {
      const update = [...prevItems];
      update[idx] = { ...update[idx], completed: e.target.checked };
      return update;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: items.length,
      text: newTask,
      competed: false
    }
    setItems(prevItems => [...prevItems, newItem])
    setNewTask('')
  }

  return (
    <div>
      <label> Add new task:
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button type="submit" value="Add" onClick={handleSubmit} disabled={newTask.length === 0}>Add</button>
      </label>
      <div className={styles.main}>
        <ul>
          {items.map((item, idx) => {
            return (
              <div key={`${item.id}-div`} className={styles.listRow}>
                <input key={`${item.id}-checkbox`} type="checkbox" 
                  onClick={(e) => handleCheckbox(e, idx)}
                />
                <li key={`${item}-list`} className={item.completed? styles.checked : styles.unchecked}>
                  {item.text}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
