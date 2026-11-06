export interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  // Minimalist concise copy for mobile (1 short punchy line):
  mobileSummary: string;
  mobileHighlight: string;
  details: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  cardPosition: 'left' | 'right';
  carShiftXPercent: number; // percentage of viewport width to shift the car on desktop
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  duration: string;
  startingPrice: string;
  recommendedFor: string;
  badge?: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  duration: string;
  isPopular?: boolean;
  warranty: string;
  description: string;
  features: {
    name: string;
    included: boolean;
  }[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'curado' | 'mantenimiento' | 'garantias' | 'proceso';
}

export interface BookingFormData {
  serviceId: string;
  vehicleType: 'sedan' | 'suv' | 'sports' | 'coupe';
  carModel: string;
  carYear: string;
  preferredDate: string;
  preferredTime: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
