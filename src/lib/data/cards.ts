import type { Card } from '../types/CardTypes';

export const cards: Card[] = [
  {
    type: 'image',
    key: 'asfasdf',
    custom_key: 'event_image',
    src: 'https://placehold.co/600x1200',
    objectFit: 'cover',
    cta: { labelNext: 'Next', labelFinish: 'Finish' },
  },
  {
    type: 'video_question',
    key: 'asdfd',
    custom_key: 'rodeo_video',
    videoUrl: './src/lib/data/videos/rodeo_video/intro.webm',
    title: "After working with hundreds of rodeos, we've identified these as the most common technical challenges. Select the ones you'd like solved",
    buttons: [
      {
        label: 'Done-For-You Updates',
        action: 'sound',
        value: 'done_for_you_clicked',
        detail: './src/lib/sounds/rodeo_video/done_for_you.mp3',
      },
      {
        label: 'Professional Branding',
        action: 'sound',
        value: 'professional_branding_clicked',
        detail: './src/lib/sounds/rodeo_video/professional_branding.mp3',
      },
      {
        label: 'Attendee Communications',
        action: 'sound',
        value: 'attendee_communications_clicked',
        detail: './src/lib/sounds/rodeo_video/atendee_communication.mp3',
      },
      {
        label: 'Easy Social Media Scheduling',
        action: 'sound',
        value: 'easy_social_media_scheduling_clicked',
        detail: './src/lib/sounds/rodeo_video/easy_social_media.mp3',
      },
      {
        label: 'Managing Your Vendor & Contestant Data',
        action: 'sound',
        value: 'managing_vendor_contestant_data_clicked',
        detail: './src/lib/sounds/rodeo_video/managing_your_vendors.mp3',
      },
    ],
    cta: { labelNext: 'See How Easy We Can Make It', labelFinish: 'Finish' },
  },
  {
    type: 'sms_conversation',
    key: 'asfasdf',
    custom_key: 'sms_dialog',
    messages: [
      {
        sender: 'Carol',
        text: "Hey, we need to update our ticket prices for next month's rodeo. General admission needs to be $25 now. http://localhost:3000",
        time: '9:42 AM',
      },
      {
        sender: 'Brooke',
        text: "I'll take care of that right away! While I'm at it, would you like me to set up the early-bird special we discussed?",
        time: '9:42 AM',
      },
      {
        sender: 'Carol',
        text: 'Oh right! Yes please. Can we do $20 for the first 500 tickets?',
        time: '9:43 AM',
      },
      {
        sender: 'Brooke',
        text: "Done! I've updated all pricing and added a counter showing tickets remaining at early-bird price. Want to see? [link]",
        time: '9:45 AM',
      },
      {
        sender: 'Carol',
        text: 'That was fast! Looks perfect 👍',
        emoji: '👍',
        time: '9:46 AM',
      },
      {
        sender: 'Carol',
        text: 'While I have you - our main sponsor wants a special VIP package page. Is that something you can help with?',
        time: '9:47 AM',
      },
      {
        sender: 'Brooke',
        text: "Absolutely! I'll create a professional landing page with:",
        time: '9:47 AM',
      },
      {
        sender: 'Brooke',
        text: '✓ Photo gallery from last year\n✓ VIP amenities list\n✓ Mobile-friendly purchase button\n✓ Prominent sponsor recognition',
        time: '9:47 AM',
      },
      {
        sender: 'Carol',
        text: 'Perfect - do whatever you think is best. So nice not having to figure out the technical stuff!',
        time: '9:48 AM',
      },
      {
        sender: 'Brooke',
        text: 'By the way, I noticed your event is coming up in 30 days. I think we should:',
        time: '9:49 AM',
      },
      {
        sender: 'Brooke',
        text: '✓ Set up automated email reminders\n✓ Create social media countdown posts\n✓ Update Your Daily Schedule\n✓ Create a title sponsor spotlight section',
        time: '9:49 AM',
      },
      {
        sender: 'Carol',
        text: 'Wow, you guys think of everything! Yes to all of that!',
        emoji: '🙌',
        time: '9:50 AM',
      },
      {
        sender: 'Brooke',
        text: 'Great! We will get started right away. Anything else you need help with?',
        time: '9:50 AM',
      },
      {
        sender: 'Carol',
        text: 'No, this is perfect. You guys make it so easy! 🙏',
        emoji: '🙏',
        time: '9:51 AM',
      },
    ],
    speed: 5,
    cta: { labelNext: 'See Our Other Time-Saving Features', labelFinish: 'Finish' },
  },
  {
    type: 'before_after_slider',
    key: 'afasdfdf',
    custom_key: 'professional_branding',
    imageBefore: './src/lib/images/site_transformation/will-rogers-before.png',
    imageAfter: './src/lib/images/site_transformation/will-rogers-after.png',
    startPosition: 25,
    title: 'See how professional branding transforms your digital presence and builds confidence with fans, sponsors, and sanctioning bodies. Which Brand Benefits Matter Most to You?',
    buttons: [
      {
        label: 'Trust Building',
        action: 'sound',
        value: 'trust_building_clicked',
        detail: './src/lib/sounds/professional_branding/trust_building.mp3',
      },
      {
        label: 'Sanctioning Body Compliance',
        action: 'sound',
        value: 'sanctioning_body_compliance_clicked',
        detail: './src/lib/sounds/professional_branding/compliance.mp3',
      },
      {
        label: 'Fan Recognition',
        action: 'sound',
        value: 'fan_recognition_clicked',
        detail: './src/lib/sounds/professional_branding/fan_recognition.mp3',
      },
      {
        label: 'Marketing Impact',
        action: 'sound',
        value: 'marketing_impact_clicked',
        detail: './src/lib/sounds/professional_branding/marketing_impact.mp3',
      },
    ],
    cta: { labelNext: 'Explore More Pro Features', labelFinish: 'Finish' },
  },
  {
    type: 'checklist_animation',
    key: 'asdfdsfd',
    custom_key: 'attendee_communications',
    title: 'Your 24/7 Fan Communication System',
    description: 'Most rodeos only communicate with fans during ticket sales. But your biggest fans want to hear from you all year long. We make it easy to keep them engaged - automatically sending the right message at the right time. See how:',
    items: [
      {
        label: 'Build Your Fan Base',
        audio: './src/lib/sounds/attendee_communications/build_your_fan_base.mp3',
      },
      {
        label: 'Automated Event Reminders',
        audio: './src/lib/sounds/attendee_communications/automated_event_reminders.mp3',
      },
      {
        label: 'Year-Round Engagement',
        audio: './src/lib/sounds/attendee_communications/year-round_engagement.mp3',
      },
      {
        label: 'Advanced Email Reports',
        audio: './src/lib/sounds/attendee_communications/advanced_email_reports.mp3',
      },
    ],
    cta: {
      labelNext: 'View More Features',
      labelFinish: 'Finish',
    },
  },
  {
    type: 'tutorial_slideshow',
    key: 'afdsfasd',
    custom_key: 'social_post_tutorial',
    slides: [
      {
        image: 'https://placehold.co/600x1200/orange/white/png?text=Scheduling+Interface',
        points: [
          {
            x: 50,
            y: 150,
            actions: [{ action: 'sound', audio: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav' }],
            zoom: false,
          },
        ],
      },
      {
        image: 'https://placehold.co/600x1200/orange/white/png?text=Dashboard+Overview',
        points: [
          {
            x: 100,
            y: 85,
            actions: [{ action: 'sound', audio: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav' }],
            zoom: true,
          },
        ],
      },
      {
        image: 'https://placehold.co/600x1200/orange/white/png?text=Post+Creation+Interface',
        points: [
          {
            x: 60,
            y: 75,
            actions: [{ action: 'popup', content: 'All your accounts connect here - Facebook, Instagram, X, LinkedIn are all supported. Need another platform? Just ask our team will add it for you.' }],
            zoom: true,
          },
          {
            x: 140,
            y: 200,
            actions: [{ action: 'sound', audio: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav' }],
            zoom: true,
          },
          {
            x: 200,
            y: 250,
            actions: [{ action: 'popup', content: "Upload or select existing gallery images, videos and links - we'll optimize them for each platform and track the results." }],
            zoom: true,
          },
          {
            x: 300,
            y: 300,
            actions: [{ action: 'sound', audio: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav' }],
            zoom: false,
          },
        ],
      },
    ],
    cta: { labelNext: 'Next', labelFinish: 'View More Features' },
  },
  {
    type: 'image_carousel',
    key: 'dsafsd',
    custom_key: 'event_gallery',
    images: ['https://placehold.co/600x1200/orange/white/png?text=Bull+Riding', 'https://placehold.co/600x1200/blue/white/png?text=Barrel+Racing', 'https://placehold.co/600x1200/green/white/png?text=Crowd+Cheer'],
    objectFit: 'cover',
    backgroundColor: '#000000',
    cta: { labelNext: 'Next', labelFinish: 'Finish' },
  },
  {
    type: 'video_question',
    key: 'asdfddfds',
    custom_key: 'automated_vendor_management',
    videoUrl: '',
    title: "After working with hundreds of rodeos, we've identified these as the most common technical challenges. Select the ones you'd like solved",
    buttons: [
      {
        label: 'We Build The Forms You Need',
        action: 'sound',
        value: 'build_forms_clicked',
        detail: '',
      },
      {
        label: 'Payment Collection',
        action: 'sound',
        value: 'payment_collection_clicked',
        detail: '',
      },
      {
        label: 'Digital Document Management',
        action: 'sound',
        value: 'document_management_clicked',
        detail: '',
      },
      {
        label: 'Real-Time Data Access',
        action: 'sound',
        value: 'real_time_data_clicked',
        detail: '',
      },
    ],
    cta: { labelNext: 'View More Features', labelFinish: 'Finish' },
  },
  {
    type: 'quote_slideshow',
    key: 'dsflasdkfl',
    custom_key: 'social_proof',
    title: 'Rodeo Committee Success Stories',
    description: 'See how other rodeo committees are transforming their events with our all-in-one platform.',
    items: [
      {
        label: 'Website Management',
        quote: "Since switching to RodeoSites.com, I haven't touched a line of code. They handle all our updates within hours, and our site looks better than ever.",
        attribution: '- Sarah Johnson, Cowtown Rodeo Committee',
        background: 'arena.jfif',
      },
      {
        label: 'Form Management',
        quote: "Vendor registration used to take weeks of back-and-forth emails. Now they fill out one form, pay instantly, and everything's organized automatically.",
        attribution: '- Mike Thompson, Southwest Rodeo Series',
        background: 'vendors_booths.png',
      },
      {
        label: 'Email Marketing',
        quote: 'Our email list has grown from 500 to over 5,000 fans. Druida makes it easy to keep them updated and excited about our events all year long.',
        attribution: '- Lisa Martinez, Rocky Mountain Rodeo Association',
        background: 'packed_grandstands.png',
      },
      {
        label: 'Social Media',
        quote: 'I used to spend hours juggling social media posts. Now I schedule everything in one place, and our engagement has never been higher.',
        attribution: '- John Baker, Heartland Rodeo Committee',
        background: 'social_posts_grid.png',
      },
    ],
    cta: {
      labelNext: 'View More Features',
      subText: "5 more ways we automate your rodeo's success",
    },
  },
  {
    type: 'form',
    key: 'rodeo_registration',
    custom_key: 'event_signup',
    title: 'Get More Information',
    description: "Let's talk about your specific needs and show you exactly how we can help streamline your rodeo operations.",
    fields: [
      {
        label: 'Full Name',
        type: 'text',
        name: 'fullName',
        placeholder: 'Enter your full name',
        required: true,
        validation: {
          minLength: 3,
          maxLength: 50,
          pattern: '^[a-zA-Z ]+$',
          message: 'Name must be between 3 to 50 characters and contain only letters and spaces.',
        },
      },
      {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your email',
        required: true,
        validation: {
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          message: 'Please enter a valid email address.',
        },
      },
      {
        label: 'Phone Number',
        type: 'tel',
        name: 'phone',
        placeholder: 'Enter your phone number',
        required: true,
        validation: {
          pattern: '^\\d{10}$',
          message: 'Please enter a valid 10-digit phone number.',
        },
      },
    ],
    cta: {
      labelNext: 'Submit',
      labelFinish: 'Finish',
      onSubmit: 'submitRodeoForm',
    },
  },
];
