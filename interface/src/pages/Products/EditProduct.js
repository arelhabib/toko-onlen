import React, { useEffect, useState } from "react";
import { editProduct, getProductId } from "../../axios/productAxios";
import { getCategories } from '../../axios/categoryAxios'
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const EditProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    categoryId: null
  });

  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigation = useNavigate();
  const params = useParams();

  const getProductInfo = () => {
    const { id } = params;
    getProductId(+id, (result) => {
      setForm({
        name: result.name,
        price: result.price,
        stock: result.stock,
        description: result.description,
        categoryId: result.categoryId
      });
      setImage({ image: result.image })
    });
  };

  useEffect(() => {
    getCategories((result) => setCategories(result));
    getProductInfo();
  }, []);


  const submitHandler = () => {
    const { id } = params;
    const formData = new FormData();
    if (image !== null) {
      formData.append('image', image);
    }
    if (form.categoryId !== null) {
      formData.append('categoryId', form.categoryId)
    }
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.description);
    editProduct(id, formData)
    navigation("/products");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row ">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-center py-3 mb-5">
              <h2 className="fw-bold">Edit Form</h2>
              <small>Product</small>
            </div>

            <div className="col-6 offset-md-3 bg-white shadow-sm rounded-4">
              <div className="mb-3 mx-5 pt-3">
                <label className="mb-2 fw-bold">Name </label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>

              <div class="mb-3 mx-5">
                <label for="formFile " class="form-label mb-2 fw-bold">
                  Image
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} class="form-control" type="file" id="formFile"></input>
              </div>

              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Price </label>
                <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} type="number" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Stock </label>
                <input value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} type="number" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Description </label>
                <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Category </label>
                <select className="form-select" onChange={(e) => setForm({ ...form, categoryId: e.target.value })} value={form.categoryId}>
                  <option disabled selected hidden value="">Pilih opsi</option>
                  {
                    categories.length > 0 ? (
                      categories.map((category) => {
                        return <option key={category.id} value={category.id}>{category.name}</option>
                      })
                    ) : (<></>)
                  }
                </select>
              </div>
              <div className="col mx-5 py-3">
                <button onClick={() => submitHandler()} className="btn btn-block btn-primary w-100">
                  {" "}
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
