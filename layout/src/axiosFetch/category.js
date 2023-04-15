import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/category";

const getCategory = async (cb) => {
  try {
    let result = await axios.get(URL);

    cb(result.data, result.data.length);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch all category", "error");
  }
};

const getCategoryId = async (id, cb) => {
  try {
    let result = await axios.get(URL + `/${id}`);

    cb(result.data);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch category id", "error");
  }
};

const createCategory = async (data) => {
  try {
    await axios.post(URL, data);

    Swal.fire("Success", "succesfully created new category", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to create new category", "error");
  }
};

const deleteCategory = async (id) => {
  try {
    await axios.delete(URL + `/${id}`);

    Swal.fire("Success", "succesfully deleted the category", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to delete category", "error");
  }
};

const updateCategory = async (id, data) => {
  try {
    await axios.put(URL + `/${id}`, data);

    Swal.fire("Success", "succesfully deleted the category", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to update category", "error");
  }
};

export {
  getCategory,
  getCategoryId,
  createCategory,
  deleteCategory,
  updateCategory,
};
