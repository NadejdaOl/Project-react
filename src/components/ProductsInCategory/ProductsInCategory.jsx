import React,{ useState, useEffect }  from 'react';
import classes from './productsInCategory.module.css';
import { useTheme } from "../../context";

const ProductsInCategory = ({ categoryId }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const url_base = "http://127.0.0.1:3333/";
      try {
        const response = await fetch(`${url_base}categories/${categoryId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategoryProducts(data.products);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    if (categoryId) {
      fetchCategoryProducts();
    }
  }, [categoryId]);

  return (
    <div className={`${classes.productsInCategory} ${theme === "dark" ? classes.darkTheme : ""}`}>
      <h2>Products in Category</h2>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsInCategory;
