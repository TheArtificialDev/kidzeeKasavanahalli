export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'importance-of-play-in-early-childhood',
    title: 'The Importance of Play in Early Childhood Development',
    summary: 'Discover why play is essential for your child’s growth and how it supports learning, creativity, and social skills.',
    content: `# The Importance of Play in Early Childhood Development\n\nPlay is not just fun—it’s fundamental to healthy development. Through play, children learn to solve problems, develop motor skills, and build relationships.\n\n**Benefits of Play:**\n- Boosts creativity and imagination\n- Develops social and emotional skills\n- Improves language and communication\n- Encourages physical activity\n\nAt Kidzee Kasavanahalli, we integrate play-based learning in all our programs to nurture well-rounded growth.`,
    tags: ['child development', 'play', 'learning'],
    date: '2025-07-01',
  },
  {
    slug: 'building-social-skills-in-preschoolers',
    title: 'Building Social Skills in Preschoolers',
    summary: 'Learn practical ways to help your child make friends, share, and communicate confidently in a preschool setting.',
    content: `# Building Social Skills in Preschoolers\n\nSocial skills are the foundation for lifelong success. Preschool is the perfect time to encourage sharing, cooperation, and empathy.\n\n**Tips for Parents:**\n- Model positive social behavior\n- Arrange playdates\n- Encourage group activities\n- Praise sharing and kindness\n\nOur teachers at Kidzee Kasavanahalli use group games and collaborative projects to help children thrive socially.`,
    tags: ['child development', 'social skills', 'preschool'],
    date: '2025-06-20',
  },
  {
    slug: 'nutrition-tips-for-young-children',
    title: 'Nutrition Tips for Young Children',
    summary: 'Explore healthy eating habits and simple meal ideas to support your child’s growth and energy.',
    content: `# Nutrition Tips for Young Children\n\nA balanced diet is key to your child’s health and learning.\n\n**Healthy Habits:**\n- Offer a variety of fruits and vegetables\n- Limit sugary snacks\n- Encourage regular meal times\n- Involve kids in meal prep\n\nAt Kidzee Kasavanahalli, we educate children about healthy food choices through fun activities and stories.`,
    tags: ['child development', 'nutrition', 'health'],
    date: '2025-06-10',
  },
];
