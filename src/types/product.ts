export type IngredientGroup = {
  proteins: string[];

  vegetablesAndFruits: string[];

  grains: string[];

  functionalIngredients: string[];

  herbs: string[];
};

export type IngredientSpotlight = {
  title: string;

  description: string;
};

export type ProductJourneyStep = {
  title: string;

  text: string;
};

export type ProductAnalytics = {
  protein: string;

  fat: string;

  fiber: string;

  ash: string;

  calcium: string;

  phosphorus: string;

  moisture: string;
};

export type FeedingGuide = {
  puppies: string;

  adults: string;

  seniors: string;
};

export type SceneArtwork = {
  hero?: string;

  ingredients?: string;

  spotlight?: string;

  journey?: string;

  benefits?: string;

  analytics?: string;

  cta?: string;
};

export type Product = {
  id: string;

  slug: string;

  name: string;

  badge: string;

  highlight: string;

  color: string;

  headline: string;

  subheadline: string;

  description: string;

  story: string;

  quote: string;

  benefits: string[];

  ingredientSpotlights: IngredientSpotlight[];

  journey: ProductJourneyStep[];

  suitableFor: string[];

  ingredients: IngredientGroup;

  feedingGuide: FeedingGuide;

  analytics: ProductAnalytics;

  energy: string;

  heroImage?: string;

  ingredientsImage?: string;

  analyticsImage?: string;

  sceneArtwork?: SceneArtwork;

  tags?: string[];

  ctaLabel?: string;
};
