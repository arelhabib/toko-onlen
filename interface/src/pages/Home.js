import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import jwt_decode from "jwt-decode";
import { loginUser } from "../axios/userAxios";
import { getProduct } from "../axios/productAxios";
import { getCategories } from "../axios/categoryAxios";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await loginUser(form, (result) => {
        setLoginStatus(result)
      })
    } catch (error) {
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('access_token')
    setLoginStatus(false)
    setIsAdmin(false)
    window.location.reload()
  }

  const categoryFilter = category.filter((category) => {
    return product.some((product) => product.categoryId === category.id)
  })

  const otherCategory = product.filter((product) => {
    return product.category === null
  })

  useEffect(() => {
    getProduct((result) => setProduct(result));
    getCategories((result) => setCategory(result));
    let token = localStorage.getItem("access_token");
    if (token) {
      let decoded = jwt_decode(token);
      if (decoded.roleId === 1) {
        setIsAdmin(true)
      }
      setLoginStatus(true)
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-warning bg-light">
        <div className="container">
          <Link className="navbar-brand brand-logo fs-4 fw-bold" to="/">
            MeShop
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto brand-logo">
              {loginStatus ? (
                <>
                  <Link className="nav-link" onClick={logoutHandler}>
                    <FiUser className="fs-5 mb-1"></FiUser> Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link type="button" className="nav-link hover" to={'/register'}>
                    <FiUserPlus className="fs-5 mb-1"></FiUserPlus> Register
                  </Link>
                  <Link type="button" className="nav-link hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FiUser className="fs-5 mb-1"></FiUser> Login
                  </Link>
                </>
              )}
              {isAdmin ? (
                <Link className="nav-link" to="/dashboard">
                  <MdOutlineDashboardCustomize className="fs-5 mb-1"></MdOutlineDashboardCustomize> Dashboard Menu
                </Link>
              ) : (
                <Link className="nav-link" to="/items">
                  <FiShoppingCart className="fs-5 mb-1"></FiShoppingCart> Cart
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Login */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered w-75 ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mx-3 ">
              <form onSubmit={loginSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus required />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-success w-25">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
      <div className="jumbotron py-5">
        <div className="container pt-4">
          <div className="w-50">
            <h1 className="display-4 fw-semibold">Ramadhan Style!</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam nostrum. Sequi vero iusto ex eaque! Deleniti debitis, laboriosam doloremque officia vel aliquid velit consectetur.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Link className="btn btn-success btn-lg" to="#" role="button">
                Shop Now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container my-5">
        <div className="row">
          <h4 className="mb-4 fw-bold">Shop Our Top Categories</h4>
          <div className="col-auto d-inline p-2 ">
            <div className="card man rounded-3 shadow-sm border-0">
              <div className="card-body text-center">
                <img src="https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9_tn" alt="..." />
                <p className="card-title text-secondary-emphasis ">Fashion Pria</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-inline p-2">
            <div className="card man rounded-3 shadow-sm border-0">
              <div className="card-body text-center">
                <img src="https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a_tn" alt="..." />
                <p className="card-title text-secondary-emphasis">Fashion Wanita</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-inline p-2">
            <div className="card man rounded-3 shadow-sm border-0">
              <div className="card-body text-center">
                <img src="https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29_tn" alt="..." />
                <p className="card-title text-secondary-emphasis">Fashion Muslim</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-inline p-2">
            <div className="card man rounded-3 shadow-sm border-0">
              <div className="card-body text-center ">
                <img src="https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c_tn" alt="..." />
                <p className="card-title text-secondary-emphasis ">Fashion Anak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        {categoryFilter.map(category => (
          <div className="row mb-4" key={category.id}>
            <div className="mb-4">
              <div className="row justify-content-between">
                <div className="col fs-4 fw-bold ms-2 mb-3">{category.name}</div>
                <div className="col text-end">
                  <Link to="#" className="me-2 mb-3 text-dark icon-link-hover">
                    <p className="fw-semibold d-inline text-end w-50 hover">lihat semua</p>
                  </Link>
                </div>
              </div>
            </div>
            {product.map(product => {
              if (product.categoryId === category.id) {
                let imageBase64 = null;
                try {
                  imageBase64 = btoa(String.fromCharCode(...new Uint8Array(product.imageData.data)));
                } catch (error) { }
                return (
                  <div className="col-2" key={product.id}>
                    <div className="card w-100 shadow-sm border-0">
                      <img
                        src={product.imageData ? "data:image/png;base64," + imageBase64 : "https://via.placeholder.com/200"}
                        className="card-img-top w-100"
                        title={product.name}
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-title text-container">{product.name}</p>
                        <p className="card-text fw-bold">Rp. {product.price.toLocaleString('id')}</p>
                        <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                          +Keranjang
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              else {
                return null;
              }
            })}
          </div>
        ))}

        {
          otherCategory.length > 0 ?
            (
              <div className="row">
                <div className="mb-4">
                  <div className="row justify-content-between">
                    <div className="col fs-4 fw-bold ms-2 mb-3">Other</div>
                    <div className="col text-end">
                      <Link to="#" className="me-2 mb-3 text-dark icon-link-hover">
                        <p className="fw-semibold d-inline text-end w-50 hover">lihat semua</p>
                      </Link>
                    </div>
                  </div>
                </div>
                {otherCategory.map(product => {
                  let imageBase64 = null;
                  try {
                    imageBase64 = btoa(String.fromCharCode(...new Uint8Array(product.imageData.data)));
                  } catch (error) { }
                  return (
                    <div className="col-2" key={product.id}>
                      <div className="card w-100 shadow-sm border-0">
                        <img
                          src={product.imageData ? "data:image/png;base64," + imageBase64 : "https://via.placeholder.com/200"}
                          className="card-img-top w-100"
                          title={product.name}
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-title text-container">{product.name}</p>
                          <p className="card-text fw-bold">RP. {product.price}</p>
                          <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                            +Keranjang
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
            : (<></>)
        }
      </div>
      <div className="py-4"></div>

      {/* footer */}
      <div className="footer  bg-light mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link className="navbar-brand brand-logo fs-4 fw-semibold" to="/">
                MeShop
              </Link>
              <p className="py-2">APL Tower 30th Floor, Jl. Letjen S. Parman Kav. 28 Jakarta, 11470, Indonesia</p>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-5 fw-semibold opacity-75" to="/">
                Link Terkait
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-5 fw-semibold opacity-75" to="/">
                Layanan
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-5 fw-semibold opacity-75" to="/">
                Department
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-5 fw-semibold opacity-75" to="/">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
