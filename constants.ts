import { Hammer, Lightbulb, PenTool, Tv, Wrench, ShieldCheck, Clock, Award } from 'lucide-react';
import { NavItem, ServiceItem, PortfolioItem, StatItem, FeatureItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const COMPANY_INFO = {
  name: 'Hemkunt Signage',
  tagline: 'Where traditional craftsmanship meets modern reliability.',
  est: 1982,
  phone: '+91 98110-88083',
  email: 'hemkuntsignage@gmail.com',
  address: '27/4, Nirankari Colony, Delhi – 110009',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Outdoor 3D Signs',
    description: 'Striking, durable outdoor signage designed to withstand elements while catching eyes.',
    icon: Hammer,
  },
  {
    id: 2,
    title: 'Stainless Steel Signage',
    description: 'Premium, corrosion-resistant steel finishes for a luxurious corporate identity.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Neon Signboards',
    description: 'High-visibility illumination with classic glass or modern flex neon technologies.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'LED Video Walls',
    description: 'Dynamic digital displays and LED sideboards for modern advertising.',
    icon: Tv,
  },
  {
    id: 5,
    title: '3D Name Plates',
    description: 'Personalized, precision-crafted name plates for homes and offices.',
    icon: PenTool,
  },
  {
    id: 6,
    title: 'Installation & Repair',
    description: 'End-to-end service including professional installation and maintenance.',
    icon: Wrench,
  },
];

export const STATS: StatItem[] = [
  { id: 1, value: 42, suffix: '+', label: 'Years Experience' },
  { id: 2, value: 360, suffix: '+', label: 'Projects Completed' }, // Adjusted slightly for realism
  { id: 3, value: 100, suffix: '%', label: 'Quality Assurance' },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Rigorous Testing',
    description: 'Every sign undergoes strict durability and electrical safety checks.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'One Year Guarantee',
    description: 'We stand by our craftsmanship with comprehensive warranties.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Timely Delivery',
    description: 'Respecting your deadlines with efficient production workflows.',
    icon: Clock,
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'Luxury Hotel Facade', category: 'Outdoor 3D', imageUrl: 'https://picsum.photos/id/122/800/600' },
  { id: 2, title: 'Neon Bar Signage', category: 'Neon', imageUrl: 'https://picsum.photos/id/146/800/800' },
  { id: 3, title: 'Corporate Steel Logo', category: 'Steel', imageUrl: 'https://picsum.photos/id/160/800/600' },
  { id: 4, title: 'Retail Storefront', category: 'Outdoor 3D', imageUrl: 'https://picsum.photos/id/180/800/600' },
  { id: 5, title: 'Digital LED Wall', category: 'LED', imageUrl: 'https://picsum.photos/id/201/800/800' },
  { id: 6, title: 'Office Reception', category: 'Interior', imageUrl: 'https://picsum.photos/id/250/800/600' },
];