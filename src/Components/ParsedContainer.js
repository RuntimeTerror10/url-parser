import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

export const ParsedContainer = ({ parsed }) => {
  return (
    <div className="result">
      <ArcherContainer strokeColor="black" style={{ width: "100%" }}>
        <div className="pasted-url">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
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
              <div className="root-param">
                <div>{parsed.protocol}//</div>
              </div>
            </ArcherElement>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
              <div className="root-param">
                <div>{parsed.hostname}</div>
              </div>
            </ArcherElement>
          </motion.div>
          {parsed.port ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                <div className="root-param">
                  <div>{parsed.port}</div>
                </div>
              </ArcherElement>
            </motion.div>
          ) : null}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
              <div className="root-param">
                <div>{parsed.pathname}</div>
              </div>
            </ArcherElement>
          </motion.div>

          {parsed.search ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                <div className="root-param">
                  <div>{parsed.search}</div>
                </div>
              </ArcherElement>
            </motion.div>
          ) : null}
          {parsed.hash ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                <div className="root-param">
                  <div>{parsed.hash}</div>
                </div>
              </ArcherElement>
            </motion.div>
          ) : null}
          {parsed.search ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                <div className="root-param">
                  <div>{parsed.search}</div>
                </div>
              </ArcherElement>
            </motion.div>
          ) : null}
        </div>
        <div className="parsed-container">
          <ArcherElement id="protocol_box">
            <div className="param-container">
              <div className="param-name">protocol</div>
            </div>
          </ArcherElement>

          <ArcherElement id="hostname_box">
            <div className="param-container">
              <div className="param-name">hostname</div>
            </div>
          </ArcherElement>
          {parsed.port ? (
            <ArcherElement id="port_box">
              <div className="param-container">
                <div className="param-name">port</div>
              </div>
            </ArcherElement>
          ) : null}
          <ArcherElement id="pathname_box">
            <div className="param-container">
              <div className="param-name">pathname</div>
            </div>
          </ArcherElement>
          {parsed.search ? (
            <ArcherElement id="search_box">
              <div className="param-container">
                <div className="param-name">Search</div>
              </div>
            </ArcherElement>
          ) : null}
          {parsed.hash ? (
            <ArcherElement id="hash_box">
              <div className="param-container">
                <div className="param-name">hash</div>
              </div>
            </ArcherElement>
          ) : null}
        </div>
      </ArcherContainer>
    </div>
  );
};
