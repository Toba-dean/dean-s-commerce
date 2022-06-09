import React from 'react';
import { Announcement } from '../../components/announcement/announcement.component';
import Category from '../../components/category/category.component';
import { Footer } from '../../components/footer/footer.component';
import NavBar from '../../components/navbar/navbar.component';
import { NewsLetter } from '../../components/newsletter/newsletter.component';
import { Products } from '../../components/products/products.component';
import Slider from '../../components/slider/slider.component';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default HomePage
