import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/products";

const getProduct = async (cb) => {
  try {
    let products = await axios({
      method: "GET",
      url: URL,
    });
    cb(products.data);
  } catch (e) {
    console.log(e);
  }
};

const createProduct = async (product) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: product,
    });

    Swal.fire("Add Product", "Product has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

const removeProduct = async (id) => {
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
          url: URL + "/" + id,
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export { getProduct, createProduct, removeProduct };
