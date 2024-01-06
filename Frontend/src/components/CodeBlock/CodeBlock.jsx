import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  return (
    <>
      {codeBlock && (
        <>
          <h1>{codeBlock.title}</h1>
          <p>{codeBlock.code}</p>
        </>
      )}
    </>
  );
}

export default CodeBlock;
