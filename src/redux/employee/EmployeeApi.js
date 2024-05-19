import axiosInstance from "../../network/apis";


export const fetchEmployees = async (payload) => {
  return await axiosInstance.post("/employee", payload);
};
export const createEmployee = async (payload) => {
  return await axiosInstance.post("/employee", payload);
};
export const updateEmployee = async (payload) => {
  return await axiosInstance.post("/employee", payload);
};
export const deleteEmployee = async (payload) => {
  return await axiosInstance.post("/employee", payload);
};






