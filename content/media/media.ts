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
    badge: "Real journeys · Real voices",
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
    badge: "Txoj kev tiag · Lus qhia tiag",
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
      title: "Video Cảm Nhận Khách Hàng | Maiv Thoj Viet Lao",
      description:
        "Xem hành trình làm răng, video review và chia sẻ thực tế của khách hàng Lào được đồng hành sang Việt Nam làm răng thẩm mỹ.",
    },
    badge: "Hành trình thật · Cảm nhận thật",
    heading: "Khách hàng chia sẻ bằng chính câu chuyện của mình",
    description:
      "Theo dõi những khoảnh khắc trong hành trình làm răng từ Lào sang Việt Nam, các cuộc trò chuyện với khách hàng và những mẫu răng thẩm mỹ tại Nha khoa An Nhiên.",
    playVideo: "Phát video",
    watchOnYouTube: "Xem trên YouTube",
    videoLabel: "Video",
    shortLabel: "YouTube Short",
    disclaimer:
      "Mỗi khách hàng có tình trạng khác nhau và kết quả thực tế có thể khác nhau. Bác sĩ cần thăm khám trước khi đưa ra chỉ định điều trị.",
    ctaTitle: "Bạn muốn trao đổi về hành trình làm răng của mình?",
    ctaDescription:
      "Hãy chia sẻ điều bạn đang quan tâm trước khi quyết định. Đội ngũ của chúng tôi sẽ giúp bạn hiểu bước tiếp theo và phối hợp hành trình sang Việt Nam.",
    bookingLabel: "Bắt đầu hành trình",
    whatsappLabel: "Trao đổi qua WhatsApp",
    breadcrumbHome: "Trang chủ",
    breadcrumbCurrent: "Video khách hàng",
  },
  th: {
    seo: {
      title: "วิดีโอรีวิวจากลูกค้า | Maiv Thoj Viet Lao",
      description:
        "รับชมเส้นทางการทำฟัน วิดีโอรีวิว และประสบการณ์จริงของลูกค้าชาวลาวที่เดินทางมาทำฟันเพื่อความงามในเวียดนาม",
    },
    badge: "เส้นทางจริง · ความรู้สึกจริง",
    heading: "เรื่องราวจากลูกค้าผ่านคำบอกเล่าของพวกเขา",
    description:
      "รับชมช่วงเวลาจากการเดินทางทำฟันระหว่างลาวและเวียดนาม บทสนทนากับลูกค้า และตัวอย่างรอยยิ้มเพื่อความงามจาก An Nhien Dental",
    playVideo: "เล่นวิดีโอ",
    watchOnYouTube: "ดูบน YouTube",
    videoLabel: "วิดีโอ",
    shortLabel: "YouTube Short",
    disclaimer:
      "ลูกค้าแต่ละคนมีสภาพช่องปากแตกต่างกันและผลลัพธ์อาจแตกต่างกัน ทันตแพทย์ต้องตรวจประเมินก่อนแนะนำการรักษา",
    ctaTitle: "ต้องการพูดคุยเกี่ยวกับเส้นทางรอยยิ้มของคุณหรือไม่?",
    ctaDescription:
      "แบ่งปันข้อกังวลกับทีมของเราก่อนตัดสินใจ เราจะช่วยอธิบายขั้นตอนถัดไปและประสานงานการเดินทางมาเวียดนาม",
    bookingLabel: "เริ่มต้นเส้นทางของคุณ",
    whatsappLabel: "พูดคุยทาง WhatsApp",
    breadcrumbHome: "หน้าหลัก",
    breadcrumbCurrent: "วิดีโอจากลูกค้า",
  },
  lo: {
    seo: {
      title: "ວິດີໂອຣີວິວຈາກລູກຄ້າ | Maiv Thoj Viet Lao",
      description:
        "ຮັບຊົມການເດີນທາງມາເຮັດແຂ້ວ ວິດີໂອຣີວິວ ແລະ ຄວາມຮູ້ສຶກຈິງຂອງລູກຄ້າລາວທີ່ມາເຮັດແຂ້ວຢູ່ຫວຽດນາມ.",
    },
    badge: "ການເດີນທາງຈິງ · ຄວາມຮູ້ສຶກຈິງ",
    heading: "ເລື່ອງລາວຈາກຄຳບອກເລົ່າຂອງລູກຄ້າ",
    description:
      "ຮັບຊົມຊ່ວງເວລາຈາກການເດີນທາງມາເຮັດແຂ້ວລະຫວ່າງລາວແລະຫວຽດນາມ ການສຳພາດລູກຄ້າ ແລະ ຕົວຢ່າງແຂ້ວງາມຈາກ An Nhien Dental.",
    playVideo: "ເປີດວິດີໂອ",
    watchOnYouTube: "ເບິ່ງໃນ YouTube",
    videoLabel: "ວິດີໂອ",
    shortLabel: "YouTube Short",
    disclaimer:
      "ລູກຄ້າແຕ່ລະຄົນມີສະພາບແຂ້ວແຕກຕ່າງກັນ ແລະ ຜົນລັບອາດແຕກຕ່າງກັນ. ທັນຕະແພດຕ້ອງກວດກ່ອນແນະນຳການຮັກສາ.",
    ctaTitle: "ທ່ານຢາກປຶກສາເລື່ອງການເຮັດແຂ້ວຂອງທ່ານບໍ?",
    ctaDescription:
      "ບອກສິ່ງທີ່ທ່ານກັງວົນໃຫ້ທີມງານຮູ້ກ່ອນຕັດສິນໃຈ. ພວກເຮົາຈະຊ່ວຍອະທິບາຍຂັ້ນຕອນຕໍ່ໄປ ແລະ ປະສານງານການເດີນທາງມາຫວຽດນາມ.",
    bookingLabel: "ເລີ່ມການເດີນທາງ",
    whatsappLabel: "ສົນທະນາທາງ WhatsApp",
    breadcrumbHome: "ໜ້າຫຼັກ",
    breadcrumbCurrent: "ວິດີໂອຈາກລູກຄ້າ",
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
          "Maiv Thoj đồng hành cùng 5 khách Lào sang Việt Nam làm răng sứ thẩm mỹ",
        description:
          "Theo chân nhóm 5 khách hàng từ Lào sang Việt Nam cùng Maiv Thoj trong hành trình làm răng sứ thẩm mỹ được phối hợp trọn vẹn.",
      },
      th: {
        title:
          "Maiv Thoj ดูแลลูกค้าชาวลาว 5 คนเดินทางมาเวียดนามเพื่อทำครอบฟันเพื่อความงาม",
        description:
          "ติดตามเส้นทางของลูกค้า 5 คนจากลาวที่เดินทางมาเวียดนามพร้อม Maiv Thoj เพื่อทำฟันเพื่อความงาม",
      },
      lo: {
        title:
          "Maiv Thoj ພາລູກຄ້າລາວ 5 ຄົນມາຫວຽດນາມເພື່ອເຮັດແຂ້ວຄອບເພື່ອຄວາມງາມ",
        description:
          "ຕິດຕາມການເດີນທາງຂອງລູກຄ້າ 5 ຄົນຈາກລາວທີ່ມາຫວຽດນາມກັບ Maiv Thoj ເພື່ອເຮັດແຂ້ວເພື່ອຄວາມງາມ.",
      },
    },
  },
  {
    id: "lao-guest-new-smile-interview",
    youtubeId: "Is4U8iuJATo",
    url: "https://youtube.com/shorts/Is4U8iuJATo?feature=share",
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
        title: "Khách Lào chia sẻ cảm nhận về bộ răng mới",
        description:
          "Khách hàng từng chưa hài lòng vì bộ răng cũ vừa to vừa thô. Sau hành trình được Maiv Thoj đồng hành sang Việt Nam, khách chia sẻ sự hài lòng với nụ cười mới.",
      },
      th: {
        title: "ลูกค้าชาวลาวเล่าความรู้สึกที่มีต่อรอยยิ้มใหม่",
        description:
          "ลูกค้าเคยไม่พอใจกับฟันเดิมที่ดูใหญ่และหนา หลังได้รับการดูแลในเวียดนาม เธอเล่าถึงความพอใจกับฟันชุดใหม่",
      },
      lo: {
        title: "ລູກຄ້າລາວແບ່ງປັນຄວາມຮູ້ສຶກຕໍ່ແຂ້ວຊຸດໃໝ່",
        description:
          "ກ່ອນໜ້ານີ້ລູກຄ້າບໍ່ພໍໃຈເພາະແຂ້ວເບິ່ງໃຫຍ່ແລະໜາ. ຫຼັງຈາກມາຮັບການດູແລຢູ່ຫວຽດນາມ ລູກຄ້າໄດ້ແບ່ງປັນຄວາມພໍໃຈຕໍ່ຮອຍຍິ້ມໃໝ່.",
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
        title: "Tham khảo các mẫu răng thẩm mỹ tại Nha khoa An Nhiên",
        description:
          "Khám phá cận cảnh các dáng răng và mẫu nụ cười thẩm mỹ để tham khảo khi trao đổi cùng đội ngũ Nha khoa An Nhiên.",
      },
      th: {
        title: "ชมตัวอย่างรูปทรงฟันเพื่อความงามที่ An Nhien Dental",
        description:
          "ชมรูปทรงฟันและตัวอย่างรอยยิ้มอย่างใกล้ชิด เพื่อใช้ประกอบการพูดคุยกับทีมทันตแพทย์ของ An Nhien Dental",
      },
      lo: {
        title: "ຮັບຊົມຕົວຢ່າງຮູບຊົງແຂ້ວທີ່ An Nhien Dental",
        description:
          "ເບິ່ງຮູບຊົງແຂ້ວ ແລະ ຕົວຢ່າງຮອຍຍິ້ມເພື່ອໃຊ້ປະກອບການປຶກສາກັບທີມທັນຕະແພດຂອງ An Nhien Dental.",
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
        title: "Khách hàng từ Lào chia sẻ cảm nhận sau khi làm răng",
        description:
          "Lắng nghe trực tiếp chia sẻ của chị khách đến từ Lào về hành trình làm răng và sự hỗ trợ chị đã nhận được.",
      },
      th: {
        title: "ลูกค้าจากลาวแบ่งปันประสบการณ์หลังทำฟัน",
        description:
          "รับฟังลูกค้าชาวลาวเล่าประสบการณ์การทำฟันและการดูแลที่เธอได้รับตลอดการเดินทาง",
      },
      lo: {
        title: "ລູກຄ້າຈາກລາວແບ່ງປັນຄວາມຮູ້ສຶກຫຼັງເຮັດແຂ້ວ",
        description:
          "ຮັບຟັງລູກຄ້າລາວແບ່ງປັນໂດຍກົງກ່ຽວກັບການເດີນທາງມາເຮັດແຂ້ວ ແລະ ການດູແລທີ່ນາງໄດ້ຮັບ.",
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
