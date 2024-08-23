import { Fieldset } from 'primereact/fieldset';
import { Rating } from 'primereact/rating';
import { FC } from 'react';

interface CommentItemProps {
  comment: {
    id: number;
    text: string;
    grade: number;
    user: {
      id: number;
      name: string;
    };
  };
  onGradeUpdate: (id: number, grade: number) => void;
}

const CommentItem: FC<CommentItemProps> = ({ comment, onGradeUpdate }) => {
  const onUpdate = (grade: number) => {
    onGradeUpdate(comment.id, grade);
  };

  const legendTemplate = (
    <div
      style={{ flexWrap: 'wrap' }}
      className="flex align-items-center gap-2 px-2"
    >
      <span className="font-bold">{comment.user.name}</span>
      <Rating
        value={comment.grade}
        onChange={(e) => onUpdate(e.value as number)}
        cancel={false}
      />
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Fieldset
        style={{ backgroundColor: '#a2a0fd', color: 'white' }}
        legend={legendTemplate}
      >
        <p className="m-0">{comment.text}</p>
      </Fieldset>
    </div>
  );
};

export default CommentItem;
