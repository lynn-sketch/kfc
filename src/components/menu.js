import React, { useState } from 'react';
import './menu.css'; // Import the CSS file
const KFCMenu = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, category: 'Chicken', name: 'Original Recipe Chicken', price: 5.79, image: '/images/Biscuits.png' },
        { id: 2, category: 'Chicken', name: 'Extra Crispy Chicken', price: 6.99, image: '/images/Bucket_ExtraCrispy_Laying.png' },
        { id: 3, category: 'Chicken', name: 'Spicy Fried Chicken', price: 7.49, image: '/images/Fries.png' },
        { id: 4, category: 'Chicken', name: 'Grilled Chicken', price: 8.99, image: '/images/HotWings.png' },
        { id: 5, category: 'chicken', name: 'Mashed Potatoes', price: 2.99, image: '/images/Box_2pcFeed.png' },
        { id: 6, category: 'Sidedishes', name: 'Cole Slaw', price: 1.99, image: '/images/sidedish3.jpg' },
        { id: 7, category: 'Sidedishes', name: 'Biscuits', price: 1.49, image: '/images/sidedish2.jpg' },
        { id: 8, category: 'Beverages', name: 'Soft Drink', price: 1.29, image: '/images/drink3.jpg' },
        { id: 9, category: 'Beverages', name: 'Iced Tea', price: 1.49, image: '/images/drink2.jpg' },
        { id: 10, category: 'Chicken', name: 'Nashville Hot Chicken', price: 9.99, image: '/images/HotWings.png' },
        { id: 11, category: 'Chicken', name: 'Honey BBQ Wings', price: 6.49, image: '/images/BigBox_Zinger.png' },
        { id: 12, category: 'Sidedishes', name: 'Corn on the Cob', price: 2.49, image: '/images/sidedish1.jpg' },
        { id: 13, category: 'Sidedishes', name: 'Mac and Cheese', price: 3.49, image: '/images/sidedish5.jpg' },
        { id: 14, category: 'Beverages', name: 'Lemonade', price: 1.99, image: '/images/drink1.jpg' },
        { id: 15, category: 'Desserts', name: 'Chocolate Cake', price: 4.99, image: 'public/images/desert3.jpg' },
        { id: 16, category: 'Chicken', name: 'Crispy Fried Chicken', price: 7.99, image: '/images/Bucket_COB.png' },
        { id: 17, category: 'Chicken', name: 'BBQ Chicken Tenders', price: 8.49, image: '/images/sidedish5.jpg' },
        { id: 18, category: 'Sidedishes', name: 'Loaded Fries', price: 4.99, image: '/images/desert5.jpg' },
        { id: 19, category: 'Sidedishes', name: 'Onion Rings', price: 3.99, image: '/images/desert3.jpg' },
        { id: 20, category: 'Beverages', name: 'Mango Smoothie', price: 2.99, image: '/images/desert5.jpg' },
        { id: 21, category: 'Beverages', name: 'Peach Iced Tea', price: 1.99, image: '/images/drink1.jpg' },
        { id: 22, category: 'Desserts', name: 'Vanilla Ice Cream', price: 3.49, image: '/images/desert 1.jpg' },
        { id: 23, category: 'Desserts', name: 'Strawberry Cheesecake', price: 5.49, image: '/images/desert2.jpg' },
        { id: 24, category: 'Sidedishes', name: 'Loaded Fries', price: 4.99, image: '/images/desert5.jpg' },
        { id: 25, category: 'Sidedishes', name: 'Mac and Cheese', price: 3.49, image: '/images/sidedish5.jpg' },
        { id: 7, category: 'Sidedishes', name: 'Biscuits', price: 1.49, image: '/images/sidedish2.jpg' },
        { id: 19, category: 'Sidedishes', name: 'Onion Rings', price: 3.99, image: '/images/desert3.jpg' },
        { id: 8, category: 'Beverages', name: 'Soft Drink', price: 1.29, image: '/images/drink3.jpg' },
        { id: 9, category: 'Beverages', name: 'Iced Tea', price: 1.49, image: '/images/drink2.jpg' },
        { id: 9, category: 'Beverages', name: 'Iced Tea', price: 1.49, image: '/images/drinks21.jpg' },
        { id: 9, category: 'Beverages', name: 'Iced Tea', price: 1.49, image: '/images/drinks24.jpg' },
        { id: 9, category: 'Beverages', name: 'Iced Tea', price: 1.49, image: '/images/drinks22.jpg' },
        { id: 23, category: 'Desserts', name: 'Strawberry Cheesecake', price: 5.49, image: '/images/desert3.jpg' },
        { id: 23, category: 'Desserts', name: 'Strawberry Cheesecake', price: 5.49, image: '/images/desert5.jpg' },
        { id: 23, category: 'Desserts', name: 'Strawberry Cheesecake', price: 5.49, image: '/images/desert2.jpg' },
        { id: 23, category: 'Desserts', name: 'Strawberry Cheesecake', price: 5.49, image: '/images/desert3.jpg' },
    ]);


    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    // Add category images
    const categoryImages = {

    };

    return (
        <div className="container" style={{ backgroundColor: 'white', color: 'white' }}>
            {/* Big Rectangle with Picture */}
            <div style={{ background: 'url("/images/BigBox_Zinger.png") center ', backgroundSize: 'cover', height: '800px', textAlign: 'center' }}>

                {/* This div will contain your image above the "KFC Menu" heading */}
            </div>


            <h1>KFC Menu</h1>

            {/* Category Images */}
            <div className="category-images">
                {Object.entries(categoryImages).map(([category, image]) => (
                    <div key={category} className="category-image">
                        <img src={image} alt={category} />
                        <p>{category}</p>
                    </div>
                ))}
            </div>

            {/* Chicken Menu */}
            <div id='menu' className="menu-section">
                <h2>Chicken</h2>
                <ul>
                    {menuItems
                        .filter((item) => item.category === 'Chicken')
                        .map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </li>
                        ))}
                </ul>
            </div>

            {/* Sides Menu */}
            <div className="menu-section">
                <h2>Sidedishes</h2>
                <ul>
                    {menuItems
                        .filter((item) => item.category === 'Sidedishes')
                        .map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </li>
                        ))}
                </ul>
            </div>

            {/* Beverages Menu */}
            <div className="menu-section">
                <h2>Beverages</h2>
                <ul>
                    {menuItems
                        .filter((item) => item.category === 'Beverages')
                        .map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </li>
                        ))}
                </ul>
            </div>

            {/* Desserts Menu */}
            <div className="menu-section">
                <h2>Desserts</h2>
                <ul>
                    {menuItems
                        .filter((item) => item.category === 'Desserts')
                        .map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </li>
                        ))}
                </ul>
            </div>

            {/* Shopping Cart */}
            <div id='cart' className="shopping-cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>

                {/* Total */}
                <p>Total: ${calculateTotal()}</p>

            </div>
        </div>
    );
};

export default KFCMenu;