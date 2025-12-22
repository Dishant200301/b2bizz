import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  companyName: string;
  challenge: string;
  solution: string;
  stats: { value: string; label: string }[];
  image: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}