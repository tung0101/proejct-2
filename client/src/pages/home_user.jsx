import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import Slideshow from "../components/slideshow/slideshow";
import About from "../components/abouts/about";
import Futured from "../components/Categories";
import Service from "../components/services/service";
import Why from "../components/why_choose";
import Danhgia from "../components/danhgia";
import Doingu from "../components/doingu";
import Related_Blogs from "../components/blog/Related_Blogs";
const Home = () => {
  return (
    <div>
      <Header />
      <Slideshow />
      <About />
      <Futured />
      <Service />
      <Why />
      <Doingu />
      <Danhgia />
      <Related_Blogs />
      <Footer />
    </div>
  );
};

export default Home;
