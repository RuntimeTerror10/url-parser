import { ArcherContainer, ArcherElement } from "react-archer";
export const ParsedContainer = ({ parsed }) => {
  return (
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
  );
};
