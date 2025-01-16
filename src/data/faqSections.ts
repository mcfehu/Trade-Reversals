import { Lightbulb, Signal, HelpCircle, Users, Shield, XCircle } from 'lucide-react';

export const faqSections = [
  {
    icon: Lightbulb,
    title: "Getting Started",
    questions: [
      {
        question: "How do your trading signals work?",
        answer: "1-3 daily signals for Gold and Nasdaq futures. Each includes entry price, stop-loss, and take-profit levels."
      },
      {
        question: "Who is this service for?",
        answer: "Beginner and experienced traders focused on Gold and Nasdaq futures."
      }
    ]
  },
  {
    icon: Signal,
    title: "Trading Signals",
    questions: [
      {
        question: "What is your success rate?",
        answer: "73.3% success rate in December, with 11 winning trades out of 15. All results are verified and published monthly."
      },
      {
        question: "How do I receive the signals?",
        answer: "Instant delivery via Telegram."
      }
    ]
  },
  {
    icon: XCircle,
    title: "Cancellation",
    questions: [
      {
        question: "How do I cancel?",
        answer: "Simple and hassle-free! You can cancel your subscription anytime using our automated Payment Bot. If you need assistance, just send a message to the Telegram Bot, and we'll be happy to help."
      },
      {
        question: "Will I be charged after cancelling?",
        answer: "No. Access continues until current period ends."
      }
    ]
  },
  {
    icon: HelpCircle,
    title: "Support",
    questions: [
      {
        question: "How can I get help?",
        answer: "24/7 support via Telegram or support@tradereversals.com. 1-hour response during trading hours."
      }
    ]
  },
  {
    icon: Users,
    title: "Community",
    questions: [
      {
        question: "Is there a community?",
        answer: "Yes. Private VIP and free public Telegram groups for trade discussion and learning."
      }
    ]
  },
  {
    icon: Shield,
    title: "Security",
    questions: [
      {
        question: "How is my data protected?",
        answer: "Bank-level encryption. No third-party sharing."
      }
    ]
  }
];