import React, { useState, useEffect } from "react";
import classes from './categoryAllChoose.module.css';
import commonClasses from '../../styles/Common.module.css';
import CategoryChoose from "../CategoryChoose/CategoryChoose";
import { useTheme } from "../../context";

export const CategoryAllChoose = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { theme } = useTheme();

    // const handleCategoryClick = (categoryId) => {
    //     window.location.href = `/categories/${categoryId}`;
    // };

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        
        const url_base='http://127.0.0.1:3333/'
        try {
            const response = await fetch(`${url_base}categories/${category.id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCategoryProducts(data.products);
        } catch (error) {
            console.error("Error fetching category products:", error);
        }
    };

    useEffect(() => {
        const url_base='http://127.0.0.1:3333/'

        const fetchCategories = async () => {
            try {
                const response = await fetch(url_base + 'categories/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className={`${classes.categoriesAll} ${theme === "dark" ? classes.darkTheme : ""}`}>
            <div className={commonClasses.container}>
                {categories.length > 0 ? (
                    <div className={classes.categoryList}>
                        {categories.map(category => (
                            <CategoryChoose
                            key={category.id}
                            id={category.id}
                            title={category.title}
                            image={category.image}
                            onClick={() => handleCategoryClick(category)}
                        />
                        ))}
                    </div>
                ) : ( 
                <p>Loading categories...</p>
                )}
            </div>
        </div>
    );
};

export default CategoryAllChoose;