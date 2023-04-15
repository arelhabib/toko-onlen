import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/users";

const getUser = async (cb) => {
  try {
    let result = await axios.get(URL);

    cb(result.data, result.data.length);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch all user", "error");
  }
};

const getUserId = async (id, cb) => {
  try {
    let result = await axios.get(URL + `/${id}`);

    cb(result.data);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch user id", "error");
  }
};

const registerUser = async (data) => {
  try {
    await axios.post(URL, data);

    Swal.fire("Success", "succesfully created new user", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to create new user", "error");
  }
};

const loginUser = async (data, cb) => {
  try {
    let result = await axios.post(URL, data);

    const access_token = result.data.access_token;
    localStorage.setItem("access_token", access_token);

    cb(true);
  } catch (error) {
    Swal.fire("Failed", "failed to create new user", "error");
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(URL + `/${id}`);

    Swal.fire("Success", "succesfully deleted the user", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to delete user", "error");
  }
};

const updateUser = async (id, data) => {
  try {
    await axios.put(URL + `/${id}`, data);

    Swal.fire("Success", "succesfully deleted the user", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to update user", "error");
  }
};

export { getUser, getUserId, deleteUser, updateUser, registerUser, loginUser };
