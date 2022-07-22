// import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed }) => {
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
        animate={{ gap: "1rem" }}
        transition={{ delay: 0.8 }}
      >
        <div className="param-group">
          <motion.div
            animate={{
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
            }}
            transition={{ delay: 1.4 }}
            className="root-param"
          >
            {parsed.protocol}
          </motion.div>
          <motion.div
            initial={{ width: 0, opacity: 0, y: -20 }}
            animate={{
              width: "auto",
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 2 }}
            className="param-name"
          >
            protocol
          </motion.div>
        </div>
        <div className="param-group">
          <motion.div
            animate={{
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
            }}
            transition={{ delay: 1.4 }}
            className="root-param"
          >
            <div>{parsed.hostname}</div>
          </motion.div>
          <motion.div
            initial={{ width: 0, opacity: 0, y: -20 }}
            animate={{
              width: "auto",
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 2.2 }}
            className="param-name"
          >
            hostname
          </motion.div>
        </div>
        {parsed.port ? (
          <div className="param-group">
            <motion.div
              animate={{
                padding: "1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              }}
              transition={{ delay: 1.4 }}
              className="root-param"
            >
              <div>{parsed.port}</div>
            </motion.div>
            <motion.div
              initial={{ width: 0, opacity: 0, y: -20 }}
              animate={{
                width: "auto",
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 2.4 }}
              className="param-name"
            >
              port
            </motion.div>
          </div>
        ) : null}
        <div className="param-group">
          <motion.div
            animate={{
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
            }}
            transition={{ delay: 1.4 }}
            className="root-param"
          >
            <div>{parsed.pathname}</div>
          </motion.div>
          <motion.div
            initial={{ width: 0, opacity: 0, y: -20 }}
            animate={{
              width: "auto",
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: parsed.port ? 2.6 : 2.4 }}
            className="param-name"
          >
            pathname
          </motion.div>
        </div>

        {parsed.search ? (
          <div className="param-group">
            <motion.div
              animate={{
                padding: "1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              }}
              transition={{ delay: 1.4 }}
              className="root-param"
            >
              <div>{parsed.search}</div>
            </motion.div>
            <motion.div
              initial={{ width: 0, opacity: 0, y: -20 }}
              animate={{
                width: "auto",
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: parsed.port ? 2.8 : 2.6 }}
              className="param-name"
            >
              search
            </motion.div>
          </div>
        ) : null}
        {parsed.hash ? (
          <div className="param-group">
            <motion.div
              animate={{
                padding: "1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              }}
              transition={{ delay: 1.4 }}
              className="root-param"
            >
              <div>{parsed.hash}</div>
            </motion.div>
            <motion.div
              initial={{ width: 0, opacity: 0, y: -20 }}
              animate={{
                width: "auto",
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: parsed.port
                  ? 3
                  : parsed.search && !parsed.port
                  ? 2.8
                  : 3.2,
              }}
              className="param-name"
            >
              hash
            </motion.div>
          </div>
        ) : null}
        {/* {parsed.search ? (
          <div>
            <motion.div
              animate={{
                padding: "1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              }}
              transition={{ delay: 800 1.4 }}
              className="root-param"
            >
              <div>{parsed.search}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 2 }}
            >
              search
            </motion.div>
          </div>
        ) : null} */}
      </motion.div>
      {/* <motion.div className="parsed-container">
        <div className="param-container">
          <div className="param-name">protocol</div>
        </div>

        <div className="param-container">
          <div className="param-name">hostname</div>
        </div>

        {parsed.port ? (
          <div className="param-container">
            <div className="param-name">port</div>
          </div>
        ) : null}

        <div className="param-container">
          <div className="param-name">pathname</div>
        </div>

        {parsed.search ? (
          <div className="param-container">
            <div className="param-name">Search</div>
          </div>
        ) : null}
        {parsed.hash ? (
          <div className="param-container">
            <div className="param-name">hash</div>
          </div>
        ) : null}
      </motion.div> */}
    </motion.div>
  );
};
