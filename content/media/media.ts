import type { Locale } from "@/types/i18n";

interface LocalizedVideoCopy {
  title: string;
  description: string;
}

export interface MediaVideo extends LocalizedVideoCopy {
  id: string;
  youtubeId: string;
  url: string;
  format: "video" | "short";
}

export interface MediaPageCopy {
  seo: {
    title: string;
    description: string;
  };
  badge: string;
  heading: string;
  description: string;
  playVideo: string;
  watchOnYouTube: string;
  videoLabel: string;
  shortLabel: string;
  disclaimer: string;
  ctaTitle: string;
  ctaDescription: string;
  bookingLabel: string;
  whatsappLabel: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

const pageCopy: Record<Locale, MediaPageCopy> = {
  en: {
    seo: {
      title: "Patient Video Reviews | Maiv Thoj Viet Lao",
      description:
        "Watch patient journeys, dental review videos and cosmetic smile stories from Lao customers receiving coordinated dental care in Vietnam.",
    },
    badge: "Real journeys Â· Real voices",
    heading: "Patient stories, shared in their own words",
    description:
      "Watch moments from dental journeys between Laos and Vietnam, patient conversations and cosmetic smile references from An Nhien Dental.",
    playVideo: "Play video",
    watchOnYouTube: "Watch on YouTube",
    videoLabel: "Video",
    shortLabel: "YouTube Short",
    disclaimer:
      "Every patient is different and individual results may vary. A dentist must examine your oral health before recommending treatment.",
    ctaTitle: "Would you like to discuss your own smile journey?",
    ctaDescription:
      "Share your concerns with our team before making a decision. We can help you understand the next step and coordinate your journey to Vietnam.",
    bookingLabel: "Start your journey",
    whatsappLabel: "Talk on WhatsApp",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Patient videos",
  },
  hmn: {
    seo: {
      title: "Neeg Tuaj Kho Hniav Qhia | Maiv Thoj Viet Lao",
      description:
        "Saib cov neeg Nplog tuaj kho hniav hauv Nyab Laj qhia lawv txoj kev taug, lawv qhov kev xav thiab kev hloov hniav kom zoo nkauj.",
    },
    badge: "Txoj kev tiag Â· Lus qhia tiag",
    heading: "Cov neeg tuaj kho hniav qhia lawv zaj dab neeg",
    description:
      "Saib cov sijhawm ntawm txoj kev tuaj kho hniav ntawm Nplog teb thiab Nyab Laj, kev sib tham nrog cov neeg tuaj kho hniav thiab cov qauv hniav zoo nkauj ntawm An Nhien Dental.",
    playVideo: "Qhib saib yeeb yaj kiab",
    watchOnYouTube: "Saib hauv YouTube",
    videoLabel: "Yeeb yaj kiab",
    shortLabel: "YouTube Short",
    disclaimer:
      "Txhua tus neeg qhov xwm txheej txawv thiab qhov tshwm sim yuav tsis zoo ib yam. Tus kws kho hniav yuav tsum tshuaj xyuas ua ntej qhia hom kev kho.",
    ctaTitle: "Koj puas xav tham txog koj txoj kev kho hniav?",
    ctaDescription:
      "Qhia koj qhov kev txhawj xeeb rau peb pab neeg ua ntej txiav txim siab. Peb yuav pab piav kauj ruam tom ntej thiab npaj koj txoj kev tuaj Nyab Laj.",
    bookingLabel: "Pib koj txoj kev taug",
    whatsappLabel: "Tham hauv WhatsApp",
    breadcrumbHome: "Tsev",
    breadcrumbCurrent: "Yeeb yaj kiab neeg tuaj kho hniav",
  },
  vi: {
    seo: {
      title: "Video Cáº£m Nháº­n KhÃ¡ch HÃ ng | Maiv Thoj Viet Lao",
      description:
        "Xem hÃ nh trÃ¬nh lÃ m rÄƒng, video review vÃ  chia sáº» thá»±c táº¿ cá»§a khÃ¡ch hÃ ng LÃ o Ä‘Æ°á»£c Ä‘á»“ng hÃ nh sang Viá»‡t Nam lÃ m rÄƒng tháº©m má»¹.",
    },
    badge: "HÃ nh trÃ¬nh tháº­t Â· Cáº£m nháº­n tháº­t",
    heading: "KhÃ¡ch hÃ ng chia sáº» báº±ng chÃ­nh cÃ¢u chuyá»‡n cá»§a mÃ¬nh",
    description:
      "Theo dÃµi nhá»¯ng khoáº£nh kháº¯c trong hÃ nh trÃ¬nh lÃ m rÄƒng tá»« LÃ o sang Viá»‡t Nam, cÃ¡c cuá»™c trÃ² chuyá»‡n vá»›i khÃ¡ch hÃ ng vÃ  nhá»¯ng máº«u rÄƒng tháº©m má»¹ táº¡i Nha khoa An NhiÃªn.",
    playVideo: "PhÃ¡t video",
    watchOnYouTube: "Xem trÃªn YouTube",
    videoLabel: "Video",
    shortLabel: "YouTube Short",
    disclaimer:
      "Má»—i khÃ¡ch hÃ ng cÃ³ tÃ¬nh tráº¡ng khÃ¡c nhau vÃ  káº¿t quáº£ thá»±c táº¿ cÃ³ thá»ƒ khÃ¡c nhau. BÃ¡c sÄ© cáº§n thÄƒm khÃ¡m trÆ°á»›c khi Ä‘Æ°a ra chá»‰ Ä‘á»‹nh Ä‘iá»u trá»‹.",
    ctaTitle: "Báº¡n muá»‘n trao Ä‘á»•i vá» hÃ nh trÃ¬nh lÃ m rÄƒng cá»§a mÃ¬nh?",
    ctaDescription:
      "HÃ£y chia sáº» Ä‘iá»u báº¡n Ä‘ang quan tÃ¢m trÆ°á»›c khi quyáº¿t Ä‘á»‹nh. Äá»™i ngÅ© cá»§a chÃºng tÃ´i sáº½ giÃºp báº¡n hiá»ƒu bÆ°á»›c tiáº¿p theo vÃ  phá»‘i há»£p hÃ nh trÃ¬nh sang Viá»‡t Nam.",
    bookingLabel: "Báº¯t Ä‘áº§u hÃ nh trÃ¬nh",
    whatsappLabel: "Trao Ä‘á»•i qua WhatsApp",
    breadcrumbHome: "Trang chá»§",
    breadcrumbCurrent: "Video khÃ¡ch hÃ ng",
  },
  th: {
    seo: {
      title: "à¸§à¸´à¸”à¸µà¹‚à¸­à¸£à¸µà¸§à¸´à¸§à¸ˆà¸²à¸à¸¥à¸¹à¸à¸„à¹‰à¸² | Maiv Thoj Viet Lao",
      description:
        "à¸£à¸±à¸šà¸Šà¸¡à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸à¸²à¸£à¸—à¸³à¸Ÿà¸±à¸™ à¸§à¸´à¸”à¸µà¹‚à¸­à¸£à¸µà¸§à¸´à¸§ à¹à¸¥à¸°à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸ˆà¸£à¸´à¸‡à¸‚à¸­à¸‡à¸¥à¸¹à¸à¸„à¹‰à¸²à¸Šà¸²à¸§à¸¥à¸²à¸§à¸—à¸µà¹ˆà¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸¡à¸²à¸—à¸³à¸Ÿà¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸‡à¸²à¸¡à¹ƒà¸™à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡",
    },
    badge: "à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸ˆà¸£à¸´à¸‡ Â· à¸„à¸§à¸²à¸¡à¸£à¸¹à¹‰à¸ªà¸¶à¸à¸ˆà¸£à¸´à¸‡",
    heading: "à¹€à¸£à¸·à¹ˆà¸­à¸‡à¸£à¸²à¸§à¸ˆà¸²à¸à¸¥à¸¹à¸à¸„à¹‰à¸²à¸œà¹ˆà¸²à¸™à¸„à¸³à¸šà¸­à¸à¹€à¸¥à¹ˆà¸²à¸‚à¸­à¸‡à¸žà¸§à¸à¹€à¸‚à¸²",
    description:
      "à¸£à¸±à¸šà¸Šà¸¡à¸Šà¹ˆà¸§à¸‡à¹€à¸§à¸¥à¸²à¸ˆà¸²à¸à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸—à¸³à¸Ÿà¸±à¸™à¸£à¸°à¸«à¸§à¹ˆà¸²à¸‡à¸¥à¸²à¸§à¹à¸¥à¸°à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡ à¸šà¸—à¸ªà¸™à¸—à¸™à¸²à¸à¸±à¸šà¸¥à¸¹à¸à¸„à¹‰à¸² à¹à¸¥à¸°à¸•à¸±à¸§à¸­à¸¢à¹ˆà¸²à¸‡à¸£à¸­à¸¢à¸¢à¸´à¹‰à¸¡à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸‡à¸²à¸¡à¸ˆà¸²à¸ An Nhien Dental",
    playVideo: "à¹€à¸¥à¹ˆà¸™à¸§à¸´à¸”à¸µà¹‚à¸­",
    watchOnYouTube: "à¸”à¸¹à¸šà¸™ YouTube",
    videoLabel: "à¸§à¸´à¸”à¸µà¹‚à¸­",
    shortLabel: "YouTube Short",
    disclaimer:
      "à¸¥à¸¹à¸à¸„à¹‰à¸²à¹à¸•à¹ˆà¸¥à¸°à¸„à¸™à¸¡à¸µà¸ªà¸ à¸²à¸žà¸Šà¹ˆà¸­à¸‡à¸›à¸²à¸à¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™à¹à¸¥à¸°à¸œà¸¥à¸¥à¸±à¸žà¸˜à¹Œà¸­à¸²à¸ˆà¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™ à¸—à¸±à¸™à¸•à¹à¸žà¸—à¸¢à¹Œà¸•à¹‰à¸­à¸‡à¸•à¸£à¸§à¸ˆà¸›à¸£à¸°à¹€à¸¡à¸´à¸™à¸à¹ˆà¸­à¸™à¹à¸™à¸°à¸™à¸³à¸à¸²à¸£à¸£à¸±à¸à¸©à¸²",
    ctaTitle: "à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸žà¸¹à¸”à¸„à¸¸à¸¢à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸£à¸­à¸¢à¸¢à¸´à¹‰à¸¡à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸«à¸£à¸·à¸­à¹„à¸¡à¹ˆ?",
    ctaDescription:
      "à¹à¸šà¹ˆà¸‡à¸›à¸±à¸™à¸‚à¹‰à¸­à¸à¸±à¸‡à¸§à¸¥à¸à¸±à¸šà¸—à¸µà¸¡à¸‚à¸­à¸‡à¹€à¸£à¸²à¸à¹ˆà¸­à¸™à¸•à¸±à¸”à¸ªà¸´à¸™à¹ƒà¸ˆ à¹€à¸£à¸²à¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¸­à¸˜à¸´à¸šà¸²à¸¢à¸‚à¸±à¹‰à¸™à¸•à¸­à¸™à¸–à¸±à¸”à¹„à¸›à¹à¸¥à¸°à¸›à¸£à¸°à¸ªà¸²à¸™à¸‡à¸²à¸™à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸¡à¸²à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡",
    bookingLabel: "à¹€à¸£à¸´à¹ˆà¸¡à¸•à¹‰à¸™à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸‚à¸­à¸‡à¸„à¸¸à¸“",
    whatsappLabel: "à¸žà¸¹à¸”à¸„à¸¸à¸¢à¸—à¸²à¸‡ WhatsApp",
    breadcrumbHome: "à¸«à¸™à¹‰à¸²à¸«à¸¥à¸±à¸",
    breadcrumbCurrent: "à¸§à¸´à¸”à¸µà¹‚à¸­à¸ˆà¸²à¸à¸¥à¸¹à¸à¸„à¹‰à¸²",
  },
  lo: {
    seo: {
      title: "àº§àº´àº”àºµà»‚àº­àº£àºµàº§àº´àº§àºˆàº²àºàº¥àº¹àºàº„à»‰àº² | Maiv Thoj Viet Lao",
      description:
        "àº®àº±àºšàºŠàº»àº¡àºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àº¡àº²à»€àº®àº±àº”à»àº‚à»‰àº§ àº§àº´àº”àºµà»‚àº­àº£àºµàº§àº´àº§ à»àº¥àº° àº„àº§àº²àº¡àº®àº¹à»‰àºªàº¶àºàºˆàº´àº‡àº‚àº­àº‡àº¥àº¹àºàº„à»‰àº²àº¥àº²àº§àº—àºµà»ˆàº¡àº²à»€àº®àº±àº”à»àº‚à»‰àº§àº¢àº¹à»ˆàº«àº§àº½àº”àº™àº²àº¡.",
    },
    badge: "àºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àºˆàº´àº‡ Â· àº„àº§àº²àº¡àº®àº¹à»‰àºªàº¶àºàºˆàº´àº‡",
    heading: "à»€àº¥àº·à»ˆàº­àº‡àº¥àº²àº§àºˆàº²àºàº„àº³àºšàº­àºà»€àº¥àº»à»ˆàº²àº‚àº­àº‡àº¥àº¹àºàº„à»‰àº²",
    description:
      "àº®àº±àºšàºŠàº»àº¡àºŠà»ˆàº§àº‡à»€àº§àº¥àº²àºˆàº²àºàºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àº¡àº²à»€àº®àº±àº”à»àº‚à»‰àº§àº¥àº°àº«àº§à»ˆàº²àº‡àº¥àº²àº§à»àº¥àº°àº«àº§àº½àº”àº™àº²àº¡ àºàº²àº™àºªàº³àºžàº²àº”àº¥àº¹àºàº„à»‰àº² à»àº¥àº° àº•àº»àº§àº¢à»ˆàº²àº‡à»àº‚à»‰àº§àº‡àº²àº¡àºˆàº²àº An Nhien Dental.",
    playVideo: "à»€àº›àºµàº”àº§àº´àº”àºµà»‚àº­",
    watchOnYouTube: "à»€àºšàº´à»ˆàº‡à»ƒàº™ YouTube",
    videoLabel: "àº§àº´àº”àºµà»‚àº­",
    shortLabel: "YouTube Short",
    disclaimer:
      "àº¥àº¹àºàº„à»‰àº²à»àº•à»ˆàº¥àº°àº„àº»àº™àº¡àºµàºªàº°àºžàº²àºšà»àº‚à»‰àº§à»àº•àºàº•à»ˆàº²àº‡àºàº±àº™ à»àº¥àº° àºœàº»àº™àº¥àº±àºšàº­àº²àº”à»àº•àºàº•à»ˆàº²àº‡àºàº±àº™. àº—àº±àº™àº•àº°à»àºžàº”àº•à»‰àº­àº‡àºàº§àº”àºà»ˆàº­àº™à»àº™àº°àº™àº³àºàº²àº™àº®àº±àºàºªàº².",
    ctaTitle: "àº—à»ˆàº²àº™àº¢àº²àºàº›àº¶àºàºªàº²à»€àº¥àº·à»ˆàº­àº‡àºàº²àº™à»€àº®àº±àº”à»àº‚à»‰àº§àº‚àº­àº‡àº—à»ˆàº²àº™àºšà»?",
    ctaDescription:
      "àºšàº­àºàºªàº´à»ˆàº‡àº—àºµà»ˆàº—à»ˆàº²àº™àºàº±àº‡àº§àº»àº™à»ƒàº«à»‰àº—àºµàº¡àº‡àº²àº™àº®àº¹à»‰àºà»ˆàº­àº™àº•àº±àº”àºªàº´àº™à»ƒàºˆ. àºžàº§àºà»€àº®àº»àº²àºˆàº°àºŠà»ˆàº§àºàº­àº°àº—àº´àºšàº²àºàº‚àº±à»‰àº™àº•àº­àº™àº•à»à»ˆà»„àº› à»àº¥àº° àº›àº°àºªàº²àº™àº‡àº²àº™àºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àº¡àº²àº«àº§àº½àº”àº™àº²àº¡.",
    bookingLabel: "à»€àº¥àºµà»ˆàº¡àºàº²àº™à»€àº”àºµàº™àº—àº²àº‡",
    whatsappLabel: "àºªàº»àº™àº—àº°àº™àº²àº—àº²àº‡ WhatsApp",
    breadcrumbHome: "à»œà»‰àº²àº«àº¼àº±àº",
    breadcrumbCurrent: "àº§àº´àº”àºµà»‚àº­àºˆàº²àºàº¥àº¹àºàº„à»‰àº²",
  },
};

const videos = [
  {
    id: "five-lao-guests-cosmetic-crowns",
    youtubeId: "K9t71wK9S7M",
    url: "https://youtu.be/K9t71wK9S7M",
    format: "video",
    copy: {
      en: {
        title:
          "Maiv Thoj accompanies five Lao guests to Vietnam for cosmetic dental crowns",
        description:
          "Follow a group of five guests traveling from Laos to Vietnam with Maiv Thoj for their coordinated cosmetic dental journey.",
      },
      hmn: {
        title:
          "Maiv Thoj coj 5 tus qhua Nplog tuaj Nyab Laj looj hniav kom zoo nkauj",
        description:
          "Saib txoj kev ntawm 5 tus qhua tuaj ntawm Nplog teb nrog Maiv Thoj tuaj Nyab Laj kho thiab looj hniav kom zoo nkauj.",
      },
      vi: {
        title:
          "Maiv Thoj Ä‘á»“ng hÃ nh cÃ¹ng 5 khÃ¡ch LÃ o sang Viá»‡t Nam lÃ m rÄƒng sá»© tháº©m má»¹",
        description:
          "Theo chÃ¢n nhÃ³m 5 khÃ¡ch hÃ ng tá»« LÃ o sang Viá»‡t Nam cÃ¹ng Maiv Thoj trong hÃ nh trÃ¬nh lÃ m rÄƒng sá»© tháº©m má»¹ Ä‘Æ°á»£c phá»‘i há»£p trá»n váº¹n.",
      },
      th: {
        title:
          "Maiv Thoj à¸”à¸¹à¹à¸¥à¸¥à¸¹à¸à¸„à¹‰à¸²à¸Šà¸²à¸§à¸¥à¸²à¸§ 5 à¸„à¸™à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸¡à¸²à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡à¹€à¸žà¸·à¹ˆà¸­à¸—à¸³à¸„à¸£à¸­à¸šà¸Ÿà¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸‡à¸²à¸¡",
        description:
          "à¸•à¸´à¸”à¸•à¸²à¸¡à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸‚à¸­à¸‡à¸¥à¸¹à¸à¸„à¹‰à¸² 5 à¸„à¸™à¸ˆà¸²à¸à¸¥à¸²à¸§à¸—à¸µà¹ˆà¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸¡à¸²à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡à¸žà¸£à¹‰à¸­à¸¡ Maiv Thoj à¹€à¸žà¸·à¹ˆà¸­à¸—à¸³à¸Ÿà¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸‡à¸²à¸¡",
      },
      lo: {
        title:
          "Maiv Thoj àºžàº²àº¥àº¹àºàº„à»‰àº²àº¥àº²àº§ 5 àº„àº»àº™àº¡àº²àº«àº§àº½àº”àº™àº²àº¡à»€àºžàº·à»ˆàº­à»€àº®àº±àº”à»àº‚à»‰àº§àº„àº­àºšà»€àºžàº·à»ˆàº­àº„àº§àº²àº¡àº‡àº²àº¡",
        description:
          "àº•àº´àº”àº•àº²àº¡àºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àº‚àº­àº‡àº¥àº¹àºàº„à»‰àº² 5 àº„àº»àº™àºˆàº²àºàº¥àº²àº§àº—àºµà»ˆàº¡àº²àº«àº§àº½àº”àº™àº²àº¡àºàº±àºš Maiv Thoj à»€àºžàº·à»ˆàº­à»€àº®àº±àº”à»àº‚à»‰àº§à»€àºžàº·à»ˆàº­àº„àº§àº²àº¡àº‡àº²àº¡.",
      },
    },
  },
  {
    id: "lao-guest-new-smile-interview",
    youtubeId: "TUaGpD0CCmA",
    url: "https://youtube.com/shorts/TUaGpD0CCmA?feature=share",
    format: "short",
    copy: {
      en: {
        title: "A Lao guest shares how she feels about her new smile",
        description:
          "The guest describes being unhappy with dental work that felt too large and bulky, then shares her satisfaction after receiving coordinated care in Vietnam.",
      },
      hmn: {
        title: "Tus qhua Nplog qhia nws qhov kev zoo siab txog cov hniav tshiab",
        description:
          "Tus qhua qhia tias cov hniav qub loj thiab tuab dhau ua rau nws tsis txaus siab. Tom qab tuaj kho hauv Nyab Laj, nws zoo siab rau nws cov hniav tshiab.",
      },
      vi: {
        title: "KhÃ¡ch LÃ o chia sáº» cáº£m nháº­n vá» bá»™ rÄƒng má»›i",
        description:
          "KhÃ¡ch hÃ ng tá»«ng chÆ°a hÃ i lÃ²ng vÃ¬ bá»™ rÄƒng cÅ© vá»«a to vá»«a thÃ´. Sau hÃ nh trÃ¬nh Ä‘Æ°á»£c Maiv Thoj Ä‘á»“ng hÃ nh sang Viá»‡t Nam, khÃ¡ch chia sáº» sá»± hÃ i lÃ²ng vá»›i ná»¥ cÆ°á»i má»›i.",
      },
      th: {
        title: "à¸¥à¸¹à¸à¸„à¹‰à¸²à¸Šà¸²à¸§à¸¥à¸²à¸§à¹€à¸¥à¹ˆà¸²à¸„à¸§à¸²à¸¡à¸£à¸¹à¹‰à¸ªà¸¶à¸à¸—à¸µà¹ˆà¸¡à¸µà¸•à¹ˆà¸­à¸£à¸­à¸¢à¸¢à¸´à¹‰à¸¡à¹ƒà¸«à¸¡à¹ˆ",
        description:
          "à¸¥à¸¹à¸à¸„à¹‰à¸²à¹€à¸„à¸¢à¹„à¸¡à¹ˆà¸žà¸­à¹ƒà¸ˆà¸à¸±à¸šà¸Ÿà¸±à¸™à¹€à¸”à¸´à¸¡à¸—à¸µà¹ˆà¸”à¸¹à¹ƒà¸«à¸à¹ˆà¹à¸¥à¸°à¸«à¸™à¸² à¸«à¸¥à¸±à¸‡à¹„à¸”à¹‰à¸£à¸±à¸šà¸à¸²à¸£à¸”à¸¹à¹à¸¥à¹ƒà¸™à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡ à¹€à¸˜à¸­à¹€à¸¥à¹ˆà¸²à¸–à¸¶à¸‡à¸„à¸§à¸²à¸¡à¸žà¸­à¹ƒà¸ˆà¸à¸±à¸šà¸Ÿà¸±à¸™à¸Šà¸¸à¸”à¹ƒà¸«à¸¡à¹ˆ",
      },
      lo: {
        title: "àº¥àº¹àºàº„à»‰àº²àº¥àº²àº§à»àºšà»ˆàº‡àº›àº±àº™àº„àº§àº²àº¡àº®àº¹à»‰àºªàº¶àºàº•à»à»ˆà»àº‚à»‰àº§àºŠàº¸àº”à»ƒà»à»ˆ",
        description:
          "àºà»ˆàº­àº™à»œà»‰àº²àº™àºµà»‰àº¥àº¹àºàº„à»‰àº²àºšà»à»ˆàºžà»à»ƒàºˆà»€àºžàº²àº°à»àº‚à»‰àº§à»€àºšàº´à»ˆàº‡à»ƒàº«àºà»ˆà»àº¥àº°à»œàº². àº«àº¼àº±àº‡àºˆàº²àºàº¡àº²àº®àº±àºšàºàº²àº™àº”àº¹à»àº¥àº¢àº¹à»ˆàº«àº§àº½àº”àº™àº²àº¡ àº¥àº¹àºàº„à»‰àº²à»„àº”à»‰à»àºšà»ˆàº‡àº›àº±àº™àº„àº§àº²àº¡àºžà»à»ƒàºˆàº•à»à»ˆàº®àº­àºàºàº´à»‰àº¡à»ƒà»à»ˆ.",
      },
    },
  },
  {
    id: "an-nhien-smile-designs",
    youtubeId: "RyeiINkPjVg",
    url: "https://youtube.com/shorts/RyeiINkPjVg",
    format: "short",
    copy: {
      en: {
        title: "Explore cosmetic smile designs at An Nhien Dental",
        description:
          "A closer look at aesthetic tooth shapes and smile references available for discussion at An Nhien Dental.",
      },
      hmn: {
        title: "Saib cov qauv hniav zoo nkauj ntawm An Nhien Dental",
        description:
          "Saib ze cov qauv hniav thiab luag ntxhi zoo nkauj uas koj siv tau los tham nrog pab kws kho hniav ntawm An Nhien Dental.",
      },
      vi: {
        title: "Tham kháº£o cÃ¡c máº«u rÄƒng tháº©m má»¹ táº¡i Nha khoa An NhiÃªn",
        description:
          "KhÃ¡m phÃ¡ cáº­n cáº£nh cÃ¡c dÃ¡ng rÄƒng vÃ  máº«u ná»¥ cÆ°á»i tháº©m má»¹ Ä‘á»ƒ tham kháº£o khi trao Ä‘á»•i cÃ¹ng Ä‘á»™i ngÅ© Nha khoa An NhiÃªn.",
      },
      th: {
        title: "à¸Šà¸¡à¸•à¸±à¸§à¸­à¸¢à¹ˆà¸²à¸‡à¸£à¸¹à¸›à¸—à¸£à¸‡à¸Ÿà¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸‡à¸²à¸¡à¸—à¸µà¹ˆ An Nhien Dental",
        description:
          "à¸Šà¸¡à¸£à¸¹à¸›à¸—à¸£à¸‡à¸Ÿà¸±à¸™à¹à¸¥à¸°à¸•à¸±à¸§à¸­à¸¢à¹ˆà¸²à¸‡à¸£à¸­à¸¢à¸¢à¸´à¹‰à¸¡à¸­à¸¢à¹ˆà¸²à¸‡à¹ƒà¸à¸¥à¹‰à¸Šà¸´à¸” à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸Šà¹‰à¸›à¸£à¸°à¸à¸­à¸šà¸à¸²à¸£à¸žà¸¹à¸”à¸„à¸¸à¸¢à¸à¸±à¸šà¸—à¸µà¸¡à¸—à¸±à¸™à¸•à¹à¸žà¸—à¸¢à¹Œà¸‚à¸­à¸‡ An Nhien Dental",
      },
      lo: {
        title: "àº®àº±àºšàºŠàº»àº¡àº•àº»àº§àº¢à»ˆàº²àº‡àº®àº¹àºšàºŠàº»àº‡à»àº‚à»‰àº§àº—àºµà»ˆ An Nhien Dental",
        description:
          "à»€àºšàº´à»ˆàº‡àº®àº¹àºšàºŠàº»àº‡à»àº‚à»‰àº§ à»àº¥àº° àº•àº»àº§àº¢à»ˆàº²àº‡àº®àº­àºàºàº´à»‰àº¡à»€àºžàº·à»ˆàº­à»ƒàºŠà»‰àº›àº°àºàº­àºšàºàº²àº™àº›àº¶àºàºªàº²àºàº±àºšàº—àºµàº¡àº—àº±àº™àº•àº°à»àºžàº”àº‚àº­àº‡ An Nhien Dental.",
      },
    },
  },
  {
    id: "lao-customer-testimonial",
    youtubeId: "C1wAix5oJhk",
    url: "https://youtube.com/shorts/C1wAix5oJhk",
    format: "short",
    copy: {
      en: {
        title: "A customer from Laos shares her dental experience",
        description:
          "Hear directly from a Lao customer as she shares her thoughts about her dental journey and the support she received.",
      },
      hmn: {
        title: "Tus poj niam qhua Nplog qhia nws qhov kev xav tom qab kho hniav",
        description:
          "Mloog tus qhua tuaj ntawm Nplog teb qhia txog nws txoj kev kho hniav thiab txoj kev pab uas nws tau txais.",
      },
      vi: {
        title: "KhÃ¡ch hÃ ng tá»« LÃ o chia sáº» cáº£m nháº­n sau khi lÃ m rÄƒng",
        description:
          "Láº¯ng nghe trá»±c tiáº¿p chia sáº» cá»§a chá»‹ khÃ¡ch Ä‘áº¿n tá»« LÃ o vá» hÃ nh trÃ¬nh lÃ m rÄƒng vÃ  sá»± há»— trá»£ chá»‹ Ä‘Ã£ nháº­n Ä‘Æ°á»£c.",
      },
      th: {
        title: "à¸¥à¸¹à¸à¸„à¹‰à¸²à¸ˆà¸²à¸à¸¥à¸²à¸§à¹à¸šà¹ˆà¸‡à¸›à¸±à¸™à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸«à¸¥à¸±à¸‡à¸—à¸³à¸Ÿà¸±à¸™",
        description:
          "à¸£à¸±à¸šà¸Ÿà¸±à¸‡à¸¥à¸¹à¸à¸„à¹‰à¸²à¸Šà¸²à¸§à¸¥à¸²à¸§à¹€à¸¥à¹ˆà¸²à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸à¸²à¸£à¸—à¸³à¸Ÿà¸±à¸™à¹à¸¥à¸°à¸à¸²à¸£à¸”à¸¹à¹à¸¥à¸—à¸µà¹ˆà¹€à¸˜à¸­à¹„à¸”à¹‰à¸£à¸±à¸šà¸•à¸¥à¸­à¸”à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡",
      },
      lo: {
        title: "àº¥àº¹àºàº„à»‰àº²àºˆàº²àºàº¥àº²àº§à»àºšà»ˆàº‡àº›àº±àº™àº„àº§àº²àº¡àº®àº¹à»‰àºªàº¶àºàº«àº¼àº±àº‡à»€àº®àº±àº”à»àº‚à»‰àº§",
        description:
          "àº®àº±àºšàºŸàº±àº‡àº¥àº¹àºàº„à»‰àº²àº¥àº²àº§à»àºšà»ˆàº‡àº›àº±àº™à»‚àº”àºàºàº»àº‡àºà»ˆàº½àº§àºàº±àºšàºàº²àº™à»€àº”àºµàº™àº—àº²àº‡àº¡àº²à»€àº®àº±àº”à»àº‚à»‰àº§ à»àº¥àº° àºàº²àº™àº”àº¹à»àº¥àº—àºµà»ˆàº™àº²àº‡à»„àº”à»‰àº®àº±àºš.",
      },
    },
  },
] as const;

export function getMediaPageCopy(locale: Locale) {
  return pageCopy[locale] ?? pageCopy.en;
}

export function getMediaVideos(locale: Locale): MediaVideo[] {
  return videos.map((video) => ({
    id: video.id,
    youtubeId: video.youtubeId,
    url: video.url,
    format: video.format,
    ...(video.copy[locale] ?? video.copy.en),
  }));
}

