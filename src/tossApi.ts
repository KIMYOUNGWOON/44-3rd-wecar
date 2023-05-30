import axios, { AxiosRequestConfig } from 'axios';

export async function callTossPaymentAPI(
  secretKey: string,
  requestData: any
): Promise<any> {
  const url = 'https://api.tosspayments.com/v1/payments';

  console.log(secretKey);

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${secretKey}:`)}`,
    },
  };

  try {
    const response = await axios.post(url, requestData, config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.errorMessage || 'API 호출 오류');
  }
}
