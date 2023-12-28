// src/api.ts

import axios from 'axios';

const dev: string = 'http://localhost:8080';

const api = axios.create({
    baseURL: dev, // 예시 API URL, 실제로 사용할 API의 baseURL로 변경해야 합니다.
});

export default api;
