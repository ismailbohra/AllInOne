import axiosInstance from "../../network/apis";


export const loginUserEmail = async (payload) => {
  return await axiosInstance.post("/login", payload);
};



