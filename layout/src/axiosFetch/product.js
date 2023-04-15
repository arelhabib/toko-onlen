import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/products"; // post/putForm buat form multipart, tpi lom dicoba

const getProduct = async (cb) => {
  try {
    let result = await axios.get(URL);

    cb(result.data, result.data.length);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch all product", "error");
  }
};

const getProductId = async (id, cb) => {
  try {
    let result = await axios.get(URL + `/${id}`);

    cb(result.data);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch product id", "error");
  }
};

const createProduct = async (data) => {
  try {
    await axios.postForm(URL, data);

    Swal.fire("Success", "succesfully created new product", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to create new product", "error");
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(URL + `/${id}`);

    Swal.fire("Success", "succesfully deleted the product", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to delete product", "error");
  }
};

const updateProduct = async (id, data) => {
  try {
    await axios.putForm(URL + `/${id}`, data);

    Swal.fire("Success", "succesfully deleted the product", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to update product", "error");
  }
};

export {
  getProduct,
  getProductId,
  createProduct,
  deleteProduct,
  updateProduct,
};
