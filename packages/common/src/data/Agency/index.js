import BlogImage1 from '../../assets/image/agency/blog/port1.png';
import BlogImage2 from '../../assets/image/agency/blog/port2.png';
import BlogImage3 from '../../assets/image/agency/blog/port3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/zachary.png';
import Menny from '../../assets/image/agency/client/naveed.png';
import Max from '../../assets/image/agency/client/max.png';
const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80'
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '100'
    },
    // {
    //   label: 'Portfolio',
    //   path: '#blogSection',
    //   offset: '100',
    // },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '100'
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100'
    },
    // {
    //   label: 'Team Member',
    //   path: '#teamSection',
    //   offset: '67',
    // },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '100'
    }
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next'
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next'
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next'
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next'
    }
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Uber for X',
      description:
        "Do you have an idea which follows the 'Uber for X' business model? Do you want to make the next Careem, Bykea or AirBNB? Well look no further! Tell us about your requirements and application ideas and we will help turn your idea into a reality!"
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Social Media',
      description:
        'Websites like Facebook, Instagram and Snapchat are used daily by literally billions of users. If you have an idea similar to these companies, you can discuss them with us and we will help you create your own social media platform.'
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Online Store & Delivery',
      description:
        'We can help create an online presence for your business or restaurant. Whether it be a delivery service application or an online store or both, we will help you to expand your customer reach.'
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Virtual Classroom',
      description:
        'If you are an educational institute or teacher looking to teach to a wider audience or create a network of teachers, we can help you create an online virtual system for your classes.'
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Freelance Market Place',
      description:
        'Freelance websites offer a market place for clients and service providers to meet. The services can range from website development to plumbing and painting. We can help you create the entire system for the marketplace to function well.'
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'Million Dollar Idea',
      description:
        'If you have the next unique million dollar idea and you are willing to invest your time and money into it, you can contact us and we will make sure that your idea will turn into a reality! Providing the best route for you to take in order to introduce your application to the World.'
    }
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Planning',
      description:
        'We analyse your idea and plan the applications and/or websites needed to fulfil your needs.'
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Designing',
      description:
        'Our design team will prepare the most eloquent UI along with the most friendly UX your users will ever experience.'
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Building',
      description:
        'Now it comes down to building and implementing the idea according to the designs that have been prepared.'
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Deployment',
      description:
        'Finally! Your idea is now a reality and we will provide maintenance and continuous update to ensure users get exactly what they want.'
    }
  ],
  blog: [
    {
      id: 1,
      title: 'Zachary Burau',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1'
    },
    {
      id: 2,
      title: 'Naveed Ahmad',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2'
    },
    {
      id: 3,
      title: 'Max Motamedi',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3'
    }
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        'flaticon-facebook-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-dribble-logo'
      ]
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior UI/UX Designer',
      social_links: [
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-facebook-logo',
        'flaticon-dribble-logo'
      ]
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writter',
      social_links: [
        'flaticon-dribble-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-facebook-logo'
      ]
    }
  ],
  testimonial: [
    {
      id: 1,
      name: 'Zachary Burau',
      designation: 'Founder of Wanderift',
      comment:
        'They are a team of great developers and did great work!Great guys as well!Does a great job.',
      avatar_url: Denny
    },
    {
      id: 2,
      name: 'Naveed Ahmad',
      designation: 'Senior Manager Software Engineering at Capital One',
      comment: 'Excellent Work, very happywith deliverables and communication.',
      avatar_url: Menny
    },
    {
      id: 3,
      name: 'Max Motamedi',
      designation: 'President of Carpet Floors and More',
      comment: 'Thank you very much for having my project done successfully.',
      avatar_url: Max
    }
    // {
    //   id: 4,
    //   name: "Roman Ul Oman",
    //   designation: "Co-founder of QatarDiaries",
    //   comment:
    //     "Impressed with master class support of the team and really look forward for the future.",
    //   avatar_url: Menny
    // }
  ],
  faq: [
    {
      id: 1,
      title: 'Which technologies does your company use?',
      description:
        'We have a diverse range of technologies that we use in our production apps depending on the desired platform. For more information, you can check out our about section.'
    },
    {
      id: 2,
      expend: true,
      title: 'Will you take any shares from my company?',
      description:
        ' We do not take any equity or shares in any of the profit your idea is able to generate. We only charge for our services and make sure that you get the best quality.'
    },
    {
      id: 3,
      title: 'How will I be able to convey my idea to you?',
      description:
        ' You will sit with our team of designers and they will create a wireframe for your application. We will stay in touch with you and will ensure that each and every feature is finalised after your approval.'
    },
    {
      id: 4,
      title: 'Okay, I’m interested. How do we get started?',
      description: 'Great! Contact us using the contact form given below.'
    }
  ],
  menuItems: [
    {
      id: 1,
      url: '/work-history',
      text: 'Work History'
    },
    {
      id: 2,
      url: '/blog',
      text: 'Blog'
    },
    {
      id: 3,
      url: '#featureSection',
      text: 'Our Services'
    },
    {
      id: 4,
      url: '#qualitySection',
      text: 'Methodology'
    },
    {
      id: 5,
      url: '#testimonialSection',
      text: 'Client Review'
    }
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1'
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2'
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3'
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4'
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5'
    }
  ]
};
export default data;
