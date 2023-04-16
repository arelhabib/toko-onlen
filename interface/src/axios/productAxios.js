import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://toko-onlen-api.onrender.com/products";

const getData = async (cb) => {
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

const create = async (product) => {
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

export { getData, create };
