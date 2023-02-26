import { createSlice, nanoid } from "@reduxjs/toolkit"

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
})

const initialState = [
  createHuman('Steve'),
  createHuman('Marc'),
  createHuman('Alan'),
  createHuman('Sky'),
]

export const humanSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createHuman(action.payload)
      state.push(task)
    }
  }
})
