import { AttractionsWorkHours } from "./attractions-work-hours";
import { AttractionsTag } from "./attractions-tag";

export type Attractions = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  averageRating: number;
  reviewsCount: number;
  ratingCount: number;
  workHours: AttractionsWorkHours[];
  tags: AttractionsTag[];
  phone: string;
  address: string;
  url: string;
  carousel: string[];
  body: string;
};