import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");

  const copyEvent = (event) => {
    event.preventDefault();
    let charCode = String.fromCharCode(event.which).toLocaleLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === "v") {
      navigator.clipboard.readText().then((text) => {
        if (text.includes("https://") || text.includes("http://")) {
          setUrl(text);
        } else {
          alert("Please copy a valid URL");
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", copyEvent);
    return () => {
      window.removeEventListener("keydown", copyEvent);
    };
  }, []);

  return (
    <div className="app-container">
      {url.length ? (
        <div className="url">{url}</div>
      ) : (
        <div className="url-empty">
          Copy any URL on this window and see the magic!
        </div>
      )}
    </div>
  );
}

export default App;
