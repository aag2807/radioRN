import React, { useEffect, useState } from "react";

const useInitials = (name) => {
  const [initials, setInitials] = useState("N/A");

  useEffect(() => {
    let initialOne = "";
    let initialTwo = "";
    let clearedName = name.replace("RCTC", "");
    let splitName = clearedName.split(" ");

    splitName.shift();

    splitName.map((text) => {
      if (splitName.length == 1) {
        initialOne = splitName[0].charAt(0);
        initialTwo = splitName[0].charAt(1);
      } else if (splitName.length == 2) {
        initialOne = splitName[0].charAt(0);
        initialTwo = splitName[1].charAt(0);
      } else if (splitName.length == 3) {
        initialOne = splitName[0].charAt(0);
        initialTwo = splitName[2].charAt(0);
      } else {
        initialOne = "N/";
        initialTwo = "A";
      }
      setInitials((initialOne + initialTwo).toUpperCase());
    });
  }, [name]);

  return { text: initials };
};

export default useInitials;
