import type { TreatmentFaqItem, TreatmentTextItem } from "../types";
import type { TreatmentTranslation, TreatmentTranslations } from "../localize";

interface ViTreatmentProfile {
  title: string;
  summary: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  overview: readonly string[];
  benefits: readonly TreatmentTextItem[];
  candidates: readonly string[];
  steps: readonly TreatmentTextItem[];
  materials: readonly TreatmentTextItem[];
  faq: readonly TreatmentFaqItem[];
  seoDescription: string;
}

function createViTreatment(profile: ViTreatmentProfile): TreatmentTranslation {
  return {
    title: profile.title,
    summary: profile.summary,
    hero: {
      badge: profile.badge,
      title: profile.heroTitle,
      description: profile.heroDescription,
      facts: [
        "Kế hoạch điều trị cá nhân hóa",
        "Hỗ trợ khách hàng quốc tế",
        "Đối tác nha khoa uy tín",
      ],
    },
    overview: {
      heading: `Tìm hiểu về ${profile.title}`,
      description: profile.overview,
    },
    benefits: {
      heading: `${profile.title} có thể mang lại lợi ích gì?`,
      description:
        "Lợi ích thực tế phụ thuộc vào tình trạng răng miệng và kế hoạch điều trị được thiết kế riêng cho bạn.",
      items: profile.benefits,
    },
    candidates: {
      heading: `Ai có thể phù hợp với ${profile.title}?`,
      description:
        "Mức độ phù hợp chỉ có thể được xác nhận sau khi bác sĩ thăm khám và thực hiện chẩn đoán hình ảnh cần thiết.",
      items: profile.candidates,
    },
    procedure: {
      heading: `Hành trình điều trị ${profile.title}`,
      description:
        "Số lần hẹn và thời gian điều trị sẽ thay đổi theo tình trạng răng miệng và kế hoạch đã được thống nhất.",
      steps: profile.steps,
    },
    materials: {
      heading: "Vật liệu và kế hoạch phục hình",
      description:
        "Bác sĩ lựa chọn vật liệu dựa trên vị trí răng, khớp cắn, yêu cầu thẩm mỹ, độ phù hợp lâm sàng và mục tiêu chăm sóc lâu dài.",
      items: profile.materials,
    },
    faq: {
      heading: `Câu hỏi thường gặp về ${profile.title}`,
      items: profile.faq,
    },
    conversion: {
      heading: "Bạn muốn hiểu rõ bước tiếp theo?",
      description:
        "Hãy chia sẻ tình trạng răng, hình ảnh hoặc hồ sơ hiện có và thời gian dự kiến đến Việt Nam. Đội ngũ sẽ hỗ trợ sắp xếp buổi tư vấn ban đầu trước khi bạn quyết định điều trị.",
      primaryAction: {
        label: "Bắt đầu tư vấn",
        href: "/booking",
      },
      secondaryAction: {
        label: "Trao đổi qua WhatsApp",
        href: "#contact",
      },
      trustItems: [
        "Tư vấn ban đầu không ràng buộc điều trị",
        "Phối hợp kế hoạch điều trị và hành trình cá nhân hóa",
        "Hỗ trợ khách hàng quốc tế bằng nhiều ngôn ngữ",
      ],
    },
    seo: {
      title: `${profile.title} tại Việt Nam | Maiv Thoj Viet Lao`,
      description: profile.seoDescription,
    },
  };
}

export const viTreatmentTranslations = {
  implant: createViTreatment({
    title: "Cấy ghép Implant",
    summary:
      "Giải pháp cá nhân hóa giúp thay thế răng đã mất và khôi phục chức năng ăn nhai thoải mái hơn.",
    badge: "CẤY GHÉP IMPLANT TẠI VIỆT NAM",
    heroTitle:
      "Phục hồi răng đã mất với kế hoạch Implant được thiết kế riêng cho bạn.",
    heroDescription:
      "Implant có thể giúp khôi phục chức năng, sự thoải mái và tự tin khi mất một hoặc nhiều răng. Mỗi hành trình bắt đầu bằng thăm khám kỹ lưỡng và kế hoạch điều trị cá nhân hóa.",
    overview: [
      "Implant nha khoa được thiết kế để thay thế chân răng đã mất và nâng đỡ mão răng, cầu răng hoặc một phục hình phù hợp.",
      "Mỗi khách hàng có tình trạng khác nhau. Bác sĩ sẽ đánh giá răng, nướu và thể tích xương trước khi xác định Implant có phù hợp hay không.",
    ],
    benefits: [
      {
        title: "Khôi phục chức năng ăn nhai",
        description:
          "Răng trên Implant có thể giúp cải thiện sự thoải mái khi ăn nhai và sinh hoạt hằng ngày.",
      },
      {
        title: "Hỗ trợ nụ cười tự nhiên",
        description:
          "Phục hình sau cùng được thiết kế hài hòa với nụ cười, khớp cắn và đường nét khuôn mặt.",
      },
      {
        title: "Hỗ trợ ổn định cung răng",
        description:
          "Thay thế răng mất có thể giúp hạn chế tình trạng các răng kế cận dịch chuyển vào khoảng trống.",
      },
    ],
    candidates: [
      "Người trưởng thành bị mất một hoặc nhiều răng.",
      "Người muốn lựa chọn phục hình cố định thay cho răng tháo lắp.",
      "Người có thể tích xương phù hợp hoặc có chỉ định hỗ trợ xương.",
      "Người có khả năng duy trì vệ sinh răng miệng và tái khám định kỳ.",
    ],
    steps: [
      {
        title: "Tư vấn và đánh giá",
        description:
          "Bác sĩ khám sức khỏe răng miệng, xem phim chẩn đoán và trao đổi các lựa chọn phù hợp.",
      },
      {
        title: "Lập kế hoạch cá nhân hóa",
        description:
          "Vị trí Implant, loại phục hình và tiến độ điều trị được lên kế hoạch theo nhu cầu lâm sàng.",
      },
      {
        title: "Đặt trụ Implant",
        description:
          "Trụ Implant được đặt theo kế hoạch đã duyệt, sau đó cần thời gian lành thương thích hợp.",
      },
      {
        title: "Gắn phục hình sau cùng",
        description:
          "Khi điều kiện lành thương cho phép, mão hoặc phục hình được gắn và điều chỉnh để ăn nhai thoải mái.",
      },
      {
        title: "Chăm sóc và theo dõi",
        description:
          "Bạn được hướng dẫn vệ sinh, bảo trì và lịch tái khám phù hợp.",
      },
    ],
    materials: [
      {
        title: "Hệ thống Implant được lựa chọn lâm sàng",
        description:
          "Bác sĩ lựa chọn hệ thống Implant phù hợp sau khi đánh giá đầy đủ tình trạng của bạn.",
      },
      {
        title: "Phục hình cá nhân hóa",
        description:
          "Mão hoặc phục hình được thiết kế để cân bằng chức năng, thẩm mỹ và khả năng chăm sóc lâu dài.",
      },
    ],
    faq: [
      {
        question: "Điều trị Implant mất bao lâu?",
        answer:
          "Thời gian phụ thuộc vào quá trình lành thương, tình trạng xương, số lượng Implant và các thủ thuật bổ sung. Bác sĩ sẽ giải thích lịch trình dự kiến sau khi thăm khám.",
      },
      {
        question: "Ai cũng có thể cấy ghép Implant phải không?",
        answer:
          "Không. Mức độ phù hợp phụ thuộc vào sức khỏe răng miệng, thể tích xương, sức khỏe toàn thân và các yếu tố lâm sàng khác.",
      },
      {
        question: "Tôi có phải ở Việt Nam trong toàn bộ quá trình không?",
        answer:
          "Không phải lúc nào cũng vậy. Một số kế hoạch cần nhiều hơn một chuyến đi. Đội ngũ sẽ phối hợp lịch điều trị và hành trình sau khi nhu cầu lâm sàng được xác định.",
      },
    ],
    seoDescription:
      "Tìm hiểu cấy ghép Implant cá nhân hóa tại Việt Nam với hỗ trợ đa ngôn ngữ và phối hợp hành trình dành cho khách hàng quốc tế.",
  }),
  veneers: createViTreatment({
    title: "Mặt dán sứ Veneer",
    summary:
      "Giải pháp thẩm mỹ cá nhân hóa giúp cải thiện hình dáng, màu sắc và sự cân đối của các răng vùng cười.",
    badge: "MẶT DÁN SỨ VENEER TẠI VIỆT NAM",
    heroTitle:
      "Kiến tạo nụ cười cân đối hơn với Veneer hài hòa cùng đường nét tự nhiên.",
    heroDescription:
      "Veneer có thể cải thiện màu răng, hình dáng, khe thưa nhỏ hoặc tỷ lệ chưa cân đối. Mỗi trường hợp cần được thăm khám và lập kế hoạch nụ cười riêng.",
    overview: [
      "Veneer là phục hình mỏng được gắn trên bề mặt phía trước của răng để điều chỉnh màu sắc, hình dáng, tỷ lệ hoặc một số sai lệch nhỏ.",
      "Veneer không phù hợp với tất cả mọi người. Bác sĩ cần đánh giá răng, nướu, khớp cắn và sức khỏe răng miệng trước khi tư vấn.",
    ],
    benefits: [
      {
        title: "Cải thiện màu răng vùng cười",
        description:
          "Veneer có thể hỗ trợ những răng đổi màu kéo dài và không đáp ứng đủ với tẩy trắng.",
      },
      {
        title: "Tinh chỉnh hình dáng và tỷ lệ răng",
        description:
          "Các răng được thiết kế để tạo mối tương quan cân đối hơn trong tổng thể nụ cười.",
      },
      {
        title: "Xử lý khe thưa nhỏ",
        description:
          "Trong trường hợp phù hợp, Veneer có thể giúp giảm khe thưa nhỏ hoặc bất đối xứng nhẹ.",
      },
      {
        title: "Hướng đến vẻ tự nhiên",
        description:
          "Màu sắc, độ trong và hình dáng được lựa chọn hài hòa với khuôn mặt và răng tự nhiên.",
      },
    ],
    candidates: [
      "Người trưởng thành muốn cải thiện thẩm mỹ một số răng vùng cười.",
      "Người có răng và nướu đủ khỏe để thực hiện phục hình.",
      "Người có răng đổi màu, khe thưa nhỏ hoặc hình dáng chưa cân đối.",
      "Người có kỳ vọng thực tế và duy trì vệ sinh răng miệng tốt.",
    ],
    steps: [
      {
        title: "Tư vấn và đánh giá nụ cười",
        description:
          "Bác sĩ đánh giá răng, nướu, khớp cắn và mong muốn thẩm mỹ của bạn.",
      },
      {
        title: "Lập kế hoạch nụ cười",
        description:
          "Hình dáng, tỷ lệ, màu sắc và số lượng Veneer được thiết kế theo khuôn mặt và mục tiêu điều trị.",
      },
      {
        title: "Chuẩn bị bề mặt răng",
        description:
          "Khi cần, bác sĩ sửa soạn răng có kiểm soát theo kế hoạch đã thống nhất.",
      },
      {
        title: "Lấy dấu hoặc quét kỹ thuật số",
        description:
          "Dữ liệu chính xác được gửi đến labo để chế tác phục hình theo thiết kế.",
      },
      {
        title: "Thử, điều chỉnh và gắn Veneer",
        description:
          "Từng Veneer được kiểm tra độ khít, màu sắc, thẩm mỹ và khớp cắn trước khi gắn chính thức.",
      },
    ],
    materials: [
      {
        title: "Veneer sứ",
        description:
          "Vật liệu sứ có thể mang lại độ trong tự nhiên và ổn định màu sắc khi phù hợp lâm sàng.",
      },
      {
        title: "Màu sắc và thiết kế cá nhân hóa",
        description:
          "Màu, độ trong và đường nét được lựa chọn dựa trên khuôn mặt, màu da và răng tự nhiên.",
      },
    ],
    faq: [
      {
        question: "Veneer có phù hợp với tất cả mọi người không?",
        answer:
          "Không. Răng hoặc nướu chưa khỏe, thiếu mô răng hay sai lệch khớp cắn đáng kể có thể cần phương án khác. Cần thăm khám trực tiếp để xác định.",
      },
      {
        question: "Tôi cần làm bao nhiêu Veneer?",
        answer:
          "Số lượng phụ thuộc vào vùng răng lộ khi cười, vấn đề thẩm mỹ và sự cân đối cần tạo ra.",
      },
      {
        question: "Chăm sóc Veneer như thế nào?",
        answer:
          "Bạn cần vệ sinh hằng ngày, tái khám định kỳ và tránh thói quen tạo lực quá mức lên phục hình.",
      },
    ],
    seoDescription:
      "Tìm hiểu mặt dán sứ Veneer tại Việt Nam với thiết kế nụ cười cá nhân hóa và hỗ trợ khách hàng quốc tế.",
  }),
  crowns: createViTreatment({
    title: "Mão răng sứ",
    summary:
      "Giải pháp phục hình cá nhân hóa giúp bảo vệ răng yếu, khôi phục chức năng và cải thiện hình dáng bên ngoài.",
    badge: "MÃO RĂNG SỨ TẠI VIỆT NAM",
    heroTitle:
      "Phục hồi răng tổn thương với mão sứ được thiết kế theo khớp cắn và nụ cười.",
    heroDescription:
      "Mão răng có thể bảo vệ răng yếu, khôi phục ăn nhai và cải thiện hình dáng hoặc màu sắc của răng. Mỗi trường hợp bắt đầu bằng thăm khám và kế hoạch phục hình riêng.",
    overview: [
      "Mão răng là phục hình được chế tác riêng để bao phủ và bảo vệ răng yếu, nứt vỡ, mất nhiều mô răng hoặc đã điều trị tủy.",
      "Mão cũng có thể là phục hình sau cùng trên Implant. Bác sĩ sẽ đánh giá răng, nướu, khớp cắn và mô răng còn lại trước khi chỉ định.",
    ],
    benefits: [
      {
        title: "Bảo vệ răng suy yếu",
        description:
          "Mão có thể gia cố răng bị tổn thương, nứt hoặc suy yếu do miếng trám lớn.",
      },
      {
        title: "Khôi phục chức năng ăn nhai",
        description:
          "Phục hình tái tạo hình dáng và chức năng cần thiết cho sinh hoạt hằng ngày.",
      },
      {
        title: "Cải thiện hình dáng răng",
        description:
          "Khi phù hợp, mão có thể cải thiện màu sắc, đường nét và tỷ lệ của răng.",
      },
      {
        title: "Hoàn tất phục hình Implant",
        description:
          "Mão răng có thể là phần phục hình nhìn thấy được đặt trên Implant.",
      },
    ],
    candidates: [
      "Người có răng nứt, mòn hoặc suy yếu đáng kể.",
      "Người có răng mang miếng trám lớn hoặc mất nhiều mô răng.",
      "Người cần phục hồi răng sau điều trị tủy.",
      "Người cần mão răng trên Implant.",
    ],
    steps: [
      {
        title: "Thăm khám lâm sàng",
        description:
          "Bác sĩ kiểm tra răng, nướu xung quanh, khớp cắn và phim chẩn đoán cần thiết.",
      },
      {
        title: "Lập kế hoạch phục hình",
        description:
          "Bác sĩ xác định mức độ phù hợp và trao đổi về vật liệu, màu sắc, hình dáng và thời gian.",
      },
      {
        title: "Sửa soạn răng",
        description:
          "Răng được chuẩn bị theo kế hoạch để mão sau cùng đạt độ khít và ổn định.",
      },
      {
        title: "Lấy dấu hoặc quét kỹ thuật số",
        description:
          "Dữ liệu chính xác được chuyển đến labo để chế tác mão riêng cho bạn.",
      },
      {
        title: "Thử và gắn mão",
        description:
          "Mão được kiểm tra độ khít, thẩm mỹ, điểm tiếp xúc và khớp cắn trước khi gắn.",
      },
    ],
    materials: [
      {
        title: "Sứ và Zirconia",
        description:
          "Sứ và Zirconia có thể đáp ứng độ bền, ổn định màu và vẻ tự nhiên khi phù hợp lâm sàng.",
      },
      {
        title: "Thiết kế phục hồi chức năng",
        description:
          "Mão được thiết kế để tái tạo hình dáng, điểm tiếp xúc và khớp cắn thoải mái.",
      },
    ],
    faq: [
      {
        question: "Khi nào bác sĩ có thể chỉ định mão răng?",
        answer:
          "Mão có thể được chỉ định cho răng nứt, suy yếu, mất nhiều mô, đã điều trị tủy hoặc cần phục hình trên Implant. Cần thăm khám để xác định.",
      },
      {
        question: "Làm mão răng mất bao lâu?",
        answer:
          "Thời gian phụ thuộc vào tình trạng răng, quy trình labo, vật liệu và các điều trị bổ sung nếu có.",
      },
      {
        question: "Mão răng có trông tự nhiên không?",
        answer:
          "Phục hình được thiết kế theo hình dáng, màu sắc, các răng kế cận và yêu cầu chức năng. Kết quả phụ thuộc vào điều kiện lâm sàng và vật liệu.",
      },
    ],
    seoDescription:
      "Tìm hiểu mão răng sứ tại Việt Nam với kế hoạch phục hình cá nhân hóa theo tình trạng răng và khớp cắn.",
  }),
  smileMakeover: createViTreatment({
    title: "Thiết kế nụ cười toàn diện",
    summary:
      "Chương trình cải thiện nụ cười cá nhân hóa, có thể phối hợp nhiều phương pháp nha khoa theo nhu cầu riêng.",
    badge: "THIẾT KẾ NỤ CƯỜI TẠI VIỆT NAM",
    heroTitle:
      "Thay đổi nụ cười với hành trình điều trị được thiết kế riêng cho bạn.",
    heroDescription:
      "Thiết kế nụ cười toàn diện dựa trên đường nét khuôn mặt, sức khỏe răng miệng, khớp cắn, lối sống và mục tiêu lâu dài. Kế hoạch có thể phối hợp nhiều điều trị sau khi đánh giá đầy đủ.",
    overview: [
      "Thiết kế nụ cười toàn diện không phải một thủ thuật đơn lẻ mà là kế hoạch phối hợp nha khoa thẩm mỹ, phục hồi và chức năng.",
      "Tùy tình trạng, kế hoạch có thể gồm Veneer, mão răng, Implant, tẩy trắng, tạo hình nướu, điều chỉnh khớp cắn hoặc phương án phù hợp khác.",
      "Không phải ai cũng cần tất cả phương pháp. Chỉ định được đưa ra sau khi bác sĩ đánh giá răng, nướu, khớp cắn, khuôn mặt và mong muốn của bạn.",
    ],
    benefits: [
      {
        title: "Tạo tỷ lệ nụ cười cân đối",
        description:
          "Kích thước, hình dáng, vị trí và mối tương quan giữa các răng được lên kế hoạch hài hòa hơn.",
      },
      {
        title: "Hài hòa khuôn mặt và nụ cười",
        description:
          "Kế hoạch xem xét đường nét khuôn mặt, chuyển động môi và vẻ tự nhiên, không chỉ tập trung vào răng.",
      },
      {
        title: "Kết hợp thẩm mỹ và chức năng",
        description:
          "Kế hoạch có thể đồng thời xử lý hình thức và các vấn đề như răng tổn thương hoặc mất răng.",
      },
      {
        title: "Phối hợp nhiều phương pháp",
        description:
          "Một kế hoạch rõ ràng giúp sắp xếp đúng trình tự, thời gian và vai trò của từng điều trị.",
      },
    ],
    candidates: [
      "Người trưởng thành có nhiều vấn đề thẩm mỹ hoặc phục hồi.",
      "Người quan tâm đến màu, hình dáng, khe thưa, độ mòn hoặc tỷ lệ răng.",
      "Người có răng tổn thương, mất răng hoặc nhiều phục hình cũ cần phối hợp điều trị.",
      "Người mong muốn kế hoạch tổng thể thay vì một thủ thuật riêng lẻ.",
    ],
    steps: [
      {
        title: "Tư vấn ban đầu",
        description:
          "Bạn chia sẻ vấn đề răng, mục tiêu nụ cười, hồ sơ hiện có và thời gian dự kiến đến Việt Nam.",
      },
      {
        title: "Thăm khám lâm sàng",
        description:
          "Bác sĩ đánh giá răng, nướu, khớp cắn và phim chẩn đoán cần thiết.",
      },
      {
        title: "Phân tích nụ cười và khuôn mặt",
        description:
          "Tỷ lệ răng, đường cười, khuôn mặt và yếu tố chức năng được xem xét trong quá trình lập kế hoạch.",
      },
      {
        title: "Lập kế hoạch cá nhân hóa",
        description:
          "Bác sĩ trao đổi phương pháp, vật liệu, trình tự và thời gian phù hợp với nhu cầu lâm sàng.",
      },
      {
        title: "Điều trị và hoàn thiện",
        description:
          "Các điều trị được thực hiện theo đúng trình tự, sau đó kiểm tra thẩm mỹ, khớp cắn, sự thoải mái và chức năng.",
      },
    ],
    materials: [
      {
        title: "Vật liệu phục hình cá nhân hóa",
        description:
          "Sứ, Zirconia hoặc vật liệu phù hợp khác được lựa chọn theo vị trí răng, khớp cắn và mục tiêu điều trị.",
      },
      {
        title: "Màu sắc và hình dáng riêng",
        description:
          "Màu, độ trong, đường nét và tỷ lệ được thiết kế hài hòa với khuôn mặt và răng tự nhiên.",
      },
      {
        title: "Tính đến việc chăm sóc lâu dài",
        description:
          "Lựa chọn vật liệu còn cân nhắc vệ sinh, lực cắn, lối sống và yêu cầu bảo trì sau điều trị.",
      },
    ],
    faq: [
      {
        question: "Thiết kế nụ cười toàn diện gồm những gì?",
        answer:
          "Kế hoạch có thể gồm Veneer, mão răng, Implant, tẩy trắng, điều trị nướu hoặc phương án khác. Tổ hợp chính xác phụ thuộc vào thăm khám.",
      },
      {
        question: "Mọi người có cần cùng một phương pháp không?",
        answer:
          "Không. Mỗi kế hoạch khác nhau; có người chỉ cần một vài điều trị, có người cần kế hoạch phục hồi và chức năng rộng hơn.",
      },
      {
        question: "Quá trình thay đổi nụ cười mất bao lâu?",
        answer:
          "Thời gian phụ thuộc vào số lượng và độ phức tạp của các điều trị. Một số kế hoạch hoàn tất trong một chuyến đi, số khác cần nhiều giai đoạn.",
      },
    ],
    seoDescription:
      "Tìm hiểu thiết kế nụ cười toàn diện tại Việt Nam với kế hoạch điều trị cá nhân hóa và hỗ trợ hành trình quốc tế.",
  }),
} satisfies TreatmentTranslations;
