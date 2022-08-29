import { useContext } from "react";
import { GlobalContext } from "context";

function useGlobalContext() {
   return useContext(GlobalContext);
}

export default useGlobalContext;
