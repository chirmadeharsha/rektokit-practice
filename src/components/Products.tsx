import react, { useState, useEffect } from 'react';
import { addItems } from '../redux/features/cart/cartSlice'
import { useAppDispatch } from '../redux/hooks'

function Products() {

  const dispatch = useAppDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, [])

  const handleAdd = (product: any) => {
   console.log("hi harsha",product)
    dispatch(addItems(product));

  }

  return (
    <div className='productsWrapper'>

      {
        products.map((product: any) => (

          <div className='card' key={product.id}>
            <img src={product.image} alt="image not loaded" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
          </div>
        ))}
    </div>
  )
}

export default Products
