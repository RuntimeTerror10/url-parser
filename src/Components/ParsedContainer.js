// import { ArcherContainer, ArcherElement } from "react-archer";
import { useState } from "react";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed, robotParam, paramCount }) => {
  const [isCopied, setIsCopied] = useState(false);
  const parameters = [
    "protocol",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash",
  ];
  let k = 0,
    init = 1.1;

  const handleParamClick = (param) => {
    robotParam(param);
  };

  const handleCopyParam = (param) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    const el = document.createElement("textarea");
    el.value = parsed[param];
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="result"
    >
      <motion.div
        className="pasted-url"
        initial={{ gap: 0 }}
        animate={{ gap: "3rem" }}
        transition={{ delay: 0.5 }}
      >
        {parameters.map((param) => {
          parsed[`${param}`] ? (k += 0.05) : (k = k);

          return parsed[`${param}`] ? (
            <motion.div
              initial={{ pointerEvents: "none" }}
              animate={{ pointerEvents: "auto" }}
              transition={{ delay: 1.4 }}
              className="param-container"
              style={{ maxWidth: `calc(100%/${paramCount})` }}
              key={param}
            >
              <button
                className="copy-btn"
                onClick={() => {
                  handleCopyParam(param);
                }}
              >
                {isCopied ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="copy-txt"
                  >
                    Copied!
                  </motion.div>
                ) : (
                  <svg className="copy-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  handleParamClick(param);
                }}
                className="param-group"
              >
                <motion.div
                  animate={{
                    padding: "1rem",
                    boxShadow: "rgb(0 0 0 / 20%) 0px 0px 0px 3px",
                    borderRadius: "5px",
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                  transition={{ delay: 1 }}
                  className="root-param"
                >
                  {param === "protocol"
                    ? parsed[`${param}`] + "//"
                    : parsed[`${param}`]}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: (init += k) }}
                  className="param-name"
                >
                  {param}
                </motion.div>
              </button>
            </motion.div>
          ) : null;
        })}
      </motion.div>
    </motion.div>
  );
};
