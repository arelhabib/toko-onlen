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

const getProductId = async (id, cb) => {
  try {
    let result = await axios.get(URL + `/${id}`);

    cb(result.data);
  } catch (error) {
    Swal.fire("Failed", "failed to fetch product id", "error");
  }
};

const createProduct = async (product) => {
  try {
    await axios({
      method: "POST",
      url: URL,
      data: product,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });

    Swal.fire("Add Product", "Product has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

const editProduct = async (id, product) => {
  try {
    await axios({
      method: "PUT",
      url: URL + `/${id}`,
      data: product,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });

    Swal.fire("Success", "succesfully updated the product", "success");
  } catch (error) {
    Swal.fire("Failed", "failed to update product", "error");
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

export { getProduct, createProduct, removeProduct, getProductId, editProduct };
