import { createContext, useContext, useState } from "react";

interface ToDo {
  id: number;
  title: string;
  content: string;
  isComplete: boolean;
}

type ToDosContextType = {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const initialValue: ToDosContextType = { toDos: [], setToDos: () => {} };
const ToDosContext = createContext(initialValue);

export const useToDos = () => useContext(ToDosContext);

interface ToDosProviderProps {
  children: React.ReactNode;
}

export function ToDosProvider({ children }: ToDosProviderProps) {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <ToDosContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDosContext.Provider>
  );
}
