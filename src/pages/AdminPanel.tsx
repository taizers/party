import { FC, useState } from 'react';
import NewsAdmin from '../components/NewsAdmin';
import { SelectButton } from 'primereact/selectbutton';
import PlacesAdmin from '../components/PlacesAdmin';
import CommentsAdmin from '../components/CommentsAdmin';

const AdminPanel: FC = () => {
  const [pageOptions] = useState([
    { label: 'Places', value: 'places' },
    { label: 'News', value: 'news' },
    { label: 'Comments', value: 'comments' },
  ]);
  const [page, setPage] = useState(pageOptions[1].value);

  return (
    <div style={{ padding: '20px',overflowY: 'auto' }}>
      <div className="flex justify-content-center mb-4">
        <SelectButton
          value={page}
          onChange={(e) => setPage(e.value)}
          options={pageOptions}
          className="admin-panel-switch-button"
        />
      </div>
      {page === 'news' && <NewsAdmin />}
      {page === 'places' && <PlacesAdmin />}
      {page === 'comments' && <CommentsAdmin />}
    </div>
  );
};

export default AdminPanel;
