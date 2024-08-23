import { FC } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

interface PaginationComponentProps {
  page: {
    current: number;
    setPage: (data: number) => void;
  };
  limit: {
    current: number;
    setLimit: (data: number) => void;
  };
  itemsCount: number;
}

const rowsPerPageOptions = [10, 20, 30];

const PaginationComponent: FC<PaginationComponentProps> = ({
  page,
  limit,
  itemsCount,
}) => {
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    page.setPage(event.first);
    limit.setLimit(event.rows);
  };

  return (
    <div style={{ alignSelf: 'center' }}>
      <Paginator
        template="PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown"
        first={page.current}
        rows={limit.current}
        totalRecords={itemsCount}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationComponent;
