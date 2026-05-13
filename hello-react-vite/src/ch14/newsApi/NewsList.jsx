import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from './usePromise';
import PdItemFood from './PdItemFood';
import PdItemHospital from './PdItemHospital';
import PdItemFestival from './PdItemFestival';
import PdItemExperience from './PdItemExperience';
import PdItemShopping from './PdItemShopping';
import PdItemWalking from './PdItemWalking';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// YOUR_API_KEY 자리에 newsapi.org에서 발급받은 키를 입력하세요
const apiKey = import.meta.env.VITE_News_API_KEY;
const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;

const NewsList = ({ category = 'all' }) => {
  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'busanFood') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'busanTour') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'busanFestival') {
      return axios.get(
        `http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      )
    } else if (category === 'busanHospital') {
      return axios.get(
        `http://apis.data.go.kr/6260000/MedicInstitService/MedicalInstitInfo?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      )
    } else if (category === 'busanWalking') {
      return axios.get(
        `http://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      )
    } else if (category === 'busanShopping') {
      return axios.get(
        `http://apis.data.go.kr/6260000/ShoppingService/getShoppingKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      )
    } else if (category === 'busanExperience') {
      return axios.get(
        `http://apis.data.go.kr/6260000/ShoppingService/getShoppingKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      )
    }
    
     else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
      );
    }
  };

  // 실습4, 확인용
  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading)
    return (
      <NewsListBlock>
        <p>⏳ 뉴스를 불러오는 중...</p>
      </NewsListBlock>
    );
  if (error)
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </NewsListBlock>
    );
  if (!resolved) return null;

  // 기존의 뉴스 기사 데이터 내용이고, 카테고리에 따라서, 내용을 분기하기.
  // const { articles } = resolved.data;
  // ?.
  // getFoodKr?. , 서버로 호출된 값에 접근시, 데이터가 없을 경우, 에러를 발생시키는 것이 아니라,
  // undefined  또는 null 이어도, 에러를 발생시키지 않는다.
  const data =
    category === 'busanFood'
      ? resolved.data.getFoodKr?.item || []
      : category === 'busanTour'
        ? resolved.data.getAttractionKr?.item || []
        : category === 'busanHospital'
          ? resolved.data.getMedicalHospKr?.item || []
          : category === 'busanFestival'
            ? resolved.data.getFestivalKr?.item || []
            : category === 'busanExperience'
              ? resolved.data.getExperienceKr?.item || []
              : category === 'busanShopping'
                ? resolved.data.getShoppingKr?.item || []
                : category === 'busanWalking'
                  ? resolved.data.getWalkingKr?.item || []
                  : resolved.data.articles || [];

  // ### 📝 실습 문제 4

  // > NewsList 컴포넌트에서 articles가 빈 배열일 때 (기사가 없을 때)
  // `"📭 표시할 뉴스가 없습니다."` 메시지를 보여주도록 처리하세요.
  // >
  // 실습4 , 순서1
  if (data.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>📭 표시할 데이터가 없습니다.</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {category === 'busanFood'
        ? data.map((data, index) => <PdItemFood key={index} article={data} />)
        : category === 'busanTour'
          ? data.map((data, index) => <PdItemFood key={index} article={data} />)
          : category === 'busanHospital'
            ? data.map((data, index) => <PdItemHospital key={index} article={data} />)
            : category === 'busanFestival'
              ? data.map((data, index) => <PdItemFestival key={index} article={data} />)
              : category === 'busanExperience'
                ? data.map((data, index) => <PdItemExperience key={index} article={data} />)
                : category === 'busanShopping'
                  ? data.map((data, index) => <PdItemShopping key={index} article={data} />)
                  : category === 'busanWalking'
                    ? data.map((data, index) => <PdItemWalking key={index} article={data} />)
                    : data.map((data) => <NewsItem key={data.url} article={item} />)}
    </NewsListBlock>
  );
};

export default NewsList;
