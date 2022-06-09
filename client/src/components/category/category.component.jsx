import React from 'react'
import styled from "styled-components";
import{ connect } from 'react-redux'
import { SelectCategories } from '../../redux/category/category.selector'
import { createStructuredSelector } from 'reselect'

import { CategoryItems } from '../categoryitems/categoryitems.component';
import { mobile } from '../../responsiveness/responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })};
`;

const Category = ({ categories }) => { 
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: SelectCategories
})

export default connect(mapStateToProps)(Category)
