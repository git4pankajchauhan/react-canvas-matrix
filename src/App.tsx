import CanvasMatrix from "./components/CanvasMatrix/CanvasMatrix";

function App() {
  return (
    <CanvasMatrix
      gridRows={8}
      gridColumn={8}
      gridHeight={45}
      gridWidth={35}
      multiSymbolIndex={{
        col: 1,
        row: 1,
      }}
    />
  );
}

export default App;
