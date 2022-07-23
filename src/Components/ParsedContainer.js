// import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed }) => {
  const parameters = ["hostname", "port", "pathname", "search", "hash"];
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
        <div className="param-group">
          <motion.div
            animate={{
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              borderRadius: "5px",
            }}
            transition={{ delay: 1.4 }}
            className="root-param"
          >
            {parsed.protocol}//
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 2 }}
            className="param-name"
          >
            protocol
          </motion.div>
        </div>
        {parameters.map((param) => {
          parsed[`${param}`] ? (k += 0.1) : (k = k);
          return parsed[`${param}`] ? (
            <div className="param-group">
              <motion.div
                animate={{
                  padding: "1rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
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
