import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ForewordAndAcknowledgments from '../views/ForewordAndAcknowledgments.vue'
import ExecutiveSummary from '../views/ExecutiveSummary.vue'
import SituationAnalysis from '../views/SituationAnalysis.vue'
import OverviewOfClient from '../views/OverviewOfClient.vue'
import AnalysisOfProblem from '../views/AnalysisOfProblem.vue'
import ProfileOfTargetPublics from '../views/ProfileOfTargetPublics.vue'
import CampaignDesignAndImplementation from '../views/CampaignDesignAndImplementation.vue'
import PlanningProcess from '../views/PlanningProcess.vue'
import GoalsAndObjectives from '../views/GoalsAndObjectives.vue'
import ScheduleAndBudget from '../views/ScheduleAndBudget.vue'
import EvaluationPlan from '../views/EvaluationPlan.vue'
import Conclusion from '../views/Conclusion.vue'
import Appendix from '../views/Appendix.vue'
import TacticalExperience from '../views/TacticalExperience.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cover',
    component: Home
  },
  {
    path: '/foreword-and-acknowledgments',
    name: 'Foreword And Acknowledgments',
    component: ForewordAndAcknowledgments
  },
  {
    path: '/executive-summary',
    name: 'Executive Summary',
    component: ExecutiveSummary
  },
  {
    path: '/situation-analysis',
    name: 'Situation Anaysis Of Client And Problem Statement',
    component: SituationAnalysis
  },
  {
    path: '/overview-of-client',
    name: 'Overview Of The Client',
    component: OverviewOfClient
  },
  {
    path: '/analysis-of-the-problem',
    name: 'Analysis Of The Problem',
    component: AnalysisOfProblem
  },
  {
    path: '/profile-of-target-publics',
    name: 'Profile Of Target Publics',
    component: ProfileOfTargetPublics
  },
  {
    path: '/campaign-design-and-implementation',
    name: 'Campaign Design And Implementation',
    component: CampaignDesignAndImplementation
  },
  {
    path: '/planning-process',
    name: 'Planning Process',
    component: PlanningProcess
  },
  {
    path: '/goals-and-objectives',
    name: 'Goals And Objectives',
    component: GoalsAndObjectives
  },
  {
    path: '/schedule-and-budget',
    name: 'Schedule And Budget',
    component: ScheduleAndBudget
  },
  {
    path: '/evaluation-plan',
    name: 'Evaluation Plan',
    component: EvaluationPlan
  },
  {
    path: '/tactical-experience',
    name: 'Tactical Experience',
    component: TacticalExperience
  },
  {
    path: '/conclusion',
    name: 'Conclusion',
    component: Conclusion
  },
  {
    path: '/appendix',
    name: 'Appendix',
    component: Appendix
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

export default router
