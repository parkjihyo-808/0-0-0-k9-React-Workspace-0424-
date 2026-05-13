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
    .info { font-size: 0.85rem; color: #3498db; margin-top: 5px; }
  }
`;

const PdItemHospital = ({ article }) => {
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL, TEL_NO, MED_LINE } = article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail"><img src={MAIN_IMG_THUMB} alt="thumbnail" /></div>
      )}
      <div className="contents">
        <h2>
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">{MAIN_TITLE}</a>
        </h2>
        <p><strong>진료과목:</strong> {MED_LINE}</p>
        <p><strong>소개:</strong> {ITEMCNTNTS}</p>
        <p><strong>주소:</strong> {ADDR1}</p>
        <p className="info">📞 {TEL_NO}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItemHospital;