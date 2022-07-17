import "./App.css";
import { useState, useEffect } from "react";
import { ParsedContainer } from "./Components/ParsedContainer";

function App() {
  const [url, setUrl] = useState("");
  const [parsed, setParsed] = useState({});
  console.log("parsed", parsed);
  // const [isUrlLoading, setIsUrlLoading] = useState(false);
  const httpRegex = "/^www./";

  const checkHttp = (url) => {
    if (url.includes("http://") || url.includes("https://")) {
      return true;
    } else {
      return false;
    }
  };

  const keyDownHandler = (event) => {
    let charCode = String.fromCharCode(event.which).toLocaleLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === "v") {
      navigator.clipboard.readText().then((text) => {
        if (text.length > 1) {
          let httpTest = httpRegex.match(text);
          if (checkHttp(text)) {
            setUrl(text);
          } else if (httpTest) {
            setUrl(`https://${text}`);
          } else {
            alert(
              "Please paste an url like \n https://www.example.com or http://ex.com or www.ex.com"
            );
          }
        } else {
          alert("Please copy an URL first");
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (url.startsWith("http")) {
      let tempObj = new URL(url);
      setParsed({
        origin: tempObj.origin,
        protocol: tempObj.protocol,
        username: tempObj.username,
        password: tempObj.password,
        host: tempObj.host,
        hostname: tempObj.hostname,
        port: tempObj.port,
        pathname: tempObj.pathname,
        search: tempObj.search,
        hash: tempObj.hash,
        searchParams: tempObj.searchParams,
      });
    }
  }, [url]);

  return (
    <div className="app-container">
      {url.includes("http") ? (
        <ParsedContainer parsed={parsed} />
      ) : (
        <div className="url-empty">
          Paste any URL on this window and see the magic!
        </div>
      )}
    </div>
  );
}

export default App;
