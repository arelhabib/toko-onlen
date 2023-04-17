import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { loginUser } from "../axios/userAxios";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await loginUser(form, (result) => {
        setLoginStatus(result);
      });

      window.location.reload();
    } catch (error) {}
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    setLoginStatus(false);
    setIsAdmin(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("access_token");
    if (token) {
      let decoded = jwt_decode(token);
      if (decoded.roleId === 1) {
        setIsAdmin(true);
      }
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  // console.log(isAdmin);

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Fashion Pria
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Fashion Wanita
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Fashion Anak
                </Link>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto brand-logo">
              {loginStatus ? (
                <>
                  <Link className="nav-link" onClick={logoutHandler}>
                    <FiUser className="fs-5 mb-1"></FiUser> Logout
                  </Link>
                </>
              ) : (
                <Link type="button" className="nav-link hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FiUser className="fs-5 mb-1"></FiUser> Login / Register
                </Link>
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
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
      <div className="jumbotron py-5">
        <div className="container ">
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

      {/* Fashion Pria */}
      <div className="container mb-5">
        <div className="row">
          <div className="mb-4">
            <div className="row justify-content-between">
              <div className="col fs-4 fw-bold ms-2 mb-3">Fashion Pria</div>
              <div className="col text-end">
                <Link to="#" className="me-2 mb-3 text-dark icon-link-hover">
                  <p className="fw-semibold d-inline text-end w-50 hover">lihat semua</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/4/8/f681a64a-ae35-4698-8828-628da0bc5516.jpg"
                className="card-img-top w-100"
                title="Casella Baju Koko Pria Lengan Pendek Exclusive Premium Quality HV - 4931 Mocca Grey, S"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Casella Baju Koko Pria Lengan Pendek Exclusive Premium Quality HV - 4931 Mocca Grey, S</p>
                <p className="card-text fw-bold">RP.149.950</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/25/f7d8918a-a4d0-4068-8a35-cc41d6d4835f.jpg"
                className="card-img-top w-100"
                title="Koko Batik - Baju Koko pria - fashion muslim pria-koko batik kombinasi - koko kode E, M"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Koko Batik - Baju Koko pria - fashion muslim pria-koko batik kombinasi - koko kode E, M</p>
                <p className="card-text fw-bold">RP.33.500</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/15/46422a08-83d9-41fa-a53e-51080d84add0.jpg" className="card-img-top w-100" title="peci rajut yaman polos fashion muslim pria - Cokelat" alt="..." />
              <div className="card-body">
                <p className="card-title text-container">peci rajut yaman polos fashion muslim pria - Cokelat</p>
                <p className="card-text fw-bold">RP.22.400</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/22/60224832-d12f-47b6-9cd9-978a0322a46c.jpg"
                className="card-img-top w-100"
                title="Celana SIRWAL Pria/ fashion muslim/ Pakaian muslim import Quality - Abu-abu, M"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Celana SIRWAL Pria/ fashion muslim/ Pakaian muslim import Quality - Abu-abu, M</p>
                <p className="card-text fw-bold">RP.189.900</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/4/15/9f946c03-09a9-4c80-9e31-a0a66d8c54a9.jpg"
                className="card-img-top w-100"
                title="Sarung Celana Fashion Pria Muslim Trendy Terbaru Sarung Kain Busana"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Sarung Celana Fashion Pria Muslim Trendy Terbaru Sarung Kain Busana</p>
                <p className="card-text fw-bold">RP.158.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/25/105430281/105430281_78065baa-e582-4fb2-be43-86d1b344815e_700_700"
                className="card-img-top w-100"
                title="ABBASY LINEN RAMI Baju Koko Kemeja Kurta Pakistan Fashion Muslim Pria - Maroon, L"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">ABBASY LINEN RAMI Baju Koko Kemeja Kurta Pakistan Fashion Muslim Pria - Maroon, L</p>
                <p className="card-text fw-bold">RP.115.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion Wanita */}
      <div className="container mb-5">
        <div className="row">
          <div className="row justify-content-between">
            <div className="col fs-4 fw-bold ms-2 mb-3">Fashion Perempuan</div>
            <div className="col text-end">
              <Link to="#" className="me-2 mb-3 text-dark icon-link-hover">
                <p className="fw-semibold d-inline text-end w-50 hover">lihat semua</p>
              </Link>
            </div>
          </div>

          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/12/30/d37b1733-26f1-4a67-b551-a132f3076f31.jpg"
                className="card-img-top w-100"
                title="Seena - GAMIS SAKHILA Baju Gamis Bahan Katun Shakila Fashion Wanita Mo - Lilac, AllSizeLD112"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Seena - GAMIS SAKHILA Baju Gamis Bahan Katun Shakila Fashion Wanita Mo - Lilac, AllSizeLD112</p>
                <p className="card-text fw-bold">RP.117.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/16/97ce9407-0056-4bd0-b90f-ae85718da1b7.png"
                className="card-img-top w-100"
                title="Tunik atasan wanita tunic jumbo fashion muslim murah - Khaki"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">KTunik atasan wanita tunic jumbo fashion muslim murah - Khaki</p>
                <p className="card-text fw-bold">RP.99.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/15/46422a08-83d9-41fa-a53e-51080d84add0.jpg" className="card-img-top w-100" title="peci rajut yaman polos fashion muslim pria - Cokelat" alt="..." />
              <div className="card-body">
                <p className="card-title text-container">peci rajut yaman polos fashion muslim pria - Cokelat</p>
                <p className="card-text fw-bold">RP.22.400</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/12/22/74de4d61-a139-495e-a0ce-940257b74682.jpg"
                className="card-img-top w-100"
                title="GAMIS JERSEY BORDIR DRESS MUSLIM MAXI, FASHION MUSLIM WANITA, MUSLIM - MARUN, XL"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">GAMIS JERSEY BORDIR DRESS MUSLIM MAXI, FASHION MUSLIM WANITA, MUSLIM - MARUN, XL</p>
                <p className="card-text fw-bold">RP.100.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/16/7706cba5-5a5e-4849-a4f0-ecfe5d4fcc24.jpg"
                title="Atasan Wanita Lengan Panjang Blouse Fashion Muslim Jumbo Big Size S M - Kuning, S"
                className="card-img-top w-100"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">Atasan Wanita Lengan Panjang Blouse Fashion Muslim Jumbo Big Size S M - Kuning, S</p>
                <p className="card-text fw-bold">RP.158.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 shadow-sm border-0">
              <img
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/15/1e3fdbc9-685d-48a2-8cd9-56af7d7b6f3e.jpg"
                className="card-img-top w-100"
                title="COD benecia dress FASHION BAJU GAMIS DRESS MAXI SETELAN MUSLIM WANITA"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-container">COD benecia dress FASHION BAJU GAMIS DRESS MAXI SETELAN MUSLIM WANITA</p>
                <p className="card-text fw-bold">RP.170.000</p>
                <Link to="#" className="btn btn-outline-success w-100 rounded-4 fw-semibold">
                  +Keranjang
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              <Link className="navbar-brand brand-logo fs-4 fw-semibold" to="/">
                About Us
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-4 fw-semibold" to="/">
                Service
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-4 fw-semibold" to="/">
                Department
              </Link>
            </div>
            <div className="col-2">
              <Link className="navbar-brand brand-logo fs-4 fw-semibold" to="/">
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
