import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme :"light";
  });
  useEffect(() => {

document.body.className="";
document.body.classList.add(theme);
localStorage.setItem("theme",theme);

  }, [theme]);
  console.log("Current Theme:", theme);
  return [theme,setTheme];
};

export default useTheme;
