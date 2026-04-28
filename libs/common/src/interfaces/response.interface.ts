export interface UserProfileResponse {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface EventResponse {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  price: number;
  status: string;
  organizerId: string;
  createdAt: string;
  updatedAt: string;
}
