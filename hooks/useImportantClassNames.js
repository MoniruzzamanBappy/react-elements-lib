import { useEffect, useState } from "react";

const useImportantClassNames = (className) => {
  const [classList, setClassList] = useState("");

  useEffect(() => {
    if (className) {
      const classes = className.split(" ").map((cls) => {
        if (cls.includes("!")) {
          return cls; // If already important, keep it as is
        }
        return `!${cls}`; // Add `!` to make it important
      });

      setClassList(classes.join(" "));
    }
  }, [className]);

  return classList;
};

export default useImportantClassNames;
