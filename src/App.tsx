import CanvasMatrix from "./components/CanvasMatrix/CanvasMatrix";

function App() {
  return (
    <CanvasMatrix
      gridRows={8}
      gridColumn={8}
      gridHeight={45}
      gridWidth={35}
      emptyGrid={
        {
          fromRow: 0,
          toRow: 3,
          fromCol: 1,
          toCol:5
        }
      }
      multiSymbolIndex={{
        col:1,
        row:1
      }}
    />
  );
}

export default App;
