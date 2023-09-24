import CanvasMatrix from "./components/CanvasMatrix/CanvasMatrix";

function App() {
  return (
    <CanvasMatrix
      gridRows={8}
      gridColumn={4}
      gridHeight={45}
      gridWidth={35}
      emptyGrid={
        {
          // fromRow: 2,
          // toRow: 2,
          // fromCol: 2,
          // toCol:3
        }
      }
    />
  );
}

export default App;
