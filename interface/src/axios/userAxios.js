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

const addUser = async (user) => {
  try {
    await axios({
      method: "POST",
      url: URL + "/register",
      data: user,
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
        await axios({
          method: "DELETE",
          url: URL + "/" + id,
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
    window.location.reload();
  } catch (error) {
    let timerInterval;
    Swal.fire({
      title: "Failed",
      text: "failed to login, email or password is incorrect",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      window.location.reload();
    });
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
    let result = await axios({
      method: "GET",
      url: URL + "/" + id,
    });

    cb(result.data);
  } catch (e) {
    console.log(e);
  }
};

export { getUsers, addUser, removeUser, loginUser, updateUser, getUserId };
