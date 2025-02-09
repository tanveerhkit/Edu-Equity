export interface Certificate {
  id: string;
  name: string;
  issuedBy: string;
  verifiedBy: 'EduEquity';
  issueDate: string;
  expiryDate?: string;
}

export interface Professional {
  id: string;
  name: string;
  profession: 'cook' | 'tailor' | 'artist';
  rating: number;
  reviews: number;
  hourlyRate: number;
  description: string;
  imageUrl: string;
  availability: boolean;
  phone: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
  };
  certificates: Certificate[];
  availableTimeSlots: {
    day: string;
    slots: string[];
  }[];
}