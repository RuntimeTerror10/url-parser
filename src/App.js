import "./App.css";
import { useState, useEffect } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

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
        <div className="result">
          <ArcherContainer strokeColor="black" style={{ width: "100%" }}>
            <div className="pasted-url">
              <div>
                <ArcherElement
                  id="protocol"
                  relations={[
                    {
                      targetId: "protocol_box",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeWidth: 1.5, lineStyle: "straight" },
                    },
                  ]}
                >
                  <div>{parsed.protocol}//</div>
                </ArcherElement>
              </div>
              <div>
                <ArcherElement
                  id="hostname"
                  relations={[
                    {
                      targetId: "hostname_box",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeWidth: 1.5, lineStyle: "straight" },
                    },
                  ]}
                >
                  <div>{parsed.hostname}</div>
                </ArcherElement>
              </div>
              {parsed.port ? (
                <div>
                  <ArcherElement
                    id="port"
                    relations={[
                      {
                        targetId: "port_box",
                        targetAnchor: "top",
                        sourceAnchor: "bottom",
                        style: { strokeWidth: 1.5, lineStyle: "straight" },
                      },
                    ]}
                  >
                    <div>{parsed.port}</div>
                  </ArcherElement>
                </div>
              ) : null}
              <div>
                <ArcherElement
                  id="pathname"
                  relations={[
                    {
                      targetId: "pathname_box",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeWidth: 1.5, lineStyle: "straight" },
                    },
                  ]}
                >
                  <div>{parsed.pathname}</div>
                </ArcherElement>
              </div>
              {parsed.search ? (
                <div>
                  <ArcherElement
                    id="search"
                    relations={[
                      {
                        targetId: "search_box",
                        targetAnchor: "top",
                        sourceAnchor: "bottom",
                        style: { strokeWidth: 1.5, lineStyle: "straight" },
                      },
                    ]}
                  >
                    <div>{parsed.search}</div>
                  </ArcherElement>
                </div>
              ) : null}
              {parsed.hash ? (
                <div>
                  <ArcherElement
                    id="hash"
                    relations={[
                      {
                        targetId: "hash_box",
                        targetAnchor: "top",
                        sourceAnchor: "bottom",
                        style: { strokeWidth: 1.5, lineStyle: "straight" },
                      },
                    ]}
                  >
                    <div>{parsed.hash}</div>
                  </ArcherElement>
                </div>
              ) : null}
              <div>
                <ArcherElement
                  id="search"
                  relations={[
                    {
                      targetId: "search_box",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeWidth: 1.5 },
                    },
                  ]}
                >
                  <div>{parsed.search}</div>
                </ArcherElement>
              </div>
            </div>
            <div className="parsed-container">
              <div className="param-container">
                <ArcherElement id="protocol_box">
                  <div className="param-name">protocol</div>
                </ArcherElement>
              </div>

              <div className="param-container">
                <ArcherElement id="hostname_box">
                  <div className="param-name">hostname</div>
                </ArcherElement>
              </div>
              {parsed.port ? (
                <div className="param-container">
                  <ArcherElement id="port_box">
                    <div className="param-name">port</div>
                  </ArcherElement>
                </div>
              ) : null}
              <div className="param-container">
                <ArcherElement id="pathname_box">
                  <div className="param-name">pathname</div>
                </ArcherElement>
              </div>
              {parsed.search ? (
                <div className="param-container">
                  <ArcherElement id="search_box">
                    <div className="param-name">Search</div>
                  </ArcherElement>
                </div>
              ) : null}
              {parsed.hash ? (
                <div className="param-container">
                  <ArcherElement id="hash_box">
                    <div className="param-name">hash</div>
                  </ArcherElement>
                </div>
              ) : null}
            </div>
          </ArcherContainer>
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
