heo mình, đây sẽ là tài liệu được đọc nhiều nhất trong toàn bộ docs/.

Không phải README.

Không phải Architecture.

Mà chính là FEATURE_STANDARD.md.

Vì sao?

Sau này mỗi lần chúng ta tạo:

stories/

destination/

travel/

experience/

blog/

gallery/

doctor/

patient/

visa/

hotel/

news/

promotion/

thì tất cả đều phải theo tài liệu này.

Nó chính là luật của toàn bộ codebase.

Mình muốn nâng cấp hơn nữa

Thay vì chỉ mô tả cấu trúc.

Mình muốn nó giống như Playbook.

Ví dụ.

Purpose
Feature là đơn vị business độc lập.

Một Feature có thể được phát triển, kiểm thử, bảo trì
và mở rộng mà không ảnh hưởng đến Feature khác.
Responsibilities

Một Feature được phép làm gì.

✔ Render UI

✔ Chuẩn bị ViewModel

✔ Metadata

✔ Validation

✔ API riêng (nếu cần)

Không được phép.

❌ Hardcode text

❌ Business Content

❌ Chứa Feature khác

❌ Truy cập Dictionary trực tiếp trong component
Folder Structure
feature-name/

Feature.tsx

index.ts

components/

hooks/

types/

data/

services/

schema/

api/

Mình sẽ giải thích từng thư mục.

Entry Point
Hero.tsx

Chỉ có một nhiệm vụ.

export { HeroSection as Hero } from "./components/HeroSection";

Không business logic.

Components

Ví dụ.

HeroSection.tsx

Là Root Component.

HeroContent.tsx

Render content.

HeroImage.tsx

Render image.

HeroActions.tsx

Render CTA.

HeroStats.tsx

Render statistics.

Hooks

Ví dụ.

useHero()

Luồng chuẩn.

Dictionary

↓

Metadata

↓

Transform

↓

ViewModel

Không JSX.

Data

Đây là điều chúng ta đã sửa rất nhiều.

Mình sẽ ghi rõ.

Được phép.

image

icon

slug

id

order

Không được.

title

description

paragraph

quote

cta

Tất cả business content phải nằm trong content/.

Types

Ví dụ.

HeroStat

HeroHighlight

HeroViewModel

HeroSectionProps

Không dùng.

Data

Item

Info

Object

Tên phải rõ nghĩa.

Services

Nếu feature có API.

Ví dụ.

Booking

Được phép.

submit-booking.service.ts

Không viết API trong component.

Schema

Nếu dùng Zod.

Ví dụ.

booking.schema.ts
Public API

Mỗi feature phải export duy nhất qua:

index.ts

Không import xuyên vào components/.

Ví dụ.

Đúng.

import { Hero } from "@/features/hero";

Sai.

import HeroContent from "@/features/hero/components/HeroContent";
Lifecycle

Mình muốn có sơ đồ.

Business Requirement

↓

Dictionary

↓

Metadata

↓

Hook

↓

Component

↓

Page

↓

User
Checklist

Đây là phần quan trọng nhất.

Một Feature chỉ được coi là hoàn thành khi:

□ Có index.ts

□ Có Entry Point

□ Có Hook

□ Có Types

□ Có Metadata

□ Không Hardcode

□ Dictionary

□ Build PASS

□ Lint PASS

□ Export đúng

□ Responsive

□ Accessibility
Anti-patterns

Đây là điều các tài liệu khác không có.

Ví dụ.

❌

const title = "Dental Implant";

❌

const dictionary = useDictionary();

return (
<div>

{dictionary.title}

</div>

)

Component không được lấy dictionary.

❌

fetch(...)

Trong component.

❌

Business text trong feature/data.

Good Example

Mình sẽ lấy luôn Hero.

Hero

↓

useHero()

↓

Dictionary

↓

Metadata

↓

HeroSection
Related Documents
README

ARCHITECTURE

CONTENT_ARCHITECTURE

NAMING
🚀 Mình muốn bổ sung thêm một chương mà gần như không có tài liệu nào có
Feature Maturity Model

Mỗi Feature sẽ có một mức trưởng thành.

Level 1
UI
Level 2
Dictionary
Level 3
Metadata
Level 4
Accessibility
Level 5
Production Ready

Nhờ vậy sau này chúng ta có thể đánh giá từng feature:

Feature	Level
Hero	⭐⭐⭐⭐⭐
Founder	⭐⭐⭐⭐⭐
Coordinator	⭐⭐⭐⭐⭐
Booking	⭐⭐⭐⭐☆
FAQ	⭐⭐⭐⭐☆

Đây là một ý tưởng khá hay vì nó biến tài liệu thành công cụ quản lý chất lượng, chứ không chỉ là hướng dẫn viết code.

🎯 Đề xuất lớn cho M2

Sau khi hoàn thành bộ Developer Handbook, mình muốn tạo thêm một thư mục mới:

templates/

feature-template/

page-template/

hook-template/

component-template/

dictionary-template/

Khi bắt đầu M2 – Content Platform, việc tạo một feature mới sẽ chỉ mất vài phút vì chúng ta có sẵn template chuẩn. Điều này sẽ giúp tốc độ phát triển nhanh hơn rất nhiều và giữ toàn bộ codebase luôn nhất quán. Theo mình, đây sẽ là khoản đầu tư mang lại lợi ích lâu dài nhất cho dự án.