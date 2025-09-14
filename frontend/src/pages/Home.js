import React from 'react'
import Fslider from '../components/Fslider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import About from '../components/About'
import Subcategories from '../components/Subcategories'
import Subcategoriesp from '../components/Subcategoriesp'
import SubcategoriesI from '../components/SubcategoriesI'
import Subcategoriesc from '../components/Subcategoriesc'






function Home() {
  return (
    <div>
      <Fslider />
      <Categories />
      <About />
      <Subcategories />
      <Subcategoriesp />
      <Subcategoriesc/>
      <SubcategoriesI />
      <Footer />
    </div>
  )
}

export default Home