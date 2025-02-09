import { Professional } from '../types';

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    profession: 'cook',
    rating: 4.8,
    reviews: 127,
    hourlyRate: 300,
    description: 'Expert chef specializing in North Indian, South Indian, and Continental cuisine. 8+ years of experience in premium catering and home cooking.',
    imageUrl: 'https://media.self.com/photos/57d8a54324fe9dae32831ef3/master/pass/healthy-cooking-8701.jpg',
    availability: true,
    phone: '+91 98765 43210',
    address: {
      street: '42, Krishna Colony',
      area: 'Koramangala',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560034'
    },
    certificates: [
      {
        id: 'cert1',
        name: 'Advanced Culinary Arts',
        issuedBy: 'Institute of Hotel Management',
        verifiedBy: 'EduEquity',
        issueDate: '2020-03-15',
      },
      {
        id: 'cert2',
        name: 'Food Safety and Hygiene',
        issuedBy: 'FSSAI',
        verifiedBy: 'EduEquity',
        issueDate: '2022-01-10',
        expiryDate: '2025-01-10'
      }
    ],
    availableTimeSlots: [
      {
        day: 'Monday',
        slots: ['09:00', '10:00', '11:00', '14:00', '15:00']
      },
      {
        day: 'Tuesday',
        slots: ['09:00', '10:00', '11:00', '14:00', '15:00']
      }
    ]
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    profession: 'tailor',
    rating: 4.9,
    reviews: 89,
    hourlyRate: 250,
    description: 'Master tailor with 15 years of experience. Specializing in traditional Indian wear, western formal wear, and alterations.',
    imageUrl: 'https://media.istockphoto.com/id/904390664/photo/guy-snipper-in-modern-workshop.jpg?s=612x612&w=0&k=20&c=jq8UeiPuz6eGNaD67K-5VVYl1bx3Fl0p_y4Tog0789c=',
    availability: true,
    phone: '+91 98765 43211',
    address: {
      street: '15, Textile Market',
      area: 'Lajpat Nagar',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110024'
    },
    certificates: [
      {
        id: 'cert3',
        name: 'Advanced Pattern Making and Garment Construction',
        issuedBy: 'National Institute of Fashion Technology',
        verifiedBy: 'EduEquity',
        issueDate: '2019-06-20'
      }
    ],
    availableTimeSlots: [
      {
        day: 'Monday',
        slots: ['10:00', '11:00', '12:00', '16:00', '17:00']
      },
      {
        day: 'Wednesday',
        slots: ['10:00', '11:00', '12:00', '16:00', '17:00']
      }
    ]
  },
  {
    id: '3',
    name: 'Anjali Desai',
    profession: 'artist',
    rating: 4.7,
    reviews: 156,
    hourlyRate: 0,
    description: 'Professional artist specializing in traditional Indian art forms, modern paintings, and art education.',
    imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=384',
    availability: true,
    phone: '+91 98765 43212',
    address: {
      street: '7, Artist Colony',
      area: 'Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050'
    },
    certificates: [
      {
        id: 'cert4',
        name: 'Master of Fine Arts',
        issuedBy: 'Sir J.J. School of Art',
        verifiedBy: 'EduEquity',
        issueDate: '2018-05-15'
      },
      {
        id: 'cert5',
        name: 'Digital Art and Design',
        issuedBy: 'National Institute of Design',
        verifiedBy: 'EduEquity',
        issueDate: '2021-08-10'
      }
    ],
    availableTimeSlots: [
      {
        day: 'Tuesday',
        slots: ['11:00', '12:00', '15:00', '16:00', '17:00']
      },
      {
        day: 'Thursday',
        slots: ['11:00', '12:00', '15:00', '16:00', '17:00']
      }
    ]
  }
];