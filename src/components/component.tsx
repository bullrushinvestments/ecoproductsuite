import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface BusinessSpecProps {
  businessName: string;
  products: Product[];
}

const BusinessSpecification: React.FC<BusinessSpecProps> = ({ businessName, products }) => {
  const isDesktopOrMobile = useMediaQuery({ query: '(min-width:768px)' });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>('https://api.example.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products", err);
        setError("An error occurred while fetching products.");
        setLoading(false);
      });
  }, []);

  const [products, setProducts] = useState<Product[]>([]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{`Error: ${error}`}</div>;

  return (
    <section
      id="business-specification"
      className={clsx(
        'p-4',
        isDesktopOrMobile ? 'bg-gray-100' : 'bg-white'
      )}
    >
      <h2 className="text-xl font-bold mb-4">{businessName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            role="article"
            aria-label={`${product.name} product`}
            tabIndex={0}
            className="rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img src={product.image} alt={`Image of ${product.name}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <span className="block mt-1 text-xl font-bold">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface BusinessSpecProps {
  businessName: string;
  products: Product[];
}

const BusinessSpecification: React.FC<BusinessSpecProps> = ({ businessName, products }) => {
  const isDesktopOrMobile = useMediaQuery({ query: '(min-width:768px)' });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>('https://api.example.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products", err);
        setError("An error occurred while fetching products.");
        setLoading(false);
      });
  }, []);

  const [products, setProducts] = useState<Product[]>([]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{`Error: ${error}`}</div>;

  return (
    <section
      id="business-specification"
      className={clsx(
        'p-4',
        isDesktopOrMobile ? 'bg-gray-100' : 'bg-white'
      )}
    >
      <h2 className="text-xl font-bold mb-4">{businessName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            role="article"
            aria-label={`${product.name} product`}
            tabIndex={0}
            className="rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img src={product.image} alt={`Image of ${product.name}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <span className="block mt-1 text-xl font-bold">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSpecification;