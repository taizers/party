import { DataTable, DataTableValue } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IAdminTableItemTemplate } from '../types';

interface AdminTableProps<T> {
  columns: IAdminTableItemTemplate<T>[];
  values: T[];
  title: string;
}

export default function AdminTable<T>({
  columns,
  values,
  title,
}: AdminTableProps<T>) {
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">{title}</span>
    </div>
  );

  return (
    <DataTable
      value={values as DataTableValue[]}
      size={'small'}
      header={header}
      tableStyle={{ minWidth: '600px' }}
    >
      {columns.map((item, index) => (
        <Column
          key={index}
          field={item.field}
          header={item.header}
          body={item.template}
        ></Column>
      ))}
    </DataTable>
  );
}
