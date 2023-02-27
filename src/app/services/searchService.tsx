import * as httpRequest from '@/app/utils/httpRequest';

export const search = async (q: string, type = 'less') => {
  try {
    const res = await httpRequest.get(`/pokemon/${q}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log('get data failed');
  }
};
