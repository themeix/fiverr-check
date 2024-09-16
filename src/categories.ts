// src/categories.ts
export const categories = [
    { name: "jekyll", description: "Explore various Jekyll themes and tutorials." },
    { name: "cat", description: "All about cats, from cute photos to care tips." },
    { name: "rock", description: "Rock music news, reviews, and artist insights." },
  ] as const;
  
  export type Category = typeof categories[number]['name'];
  export type CategoryDescription = typeof categories[number];
  