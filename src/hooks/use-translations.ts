// Simple translation hook as fallback
export function useTranslations(namespace: string) {
  const translations: Record<string, any> = {
    'hero': {
      'title': 'Mexico in Silicon Valley',
      'subtitle': 'Bridging Innovation Across Borders',
      'date': 'February 21-22, 2026',
      'location': 'Stanford University',
      'cta': {
        'register': 'Register Interest',
        'tickets': 'Get Tickets'
      },
      'countdown': {
        'days': 'Days',
        'hours': 'Hours',
        'minutes': 'Minutes',
        'seconds': 'Seconds'
      }
    },
    'nav': {
      'about': 'About',
      'program': 'Program',
      'speakers': 'Speakers',
      'sponsors': 'Sponsors',
      'tickets': 'Tickets',
      'contact': 'Contact',
      'admin': 'Admin'
    },
    'about': {
      'title': 'About MXSV',
      'description': 'A two-day conference designed to strengthen the bridge between Mexico\'s growing tech ecosystem and Silicon Valley\'s innovation hub.',
      'stats': {
        'attendees': '300+ Attendees',
        'speakers': '50+ Speakers',
        'panels': '10+ Panels',
        'networking': 'Unlimited Networking'
      },
      'day1': {
        'title': 'Day 1: Silicon Valley → Mexico',
        'description': 'Discover how Silicon Valley innovations can be adapted and implemented in Mexico\'s unique market'
      },
      'day2': {
        'title': 'Day 2: Mexico → Silicon Valley',
        'description': 'Showcase Mexican talent, startups, and innovations ready to scale globally'
      }
    },
    'program': {
      'title': 'Program',
      'day0': {
        'title': 'February 20: Arrivals',
        'description': 'Optional Silicon Valley tech tour'
      },
      'day1': {
        'title': 'February 21: Leaders\' Workshops',
        'workshops': {
          'ai': 'AI Fundamentals & Implementation',
          'social': 'Social Innovation & Impact',
          'design': 'Design Thinking Workshop'
        }
      },
      'day2': {
        'title': 'February 22: Public Panels',
        'panels': {
          '1': 'The State of Tech in Mexico',
          '2': 'Cross-Border Investment Opportunities',
          '3': 'Building Global Teams',
          '4': 'Innovation in Emerging Markets',
          '5': 'The Future of Tech Collaboration'
        }
      }
    },
    'speakers': {
      'title': 'Speakers',
      'subtitle': 'Leading voices in technology and innovation',
      'tbd': 'Speaker lineup to be announced',
      'viewMore': 'View Profile'
    },
    'sponsors': {
      'title': 'Sponsors & Partners',
      'subtitle': 'Organizations supporting the Mexico-Silicon Valley connection',
      'tiers': {
        'platinum': 'Platinum',
        'gold': 'Gold',
        'silver': 'Silver',
        'bronze': 'Bronze'
      },
      'cta': 'Become a Sponsor'
    },
    'tickets': {
      'title': 'Get Your Tickets',
      'subtitle': 'Join us for this transformative conference',
      'early': 'Early Bird',
      'fast': 'Fast Mover',
      'general': 'General Admission',
      'last': 'Last Chance',
      'available': 'available',
      'soldOut': 'Sold Out',
      'buyNow': 'Buy Now',
      'perTicket': 'per ticket'
    },
    'contact': {
      'title': 'Register Your Interest',
      'subtitle': 'Be the first to know about updates and announcements',
      'form': {
        'name': 'Full Name',
        'email': 'Email Address',
        'organization': 'Organization',
        'interest': 'Interest Type',
        'comments': 'Comments (Optional)',
        'submit': 'Submit',
        'submitting': 'Submitting...',
        'success': 'Thank you for your interest! We\'ll be in touch soon.',
        'error': 'Something went wrong. Please try again.'
      },
      'interestTypes': {
        'participant': 'Participant',
        'media': 'Media',
        'supporter': 'Supporter/Sponsor',
        'speaker': 'Speaker',
        'other': 'Other'
      }
    },
    'faq': {
      'title': 'Frequently Asked Questions',
      'categories': {
        'general': 'General',
        'logistics': 'Logistics',
        'speakers': 'Speakers',
        'tickets': 'Tickets'
      }
    }
  }

  return function t(key: string): string {
    const keys = key.split('.')
    let value = translations[namespace]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
}