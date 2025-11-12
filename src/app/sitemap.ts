import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kidzeekasavanahalli.in';
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/activities`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas-served`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admission`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Blog articles
  const blogSlugs = [
    'managing-children-screen-time-healthy-balance',
    'digital-wellness-preschoolers-beyond-screen-time-limits',
    'dealing-with-aggressive-stubborn-behavior-children',
    'understanding-child-aggression-root-causes-compassionate-responses',
    'encouraging-good-communication-young-children',
    'positive-parenting-without-physical-punishment',
    'solving-toddler-sleep-challenges-gentle-methods',
    'building-confidence-shy-introverted-children',
    'navigating-picky-eating-healthy-habits-without-battles',
    'preparing-child-first-day-school-smooth-transition',
    'developing-emotional-intelligence-young-children',
    'managing-sibling-rivalry-building-cooperative-relationships',
    'handling-tantrums-toddler-meltdowns-with-compassion',
    'building-resilience-helping-children-bounce-back',
    'outdoor-play-nature-activities-child-development',
    'creative-pretend-play-imagination-development',
    'managing-family-stress-maintaining-calm-household',
    'teaching-empathy-kindness-young-children',
    'supporting-child-anxiety-worries-gentle-approaches',
    'guiding-children-through-transitions-change-growth',
    'fostering-independence-life-skills-young-children',
    'nurturing-curiosity-love-of-learning',
    'understanding-child-development-milestones',
    'building-healthy-habits-early-years',
    'preparing-child-for-school-success',
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...blogPages];
}
