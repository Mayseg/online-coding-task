import CodeBlock from "../CodeBlock/CodeBlock";

const CODE_BLOCKS_TEMP = [
  { id: 1, title: "block1" },
  { id: 2, title: "block2" },
  { id: 3, title: "block3" },
];

function LobbyPage() {
  const blockList = CODE_BLOCKS_TEMP.map(block => <CodeBlock id={block.id} title={block.title} />);

  return (
    <>
      <h1>Choose a code block:</h1>
      <ul>{blockList}</ul>
    </>
  );
}

export default LobbyPage;
