export interface Store {
    id: string;
    name: string;
    userId: string;
    apiUrl: string;
    username: string;
    homeBillboardId: string;
  }
  
  export interface Product {
    id: string;
    category: Category;
    description: string;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
  }
  
  export interface Image {
    id: string;
    url: string;
    alt: string;
  }
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
  }
  
  export interface Size {
    id: string;
    name: string;
    value: string;
  }
  
  export interface Color {
    id: string;
    name: string;
    value: string;
  }

export interface Customer {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  shippingAddress: string;
}

export interface ShippingAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

