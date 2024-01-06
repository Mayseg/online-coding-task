import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CodeBlock.css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

function CodeBlock() {
  const block = useParams();
  const [codeBlock, setCodeBlock] = useState();

  useEffect(() => {
    async function fetchBlocks() {
      const response = await fetch(`http://localhost:3000/${block._id}`);
      const resData = await response.json();
      setCodeBlock(resData);
    }
    fetchBlocks();
    hljs.highlightAll();
  }, [block]);

  return (
    <div className="block-container">
      {codeBlock && (
        <>
          <h1>{codeBlock.title}</h1>
          <pre>
            <code className="code-block hljs language-javascript">{codeBlock.code}</code>
          </pre>
        </>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}

export default CodeBlock;
