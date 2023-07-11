import React,{createContext, useReducer} from "react";
import Appreducer from "./AppReducer";
//initial state
  const initialState={
    transactions:[]
    }

    // create context
     const GlobalContext = createContext(initialState);

    // provider component

    const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(Appreducer, initialState);

        //actions
        function deleteTransaction(id){
        dispatch({  type: 'DELETE_TRANSACTION',
          payload:id
        });}

        function addTransaction(transaction){
          dispatch({  type: 'ADD_TRANSACTION',
            payload:transaction
          });}

        return (
            <GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction,addTransaction}}>

                {children}
            </GlobalContext.Provider>
        );
    }
    export default GlobalProvider;
    export {GlobalContext};