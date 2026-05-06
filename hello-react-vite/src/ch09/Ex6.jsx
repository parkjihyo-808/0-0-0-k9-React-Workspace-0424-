import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Ex6.module.css';

const cx = classNames.bind(styles);

const Ex6 = ({ label = '토글' }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={cx('button', { active: isActive })}
    >
      {isActive ? ' ✅ 활성화' : `${label} (비활성화)`}
    </button>
  );
};

export default Ex6;
