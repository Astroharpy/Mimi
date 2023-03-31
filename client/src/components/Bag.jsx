import useProduct from '../hooks/useProduct'

const Bag = () => {
  const {bag} = useProduct();



  return (
    <div>
        <table className="table-fixed w-full text-center border-collapse">
  <thead>
    <tr>
      <th>Items</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
 
  <tbody>
    {bag.length > 0 ? bag.map(item => <tr key={item.name}><td><p>{item.name}</p></td><td><p>{item.price}</p></td><td><p>{item.quantity}</p></td><td>{item.price*item.quantity}</td></tr>)  : null}
  </tbody>
  
</table>
{bag.length > 0 ? null :
<p className='text-center'>No items on Bag</p>
}

    </div>
  )
}

export default Bag
