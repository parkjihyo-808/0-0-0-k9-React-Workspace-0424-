import React from 'react';
import styled, { css } from 'styled-components';

// 문제 4-2 : styled-components를 사용하여 Card 컴포넌트를 만드세요.
// variant prop으로 'primary'와 'secondary' 두 가지 스타일을 지원해야 합니다.

//CardWrappaer , 여기서, 속성 부분도, 1) variant 부분 나누기. 2) 제목 3) 내용 나누기.

const cardVariants = {
  primary: css`
    border-left: 4px solid #1182f2;
    background: #d3e3ee;
  `,
  secondary: css`
    border-left: 4px solid #9914b0;
    background: #f3e5f5;
  `,
};

const CardWrapper = styled.div`
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 360px;
  margin: 1rem auto;

  ${(props) => cardVariants[props.variant] || cardVariants.primary}
`;

const CardTitle = styled.h3`
  margin: 0 0.5rem;
  color: #333;
`;

const CardContent = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.6;
`;

const Ex8 = ({ title, content, variant = 'primary' }) => {
  return (
    <div>
      <CardWrapper variant={variant}>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardWrapper>
    </div>
  );
};

export default Ex8;
