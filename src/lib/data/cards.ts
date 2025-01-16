import type { Card } from '../types/CardTypes';

export const cards: Card[] = [
  {
    type: 'video_question',
    key: 'asdfd',
    custom_key: 'rodeo_video',
    videoUrl: 'https://download.samplelib.com/mp4/sample-5s.mp4',
    title: "After working with hundreds of rodeos, we've identified these as the most common technical challenges. Select the ones you'd like solved",
    buttons: [
      { 
        label: "Done-For-You Updates", 
        action: 'link', 
        value: 'schedule_viewed',
        detail: 'https://rodeoevent.com/schedule'
      },
      { 
        label: 'Professional Branding', 
        action: 'link', 
        value: 'tickets_viewed',
        detail: 'https://rodeoevent.com/tickets'
      },
      { 
        label: 'Attendee Communications', 
        action: 'sound', 
        value: 'sound_1_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2568/2568.wav'
      },
      { 
        label: 'Easy Social Media Scheduling', 
        action: 'sound', 
        value: 'sound_2_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav'
      },
      { 
        label: 'Managing Your Vendor & Contestant Data', 
        action: 'sound', 
        value: 'sound_3_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav'
      }          
    ],
    cta: { labelNext: 'Next', labelFinish: 'Finish' }
  },
    {
    type: 'sms_conversation',
    key: 'asfasdf',
    custom_key: 'sms_dialog',
    messages: [
    { 
        sender: 'Carol', 
        text: 'Hey, we need to update our ticket prices for next month\'s rodeo. General admission needs to be $25 now. http://localhost:5173/ . ',
        time: '9:42 AM' 
    },
    { 
        sender: 'Brooke', 
        text: 'I\'ll take care of that right away! While I\'m at it, would you like me to set up the early-bird special we discussed?',
        time: '9:42 AM' 
    },
    { 
        sender: 'Carol', 
        text: 'Oh right! Yes please. Can we do $20 for the first 500 tickets?',
        time: '9:43 AM' 
    },
    { 
        sender: 'Brooke', 
        text: 'Done! I\'ve updated all pricing and added a counter showing tickets remaining at early-bird price. Want to see? [link]',
        time: '9:45 AM' 
    },
    { 
        sender: 'Carol', 
        text: 'That was fast! Looks perfect 👍',
        emoji: '👍',
        time: '9:46 AM' 
    },
    { 
        sender: 'Carol', 
        text: 'While I have you - our main sponsor wants a special VIP package page. Is that something you can help with?',
        time: '9:47 AM' 
    },
    { 
        sender: 'Brooke', 
        text: "Absolutely! I\'ll create a professional landing page with:",
        time: '9:47 AM' 
    },
    { 
        sender: 'Brooke', 
        text: "✓ Photo gallery from last year\n✓ VIP amenities list\n✓ Mobile-friendly purchase button\n✓ Prominent sponsor recognition",
        time: '9:47 AM' 
    },
    { 
        sender: 'Carol', 
        text: 'Perfect - do whatever you think is best. So nice not having to figure out the technical stuff!',
        time: '9:48 AM' 
    },
    { 
        sender: 'Brooke', 
        text: 'By the way, I noticed your event is coming up in 30 days. I think we should:',
        time: '9:49 AM' 
    },
    { 
        sender: 'Brooke', 
        text: "✓ Set up automated email reminders\n✓ Create social media countdown posts\n✓ Update Your Daily Schedule\n✓ Create a title sponsor spotlight section",
        time: '9:49 AM' 
    },
    { 
        sender: 'Carol', 
        text: 'Wow, you guys think of everything! Yes to all of that!',
        emoji: '🙌',
        time: '9:50 AM' 
    },
    { 
        sender: 'Brooke', 
        text: "Great! We will get started right away. Anything else you need help with?",
        time: '9:50 AM' 
    },
    { 
        sender: 'Carol', 
        text: "No, this is perfect. You guys make it so easy! 🙏",
        emoji: '🙏',
        time: '9:51 AM' 
    }
],
    speed: 5,
    cta: { labelNext: 'Next', labelFinish: 'Finish' }
  },
  {
    type: 'image',
    key: 'asfasdf',
    custom_key: 'event_image',
    src: 'https://placehold.co/600x1200/orange/white',
    objectFit: 'cover',
    cta: { labelNext: 'Next', labelFinish: 'Finish' }
  },
  {
    type: 'before_after_slider',
    key: 'afasdfdf',
    custom_key: 'slider_card',      
    imageBefore: 'https://placehold.co/600x1200/orange/white',
    imageAfter: 'https://placehold.co/600x1200/green/white',
    startPosition: 25,
    title: "After working with hundreds of rodeos, we've identified these as the most common technical challenges. Select the ones you'd like solved",
    buttons: [
      { 
        label: "Done-For-You Updates", 
        action: 'link', 
        value: 'schedule_viewed',
        detail: 'https://rodeoevent.com/schedule'
      },
      { 
        label: 'Professional Branding', 
        action: 'link', 
        value: 'tickets_viewed',
        detail: 'https://rodeoevent.com/tickets'
      },
      { 
        label: 'Attendee Communications', 
        action: 'sound', 
        value: 'sound_1_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2568/2568.wav'
      },
      { 
        label: 'Easy Social Media Scheduling', 
        action: 'sound', 
        value: 'sound_2_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav'
      },
      { 
        label: 'Managing Your Vendor & Contestant Data', 
        action: 'sound', 
        value: 'sound_2_played',
        detail: 'https://assets.mixkit.co/active_storage/sfx/2569/2569.wav'
      }          
    ],
    cta: { labelNext: 'Next', labelFinish: 'Finish' }
  },
  {
    type: 'image_carousel',
    key: 'dsafsd',
    custom_key: 'event_gallery',  
    images: [
      'https://placehold.co/600x1200/orange/white/png?text=Bull+Riding',
      'https://placehold.co/600x1200/blue/white/png?text=Barrel+Racing',
      'https://placehold.co/600x1200/green/white/png?text=Crowd+Cheer'
    ],
    objectFit: 'cover',
    backgroundColor: '#000000',
    cta: { labelNext: 'Next', labelFinish: 'Finish' }
  },
  {
    type: "checklist_animation",
    key: "asdfdsfd",
    custom_key: "the_checklist",
    title: "The Checklist",
    description: "the description",
    items: [
      { label: "Step 1 - Introduction", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" },
      { label: "Step 2 - Setup", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" },
      { label: "Step 3 - Finalize", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" }
    ],
    cta: { labelNext: "Next", labelFinish: "Finish" }
  },
  {
    type: "tutorial_slideshow",
    key: "afdsfasd",
    custom_key: "social_post_tutorial",  
    slides: [
      { 
        image: "https://placehold.co/600x1200/orange/white/png?text=Scheduling+Interface", 
        points: [
          {
            x: 50,
            y: 150,
            actions: [
              { action: "sound", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" }
            ],
            zoom: false
          }
        ]
      },
      { 
        image: "https://placehold.co/600x1200/orange/white/png?text=Dashboard+Overview", 
        points: [
          {
            x: 100,
            y: 85,
            actions: [
              { action: "sound", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" }
            ],
            zoom: true
          }
        ]
      },
      { 
        image: "https://placehold.co/600x1200/orange/white/png?text=Post+Creation+Interface", 
        points: [
          {
            x: 60,
            y: 75,
            actions: [
              { action: "popup", content: "All your accounts connect here - Facebook, Instagram, X, LinkedIn are all supported. Need another platform? Just ask our team will add it for you." }
            ],
            zoom: true
          },
          {
            x: 140,
            y: 200,
            actions: [
              { action: "sound", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" }
            ],
            zoom: true
          },
          {
            x: 200,
            y: 250,
            actions: [
              { action: "popup", content: "Upload or select existing gallery images, videos and links - we'll optimize them for each platform and track the results." }
            ],
            zoom: true
          },
          {
            x: 300,
            y: 300,
            actions: [
              { action: "sound", audio: "https://assets.mixkit.co/active_storage/sfx/2569/2569.wav" }
            ],
            zoom: false
          }
        ]
      }
    ],
    cta: { labelNext: "Next", labelFinish: "View More Features" }
  },
  {
    type: "quote_slideshow",
    key: "testimonial_sequence",
    custom_key: "rodeo_transformation",
    title: "Rodeo Committee Success Stories",
    description: "See how other rodeo committees are transforming their events with our all-in-one platform.",
    items: [
      {
        label: "Website Management",
        quote: "Since switching to RodeoSites.com, I haven't touched a line of code. They handle all our updates within hours, and our site looks better than ever.",
        attribution: "- Sarah Johnson, Cowtown Rodeo Committee",
        background: "arena_image.jpg"
      },
      {
        label: "Form Management",
        quote: "Vendor registration used to take weeks of back-and-forth emails. Now they fill out one form, pay instantly, and everything's organized automatically.",
        attribution: "- Mike Thompson, Southwest Rodeo Series",
        background: "vendors_booths.jpg"
      },
      {
        label: "Email Marketing",
        quote: "Our email list has grown from 500 to over 5,000 fans. Druida makes it easy to keep them updated and excited about our events all year long.",
        attribution: "- Lisa Martinez, Rocky Mountain Rodeo Association",
        background: "packed_grandstands.jpg"
      },
      {
        label: "Social Media",
        quote: "I used to spend hours juggling social media posts. Now I schedule everything in one place, and our engagement has never been higher.",
        attribution: "- John Baker, Heartland Rodeo Committee",
        background: "social_posts_grid.jpg"
      }
    ],
    cta: {
      labelNext: "View More Features",
      subText: "5 more ways we automate your rodeo's success"
    }
  },
  {
    type: "form",
    key: "rodeo_registration",
    custom_key: "event_signup",
    title: "Rodeo Event Registration",
    description: "Sign up for the upcoming rodeo event by filling out this form.",
    fields: [
      {
        label: "Full Name",
        type: "text",
        name: "fullName",
        placeholder: "Enter your full name",
        required: true,
        validation: {
          minLength: 3,
          maxLength: 50,
          pattern: "^[a-zA-Z ]+$",
          message: "Name must be between 3 to 50 characters and contain only letters and spaces."
        }
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        required: true,
        validation: {
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          message: "Please enter a valid email address."
        }
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        required: true,
        validation: {
          minLength: 8,
          pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]+$",
          message: "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number."
        }
      },
      {
        label: "Confirm Password",
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm your password",
        required: true,
        validation: {
          matchField: "password",
          message: "Passwords must match."
        }
      },
      {
        label: "Event Day",
        type: "dropdown",
        name: "eventDay",
        options: ["Friday", "Saturday", "Sunday"],
        required: true,
        validation: {
          message: "Please select an event day."
        }
      },
      {
        label: "Participation Type",
        type: "radio",
        name: "participationType",
        options: [
          { label: "Competitor", value: "competitor" },
          { label: "Vendor", value: "vendor" },
          { label: "Spectator", value: "spectator" }
        ],
        required: true,
        validation: {
          message: "Please select a participation type."
        }
      },
      {
        label: "T-shirt Size",
        type: "checkbox",
        name: "tshirtSize",
        options: [
          { label: "Small", value: "S" },
          { label: "Medium", value: "M" },
          { label: "Large", value: "L" },
          { label: "XL", value: "XL" }
        ],
        required: true,
        validation: {
          message: "Please select at least one size."
        }
      },
      {
        label: "Upload Proof of Participation",
        type: "file",
        name: "proofUpload",
        acceptedFileTypes: ["image/png", "application/pdf"],
        required: false,
        validation: {
          message: "Only PNG and PDF files are accepted."
        }
      }
    ],
    cta: {
      labelNext: "Submit",
      labelFinish: "Finish",
      onSubmit: "submitRodeoForm"
    }
  }
];