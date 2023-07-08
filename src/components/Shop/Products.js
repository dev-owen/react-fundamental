import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6000,
    title: '테스트 아이템 1',
    description: '테스트 아이템 1 설명',
  },
  {
    id: 'p2',
    price: 5000,
    title: '테스트 아이템 2',
    description: '테스트 아이템 2 설명',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>좋아하는 제품 구매</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
