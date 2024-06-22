// src/types/calendar.ts

export interface Customer {
  zip: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  id: string;
  state: string | null;
  email: string;
}

export interface Vendor {
  zip: string | null;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  city: string | null;
  streetAddress: string | null;
  id: string;
  state: string | null;
  vendorName: string;
}

export interface Action {
  arrivalEndWindow?: string;
  price: number;
  vendor: Vendor;
  name: string;
  scheduledDate: string;
  id: string;
  arrivalStartWindow?: string;
  status: string;
}

export interface CalendarMonth {
  month: number;
  actions: Action[];
  year: number;
}

export interface CalendarData {
  created: string;
  customer: Customer;
  deleted: boolean;
  calendar: CalendarMonth[];
  id: string;
  status: string;
}
