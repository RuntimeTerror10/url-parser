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
            <button
              onClick={() => {
                handleParamClick(param);
              }}
              className="param-group"
              key={param}
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
          ) : null;
        })}
      </motion.div>
    </motion.div>
  );
};
