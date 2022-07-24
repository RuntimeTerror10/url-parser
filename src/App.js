import "./App.css";
import { useState, useEffect } from "react";
import { ParsedContainer } from "./Components/ParsedContainer";
import { motion } from "framer-motion";
import robotGif from "./assets/little-robot.gif";

function App() {
  const [url, setUrl] = useState("");
  const [parsed, setParsed] = useState({});
  const [robotMsg, setRobotMsg] = useState(
    "Hey there! you wanna parse some URLs, eh?"
  );

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
          setUrl("");
          if (checkHttp(text)) {
            setTimeout(() => {
              setUrl(text);
              setRobotMsg("Now click on any parameter to know more about it!");
            }, 50);
          } else if (httpTest) {
            setUrl(`https://${text}`);
            setRobotMsg("Now click on any parameter to know more about it!");
          } else {
            setRobotMsg(
              "Please paste an url like \n https://www.example.com or http://ex.com or www.ex.com"
            );
          }
        } else {
          alert("Please copy an URL first");
        }
      });
    }
  };

  const handleRobotParam = (param) => {
    if (param === "protocol") {
      setRobotMsg(
        "The protocol is the first part of the URL. It is usually http or https."
      );
    } else if (param === "hostname") {
      setRobotMsg(
        "The hostname is the name of the website. It is usually the domain name."
      );
    } else if (param === "port") {
      setRobotMsg(
        "The port is the number of the port. It is usually 80 or 443."
      );
    } else if (param === "pathname") {
      setRobotMsg(
        "The pathname is the path of the URL. It is usually the path of the page."
      );
    } else if (param === "search") {
      setRobotMsg(
        "The search is the query string of the URL. It is usually the query string of the page."
      );
    } else if (param === "hash") {
      setRobotMsg(
        "The hash is the hash of the URL. It is usually the hash of the page."
      );
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
      <div className="link-strip"></div>
      <a
        href="https://github.com/RuntimeTerror10/url-parser"
        target="_blank"
        className="github-link"
      >
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
      </a>
      <div className="app-header">
        <div>URL Parser by Parth Bhardwaj (ChangWorks)</div>
      </div>
      {url.includes("http") ? (
        <ParsedContainer parsed={parsed} robotParam={handleRobotParam} />
      ) : (
        <div className="url-empty">Paste any URL on this page</div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="robot-container"
      >
        <img src={robotGif} width="150" height="150" alt="robot" />
        <div className="robot-text-container">
          <div className="robot-text">{robotMsg}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
