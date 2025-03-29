// src/components/GoogleRatingDisplay.tsx
"use client";

import { Star } from 'lucide-react'; // Assuming you have lucide-react installed

interface GoogleRatingDisplayProps {
  rating: number;
  reviewCount: number;
  googleMapsUrl?: string; // Optional: Link to your Google Maps listing
}

// Helper function to generate stars
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
  }

  // Half star (optional)
  // You can uncomment this and add logic if you want to show half stars
  // if (hasHalfStar) {
  //   stars.push(<StarHalf key="half" className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
  // }

  // Empty stars to make up 5 total
  const emptyStars = 5 - stars.length;
   for (let i = 0; i < emptyStars; i++) {
     // Use a slightly different key for empty stars
     stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />); // Empty star (stroke only)
   }


  return stars;
};

export const GoogleRatingDisplay: React.FC<GoogleRatingDisplayProps> = ({ rating, reviewCount, googleMapsUrl }) => {
  const content = (
    <div className="flex items-center space-x-2 text-sm text-white-600">
      <span className="font-bold text-white">{rating.toFixed(1)}</span>
      <div className="flex">
        {renderStars(rating)}
      </div>
      <span className="font-bold text-white">{reviewCount} đánh giá từ Google Map</span>
      {/* Optional: Add Google logo */}
      {/* <img src="/assets/icons/map_google.svg" alt="Google" className="h-4 w-4 ml-1" /> Adjust path if needed */}
    </div>
  );

  if (googleMapsUrl) {
    return (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-80 transition-opacity"
        aria-label={`View ${reviewCount} Google reviews for Alice's Class`}
      >
        {content}
      </a>
    );
  }

  return <div className="inline-block">{content}</div>;
};