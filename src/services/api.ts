export const BASE_API_URL = "http://localhost:4000/api";

export interface IRacket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: {
    id: number;
    name: string;
  };
}

export type Response<T> =
  | { isError: false; data: T }
  | { isError: true; data: undefined };

type Params = {
  id?: string;
  limit?: number;
  page?: number;
};

export const getProductById = async ({
  id,
}: { id: string }): Promise<Response<IRacket>> => {
  const result = await fetch(`${BASE_API_URL}/product/${id}`, { cache: 'no-store' });

  if (result.status === 404) {
    return { isError: false, data: undefined } as any;
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};



export const getProducts = async ({
  limit = 10,
  page = 1,
}: { limit?: number; page?: number } = {}): Promise<Response<IRacket[]>> => {
  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
    { cache: 'no-store' }
  );

  if (result.status === 404) {
    return { isError: false, data: [] };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
