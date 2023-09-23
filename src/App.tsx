import CanvasMatrix from "./components/CanvasMatrix/CanvasMatrix";

function App() {
  return (
    <CanvasMatrix
      gridRows={8}
      gridColumn={6}
      gridHeight={40}
      gridWidth={35}
      emptyGrid={
        {
          // fromRow: 2,
          // toRow: 2,
          // fromCol: 2,
          // toCol:3
        }
      }
      multiSymbolIndex={{
        col: 4,
        row: 4,
      }}
    />
  );
}

export default App;
