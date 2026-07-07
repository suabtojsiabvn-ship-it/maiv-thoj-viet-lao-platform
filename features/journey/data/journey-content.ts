import type { JourneyContentData } from "../types/journey.types";

export const journeyContent: JourneyContentData = {
  badge: "YOUR DENTAL JOURNEY",

  heading: "A Simple Journey,\nFrom Home to Your New Smile",

  intro:
    "From your first consultation to your return home, we coordinate every step to make your dental journey simple, comfortable and worry-free.",

  steps: [
    {
      id: "consultation",
      title: "Free Consultation",
      description:
        "Share your dental concerns and receive an initial assessment from our team.",
      icon: "message-circle",
    },

    {
      id: "plan",
      title: "Personalized Treatment Plan",
      description:
        "Receive a tailored treatment plan with estimated costs and travel recommendations.",
      icon: "clipboard-list",
    },

    {
      id: "travel",
      title: "Travel Preparation",
      description:
        "We help you prepare for your trip, including scheduling and travel guidance.",
      icon: "plane-takeoff",
    },

    {
      id: "pickup",
      title: "Airport Pickup",
      description:
        "Our Patient Coordinator welcomes you at the airport and accompanies you throughout your stay.",
      icon: "car",
    },

    {
      id: "treatment",
      title: "Dental Treatment",
      description:
        "Receive high-quality care from our trusted clinical partner using modern technology.",
      icon: "stethoscope",
    },

    {
      id: "recovery",
      title: "Recovery & Follow-up",
      description:
        "We continue supporting you during recovery and provide post-treatment guidance.",
      icon: "heart-pulse",
    },

    {
      id: "return",
      title: "Return Home",
      description:
        "Travel home with confidence, knowing our team remains available for continued support.",
      icon: "house",
    },
  ],

  cta: {
    label: "Start Your Journey Today",
    href: "/booking",
  },
};