export interface IProps {
  gridRows: number;
  gridColumn: number;
  gridHeight: number;
  gridWidth: number;
  emptyGrid?: {
    fromRow?: number;
    toRow?: number;
    fromCol?: number;
    toCol?: number;
  };
  multiSymbolIndex?: {
    col: number;
    row: number;
  };
}
