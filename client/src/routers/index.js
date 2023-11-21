import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Home from "../pages/home_user";
import About from "../pages/about_user";
import Contact from "../pages/contact_user";
import Blog from "../pages/blog_user";
import Login from "../pages/login_user";
import Signup from "../pages/signup_user";
import Blogdetail from "../pages/blog_detail_user";
import Services from "../pages/services_user";
import ListUser from '../pages/Admin/ListUser';
import DashBoard from '../pages/Admin/DashBoard';
import ListBlog from '../pages/Admin/ListBlog';
import AddBlog from '../pages/Admin/AddBlog';
import ListAppointment from '../pages/Admin/ListAppointment';
import ListService from '../pages/Admin/ListService';
import ListComment from '../pages/Admin/ListComment';
import AddService from '../pages/Admin/AddService';
import Thongke from "../pages/Admin/Thongke";
import UpdateBlog from "../pages/Admin/UpdateBlog";
import EditService from "../pages/Admin/EditService";
import Category from "../pages/Admin/Category";
import AddCategory from "../pages/Admin/AddCategory";
import UpdateCategory from "../pages/Admin/UpdateCategory";
import UpdateUser from "../pages/Admin/UpdateUser";
import Product from "../pages/Admin/Product";
import AddProduct from "../pages/Admin/AddProduct";
import UpdateProduct from "../pages/Admin/UpdateProduct";
import ListOrder from "../pages/Admin/ListOrder";
import { AuthProvider  } from "../components/Login/AuthContext";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <AuthProvider>
   <Router>
      <ScrollToTop />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/services/:id" component={Services} />
      <Route path="/blog_detail/:id" component={Blogdetail} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path='/admin' component={DashBoard}/>
      <Route path='/thongke' component={Thongke}/>
      <Route path='/listuser'component={ListUser}/>
      <Route path='/updateuser/:idUser'component={UpdateUser}/>
      <Route path='/listblog' component={ListBlog}/>
      <Route path='/addblog' component={AddBlog}/>
      <Route path='/updateblog/:idBaiViet' component={UpdateBlog}/>
      <Route path='/listservice' component={ListService}/>
      <Route path='/addservice' component={AddService}/>
      <Route path='/editservice/:idDichVu' component={EditService}/>
      <Route path='/listappointment' component={ListAppointment}/>
      <Route path='/listorder' component={ListOrder}/>
      <Route path='/listcomment'component={ListComment}/>
      <Route path='/category'component={Category}/>
      <Route path='/addcategory'component={AddCategory}/>
      <Route path='/updatecategory/:idLoaiSanPham'component={UpdateCategory}/>
      <Route path='/product'component={Product}/>
      <Route path='/addproduct' component={AddProduct}/>
      <Route path='/updateproduct/:idSanPham'component={UpdateProduct}/>
    </Router>
    </AuthProvider>

  );
};

export default AppRouter;