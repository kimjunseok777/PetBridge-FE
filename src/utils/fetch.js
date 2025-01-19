

const BASE_URL = process.env.REACT_APP_BASE_URL;

// fetch 요청을 위한 헬퍼 함수
const customFetch = async (endpoint, options = {}) => {
  // 예시: 로컬 스토리지에 저장된 토큰을 가져옴
  const token = localStorage.getItem('authToken'); // 'authToken'은 예시로, 실제로 사용하는 키에 맞게 변경
  
  try {
    // Authorization 헤더 및 기타 옵션 병합
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options, // 전달된 옵션을 그대로 사용
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '', // 토큰이 있으면 Bearer 형식으로 헤더에 포함
        ...options.headers, // 추가적인 헤더가 있으면 병합
      },
    });

    // 응답이 실패하면 에러 처리
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json(); // 응답을 JSON으로 변환하여 리턴
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw error; // 에러를 상위 함수로 전달
  }
};

export default customFetch;
