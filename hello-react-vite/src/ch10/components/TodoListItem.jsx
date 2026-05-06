// src/components/TodoListItem.js
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo; // 구조 분해 할당

  // 삭제 전 confirm 다이얼로그 표시,
  const handleRemove = () => {
    if (window.confirm(`"${text}" 정말 삭제할까요?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="TodoListItem">
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn('checkbox', { checked })} // checked=true면 'checkbox checked'
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={handleRemove}>
        {/* <MdRemoveCircleOutline /> */}
        <AiFillDelete />
      </div>
    </div>
  );
};

export default TodoListItem;
