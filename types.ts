import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}