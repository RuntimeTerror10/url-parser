import "./App.css";
import { useState, useEffect } from "react";

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

  const copyEvent = (event) => {
    event.preventDefault();
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
    window.addEventListener("keydown", copyEvent);
    return () => {
      window.removeEventListener("keydown", copyEvent);
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
        <div className="result">
          <div className="pasted-url">{url}</div>
          <div className="parsed-container">
            <div className="param-container">
              <div>{parsed.protocol}</div>
              <div className="param-name">protocol</div>
            </div>
            <div className="defaults">://</div>
            <div className="param-container">
              <div>{parsed.hostname}</div>
              <div className="param-name">hostname</div>
            </div>
            {parsed.port ? (
              <div className="param-container">
                <div>{parsed.port}</div>
                <div className="param-name">port</div>
              </div>
            ) : null}
            <div className="param-container">
              <div>{parsed.pathname}</div>
              <div className="param-name">pathname</div>
            </div>
            {parsed.search ? (
              <div className="param-container">
                <div>{parsed.search}</div>
                <div className="param-name">Search</div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="url-empty">
          Paste any URL on this window and see the magic!
        </div>
      )}
    </div>
  );
}

export default App;
