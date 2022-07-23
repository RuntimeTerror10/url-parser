// import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed }) => {
  const parameters = [
    "protocol",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash",
  ];
  let k = 0,
    init = 2;

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
        transition={{ delay: 0.8 }}
      >
        {parameters.map((param, index) => {
          parsed[`${param}`] ? (k += 0.1) : (k = k);

          return parsed[`${param}`] ? (
            <div className={`param-group param-${param}`} key={index}>
              <motion.div
                animate={{
                  padding: "1rem",
                  boxShadow: "rgb(0 0 0 / 20%) 0px 0px 0px 3px",
                  borderRadius: "5px",
                }}
                transition={{ delay: 1.4 }}
                className="root-param"
              >
                <div>{parsed[`${param}`]}</div>
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
            </div>
          ) : null;
        })}
      </motion.div>
    </motion.div>
  );
};
