import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

//store é o estado global

//reducer são conjuntos de informações que vamos compartilhar entre os componentes

//slice é fatia de um estado

// action ação para que é disparada para inserir informações no estado

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux"],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions

// Aqui pego o tipo do estado
// Pego a tipagem função que retorno o estado
// Depois uso o ReturnType para pegar o retorno da função
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector