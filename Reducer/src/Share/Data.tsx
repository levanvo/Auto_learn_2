import { createContext, useReducer } from 'react';
import { produce } from 'immer';

export const ShareData = createContext({} as any);

type CounterProviderProps = {
  children: React.ReactNode;
};
const Intial = {
  data: [],
}
const SystemData = (state: any, action: any) => {
  switch (action.type) {
    case "FetchAPI":
      state.data = action.payload;
      return;
    case "AddPr":
      state.data.push(action.payload);
      return;
    case "RemovePr":
      const id = action.payload;
      state.data = state.data.filter((item: any) => item.id != id)
      return;
    case "UpdatePr":
      state.data=state.data.map((item:any)=>item.id==action.payload.id?action.payload:item)
      return;
    default:
      return state;
  }
}

const Data = ({ children }: CounterProviderProps) => {
  const [intry, outry] = useReducer(produce(SystemData), Intial);

  return (
    <ShareData.Provider value={{ intry, outry }}>
      {children}
    </ShareData.Provider>
  )
}

export default Data
