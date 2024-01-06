import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LobbyPage() {
  const [blocks, setBlocks] = useState();

  useEffect(() => {
    async function fetchBlocks() {
      const response = await fetch("http://localhost:3000/");
      const resData = await response.json();
      console.log(resData);
      setBlocks(resData);
    }
    fetchBlocks();
  }, []);

  return (
    <>
      <h1>Choose a code block:</h1>
      <ul>
        {blocks &&
          blocks.map(block => (
            <li key={block._id}>
              <Link to={`/blocks/${block._id}`}> {block.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default LobbyPage;
