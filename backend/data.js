import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'western',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'RTX 3090 graphics card',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'geforce',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'RTX 2060 graphics card',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'geforce',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'RTX 2080 graphics card',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'geforce',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: '500 GB SSD',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'WESTERN DIGITAL',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: '240 GB SSD',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'WESTERN DIGITAL',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: '250 GB SSD',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'WESTERN DIGITAL',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
