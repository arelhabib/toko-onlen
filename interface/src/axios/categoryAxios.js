import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/category";

const getCategories = async (cb) => {
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

const createCategory = async (product) => {
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

const removeCategory = async (id) => {
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

export { getCategories, createCategory, removeCategory };
