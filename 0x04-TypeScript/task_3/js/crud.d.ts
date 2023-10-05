import { RowID, RowElement } from "./interface";

declare module "crud" {
  export function insertRow(row: RowElement): RowID;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
}
