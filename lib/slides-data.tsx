import {
  Palette,
  AlertTriangle,
  Lightbulb,
  Grid3X3,
  ArrowRight,
  Cpu,
  Award,
  TrendingUp,
  Target,
  Map,
  Building,
  Rocket,
} from "lucide-react"

// Import slide components
import TitleSlide from "@/components/slides/title-slide"
import ProblemSlide from "@/components/slides/problem-slide"
import SolutionSlide from "@/components/slides/solution-slide"
import FeaturesSlide from "@/components/slides/features-slide"
import ProcessSlide from "@/components/slides/process-slide"
import TechnologySlide from "@/components/slides/technology-slide"
import CeloSlide from "@/components/slides/celo-slide"
import AdvantageSlide from "@/components/slides/advantage-slide"
import MarketSlide from "@/components/slides/market-slide"
import RoadmapSlide from "@/components/slides/roadmap-slide"
import TractionSlide from "@/components/slides/traction-slide"
import CTASlide from "@/components/slides/cta-slide"

export const slides = [
  {
    id: 1,
    title: "Title",
    component: TitleSlide,
    icon: Palette,
  },
  {
    id: 2,
    title: "The Problem",
    component: ProblemSlide,
    icon: AlertTriangle,
  },
  {
    id: 3,
    title: "Our Solution",
    component: SolutionSlide,
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Key Features",
    component: FeaturesSlide,
    icon: Grid3X3,
  },
  {
    id: 5,
    title: "How It Works",
    component: ProcessSlide,
    icon: ArrowRight,
  },
  {
    id: 6,
    title: "Technology Stack",
    component: TechnologySlide,
    icon: Cpu,
  },
  {
    id: 7,
    title: "Celo Proof of Ship",
    component: CeloSlide,
    icon: Award,
  },
  {
    id: 8,
    title: "Competitive Advantage",
    component: AdvantageSlide,
    icon: TrendingUp,
  },
  {
    id: 9,
    title: "Market Opportunity",
    component: MarketSlide,
    icon: Target,
  },
  {
    id: 10,
    title: "Roadmap",
    component: RoadmapSlide,
    icon: Map,
  },
  {
    id: 11,
    title: "Traction & Development",
    component: TractionSlide,
    icon: Building,
  },
  {
    id: 12,
    title: "Call to Action",
    component: CTASlide,
    icon: Rocket,
  },
]
