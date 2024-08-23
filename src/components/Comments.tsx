import { FC, useEffect, useRef } from 'react';
import CommentInput from './CoomentInput';
import { commentsApiSlice } from '../store/reducers/CommentsApiSlice';
import { useShowErrorToast } from '../hooks';
import CommentItem from './CommentItem';

interface CommentsProps {
  placeId: number;
  comments: {
    id: number;
    text: string;
    grade: number;
    user: {
      id: number;
      name: string;
    };
  }[];
}

const Comments: FC<CommentsProps> = ({ comments, placeId }) => {
  const [createComment, { data, error }] =
    commentsApiSlice.useCreateCommentMutation();
  const resetFunctionRef = useRef<() => void>(null!);

  useShowErrorToast(error);

  useEffect(() => {
    if (data && resetFunctionRef.current !== null) {
      resetFunctionRef.current();
    }
  }, [data]);

  const onCommentSubmit = (
    comment: string,
    setSubmitting: (data: boolean) => void,
    resetForm: () => void
  ) => {
    resetFunctionRef.current = resetForm;
    createComment({ text: comment, placeId });
    setSubmitting(false);
  };

  const onGradeUpdate = (id: number, grade: number) => {
    console.log(id, grade);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
        }}
      >
        {comments.map((item, index) => (
          <CommentItem
            key={index}
            comment={item}
            onGradeUpdate={onGradeUpdate}
          />
        ))}
      </div>
      <CommentInput onSubmit={onCommentSubmit} />
    </div>
  );
};

export default Comments;
