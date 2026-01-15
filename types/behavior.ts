export type ProductBehavior = {
  views: number;
  interactions: number;
  lastViewed: number;
};

export type BehaviorStore = Record<string, ProductBehavior>;
