import React from 'react';
import { Link, useParams } from 'react-router-dom';


export default function ProductDetailPage() {

    const params = useParams()
    const productId = params.productId


  return (
    <>
      <h1>All about {productId.toLocaleUpperCase()}</h1>   
      <p><Link to=".." relative='path'>Back to Products</Link></p>
    </>
  );
}
