import { createContext } from "react";
import React from "react";
import axios from "axios";
export const homeContext = createContext();

export function HomeProvider(props) {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8000/landingPage").then((response) => {
      console.log(response.data[0]);
      setPost(response.data[0]);
    });
  }, []);
  return (
    <homeContext.Provider value={[post]}>{props.children}</homeContext.Provider>
  );
}
