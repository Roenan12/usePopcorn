import { useEffect } from "react";

export function useKey(key, action) {
  //Listen to keypress
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      //clean up so that event listener execute only once
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
