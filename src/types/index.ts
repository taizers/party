export interface IDataTableItemTemplate<T> {
  header: string;
  template?: (product: T) => JSX.Element;
  field?: string;
}

export interface ICords {
  lat: number;
  lng: number;
}
