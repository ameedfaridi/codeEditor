import React from "react";

const prefix = "code_editor-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = prefix + key;
  const [value, setValue] = React.useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    
    if (typeof initialValue === "function") return initialValue();
    return initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
