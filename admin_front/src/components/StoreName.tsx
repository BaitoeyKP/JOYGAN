import React from 'react';

interface Store {
  name: string;
  code: string;
}

interface StoreNameProps {
  store: Store;
}

const StoreName: React.FC<StoreNameProps> = ({ store }) => {
  return (
    <h1 className="text-4xl">
      ร้าน
      <span className="text-5xl text-dark-purple-highlight">{store.name}</span>
      <span>({store.code})</span>
    </h1>
  );
};

export default StoreName;
