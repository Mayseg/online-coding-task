import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LobbyPage.css";

function LobbyPage() {
  const [blocks, setBlocks] = useState();

  useEffect(() => {
    async function fetchBlocks() {
      const response = await fetch("http://localhost:3000/");
      const resData = await response.json();
      setBlocks(resData);
    }
    fetchBlocks();
  }, []);

  return (
    <div className="lobby-container">
      <h1>Choose a code block:</h1>
      <ul className="code-block-list">
        {blocks &&
          blocks.map(block => (
            <li key={block._id} className="code-block-item">
              <Link to={`/blocks/${block._id}`}> {block.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LobbyPage;
