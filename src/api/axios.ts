import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // below, a piece of code to log out the user
    /*   if (response && response.data.error === 'InvalidToken') {
      destroyCookie(null, 'token');
      const router = useRouter();
      router.push('/login');
      return;
    } */
    throw error;
  }
);

export default axiosInstance;
