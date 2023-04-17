import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/users";

const getUsers = async (cb) => {
  try {
    let users = await axios({
      method: "GET",
      url: URL,
    });
    cb(users.data);
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (product) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: product,
    });

    Swal.fire("Add User", "User has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

const removeUser = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          url: URL + "/users/" + id,
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const loginUser = async (data, cb) => {
  try {
    let result = await axios.post(URL + "/login", data);

    const access_token = result.data.access_token;
    localStorage.setItem("access_token", access_token);

    cb(true);
  } catch (error) {
    Swal.fire("Failed", "failed to login", "error");
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

const getUserId = async (id, cb) => {
  try {
    let result = await axios.get(URL + `/${id}`);

    cb(result.data);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch user id", "error");
  }
};

export { getUsers, createUser, removeUser, loginUser, updateUser, getUserId };
