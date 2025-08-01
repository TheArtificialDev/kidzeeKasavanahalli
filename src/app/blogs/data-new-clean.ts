import { managingChildrenScreenTimeHealthyBalance } from './articles/managing-children-screen-time-healthy-balance';
import { dealingWithAggressiveStubbornBehaviorChildren } from './articles/dealing-with-aggressive-stubborn-behavior-children';
import { encouragingGoodCommunicationYoungChildren } from './articles/encouraging-good-communication-young-children';
import { positiveParentingWithoutPhysicalPunishment } from './articles/positive-parenting-without-physical-punishment';
import { digitalWellnessPreschoolersBeyondScreenTimeLimits } from './articles/digital-wellness-preschoolers-beyond-screen-time-limits';
import { understandingChildAggressionRootCausesCompassionateResponses } from './articles/understanding-child-aggression-root-causes-compassionate-responses';
import { solvingToddlerSleepChallengesGentleMethods } from './articles/solving-toddler-sleep-challenges-gentle-methods';
import { buildingConfidenceShyIntrovertedChildren } from './articles/building-confidence-shy-introverted-children';
import { navigatingPickyEatingHealthyHabitsWithoutBattles } from './articles/navigating-picky-eating-healthy-habits-without-battles';
import { preparingChildFirstDaySchoolSmoothTransition } from './articles/preparing-child-first-day-school-smooth-transition';
import { developingEmotionalIntelligenceYoungChildren } from './articles/developing-emotional-intelligence-young-children';
import { managingSiblingRivalryBuildingCooperativeRelationships } from './articles/managing-sibling-rivalry-building-cooperative-relationships';
import { handlingTantrumsToddlerMeltdownsWithCompassion } from './articles/handling-tantrums-toddler-meltdowns-with-compassion';
import { buildingResilienceHelpingChildrenBounceBack } from './articles/building-resilience-helping-children-bounce-back';
import { outdoorPlayNatureActivitiesChildDevelopment } from './articles/outdoor-play-nature-activities-child-development';
import { creativePretendPlayImaginationDevelopment } from './articles/creative-pretend-play-imagination-development';
import { managingFamilyStressMaintainingCalmHousehold } from './articles/managing-family-stress-maintaining-calm-household';
import { teachingEmpathyKindnessYoungChildren } from './articles/teaching-empathy-kindness-young-children';
import { supportingChildAnxietyWorriesGentleApproaches } from './articles/supporting-child-anxiety-worries-gentle-approaches';
import { guidingChildrenThroughTransitionsChangeGrowth } from './articles/guiding-children-through-transitions-change-growth';
import { fosteringIndependenceLifeSkillsYoungChildren } from './articles/fostering-independence-life-skills-young-children';
import { nurturingCuriosityLoveOfLearning } from './articles/nurturing-curiosity-love-of-learning';
import { understandingChildDevelopmentMilestones } from './articles/understanding-child-development-milestones';
import { buildingHealthyHabitsEarlyYears } from './articles/building-healthy-habits-early-years';
import { preparyingChildForSchoolSuccess } from './articles/preparing-child-for-school-success';

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  date: string;
}

export const blogPosts: BlogPost[] = [
  managingChildrenScreenTimeHealthyBalance,
  digitalWellnessPreschoolersBeyondScreenTimeLimits,
  dealingWithAggressiveStubbornBehaviorChildren,
  understandingChildAggressionRootCausesCompassionateResponses,
  encouragingGoodCommunicationYoungChildren,
  positiveParentingWithoutPhysicalPunishment,
  solvingToddlerSleepChallengesGentleMethods,
  buildingConfidenceShyIntrovertedChildren,
  navigatingPickyEatingHealthyHabitsWithoutBattles,
  preparingChildFirstDaySchoolSmoothTransition,
  developingEmotionalIntelligenceYoungChildren,
  managingSiblingRivalryBuildingCooperativeRelationships,
  handlingTantrumsToddlerMeltdownsWithCompassion,
  buildingResilienceHelpingChildrenBounceBack,
  outdoorPlayNatureActivitiesChildDevelopment,
  creativePretendPlayImaginationDevelopment,
  managingFamilyStressMaintainingCalmHousehold,
  teachingEmpathyKindnessYoungChildren,
  supportingChildAnxietyWorriesGentleApproaches,
  guidingChildrenThroughTransitionsChangeGrowth,
  fosteringIndependenceLifeSkillsYoungChildren,
  nurturingCuriosityLoveOfLearning,
  understandingChildDevelopmentMilestones,
  buildingHealthyHabitsEarlyYears,
  preparyingChildForSchoolSuccess,
];
