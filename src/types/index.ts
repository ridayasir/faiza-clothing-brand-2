export type Currency = 'PKR' | 'GBP' | 'USD' | 'AED';

export interface Product {
  id: string;
  name: string;
  category: 'Bridal Couture' | 'Festive Formals' | 'Luxury Prêt' | 'Winter Formal' | 'Festive Lawn';
  bazaarOrigin: 'Anarkali Bazaar' | 'Liberty & Gulberg' | 'M.M. Alam Suite';
  fabric: string;
  craft: 'Zardozi & Dabka' | 'Gota Patti Work' | 'Tilla Weaving' | 'Pure Silk Lawn' | 'Marori & Kasab';
  pricePKR: number;
  image: string;
  alt: string;
  badge: string;
  badgeColor?: string;
  description: string;
  details: string[];
  karigariHours: number;
  karigarsCount: number;
  colors: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'Custom Measurement')[];
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
  customMeasurements?: {
    bust?: string;
    waist?: string;
    hips?: string;
    choliLength?: string;
    lehengaLength?: string;
    notes?: string;
  };
}

export interface AtelierLocation {
  id: string;
  name: string;
  city: string;
  tagline: string;
  address: string;
  hours: string;
  phone: string;
  type: string;
}

export interface CraftStory {
  id: string;
  number: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  materials: string;
  history: string;
  originArea: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  type: 'Gulberg Flagship Trial' | 'M.M. Alam Private Salon' | 'Kensington London Salon' | 'Virtual 4K Video Fitting';
  weddingDate: string;
  appointmentDate: string;
  appointmentTime: string;
  interestedEnsembles: string[];
  notes?: string;
  status: 'Confirmed' | 'Pending Review';
}

export interface OrderTrack {
  orderId: string;
  productName: string;
  productImage: string;
  orderDate: string;
  deliveryEstimate: string;
  karigarName: string;
  status: 'Fabric Dyeing' | 'Adda Framing' | 'Hand Embroidery' | 'Masterji Tailoring' | 'DHL Dispatch';
  currentHours: number;
  totalHours: number;
  destination: string;
}
