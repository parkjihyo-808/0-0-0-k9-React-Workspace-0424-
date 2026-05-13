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

const PdItemExperience = ({ article }) => {
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL, MIDDLE_SIZE_RM1 } = article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail"><img src={MAIN_IMG_THUMB} alt="thumb" /></div>
      )}
      <div className="contents">
        <h2><a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">{MAIN_TITLE}</a></h2>
        <p>🎨 <strong>체험종류:</strong> {MIDDLE_SIZE_RM1}</p>
        <p>내용: {ITEMCNTNTS}</p>
        <p>장소: {ADDR1}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItemExperience;