import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;
   .thumbnail {
    margin-right: 1rem;
    img { width: 160px; height: 100px; object-fit: cover; border-radius: 4px; }
  }

  .contents {
    h2 { margin: 0 0 8px 0; font-size: 1rem; a { color: black; text-decoration: none; &:hover { text-decoration: underline; } } }
    p { margin: 0; line-height: 1.5; color: #666; font-size: 0.9rem; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
  }
`;

const PdItemShopping = ({ article }) => {
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL, USAGE_DAY_WEEK_AND_TIME } = article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail"><img src={MAIN_IMG_THUMB} alt="thumb" /></div>
      )}
      <div className="contents">
        <h2><a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">{MAIN_TITLE}</a></h2>
        <p>🛍️ <strong>영업시간:</strong> {USAGE_DAY_WEEK_AND_TIME}</p>
        <p>소개: {ITEMCNTNTS}</p>
        <p>주소: {ADDR1}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItemShopping;