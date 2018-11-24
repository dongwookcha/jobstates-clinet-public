import axios from 'axios';

// const URL = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com'; // JSON data
// const URL = 'http://127.0.0.1:3001'; // 로컬에서 테스트 시
const URL = 'http://13.209.99.252:3001';

const header = {
  headers: {
    id: 1,
  },
};

export const getUserAnalysisData = () => axios.get(`${URL}/analysis`);

export const getAutoCompleteData = company => axios.get(`${URL}/job?brand=${company}`);

export const getUserProfile = () => axios.get(`${URL}/user/profile`, header);
export const postUserProfile = (data, part) => axios.post(`${URL}/user/${part}`, data, header);
export const updateUserProfile = (data, part) => axios.patch(`${URL}/user/${part}`, data, header);
export const deleteUserProfile = (data, part) => axios.delete(`${URL}/user/${part}`, { data, ...header });

// export const deleteUserProfile = (data, part) => axios.delete(`${URL}/user/${part}/${data.id}`, header);


export const postUserImage = data => axios.post(`${URL}/test`, data);

export const fetchJob = () => axios.get(`${URL}/job`);

export const postUserJobPosting = data => axios.post(`${URL}/test`, data);
export const deletePostingJob = id => axios.delete(`${URL}/test`, id);

