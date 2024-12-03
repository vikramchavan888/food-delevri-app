import { apiClient } from "../service/apiClient";

export const saveSharedCart = async (cartId, cart) => {
  const response = await apiClient.post("/api/shared-cart", { cartId, cart });
  return response.data;
};

export const fetchSharedCart = async (cartId) => {
  const response = await apiClient.get(`/api/shared-cart/${cartId}`);
  return response.data;
};



