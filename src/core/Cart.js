import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <h2>
        Your cart is empty <br />
        <br /> <Link to='/shop'>Continue Shopping</Link>
      </h2>
    );
  };

  return (
    <Layout
      title='Shopphing Cart'
      description='Manage your Cart Items'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-6'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className='col-6'>
          <h2 className='mb-4'>Your Cart Summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
