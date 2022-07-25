// import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed, robotParam }) => {
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

  const handleCopyParam = (event, param) => {
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
        animate={{ gap: "2rem" }}
        transition={{ delay: 0.5 }}
      >
        {parameters.map((param) => {
          parsed[`${param}`] ? (k += 0.05) : (k = k);

          return parsed[`${param}`] ? (
            <div className="param-container" key={param}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: (init += k) }}
              >
                <button
                  className="copy-btn"
                  onClick={(event) => {
                    handleCopyParam(event, param);
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                    />
                  </svg>
                </button>
              </motion.div>
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
                  <div>
                    {param === "protocol"
                      ? parsed[`${param}`] + "//"
                      : parsed[`${param}`]}
                  </div>
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
            </div>
          ) : null;
        })}
      </motion.div>
    </motion.div>
  );
};
