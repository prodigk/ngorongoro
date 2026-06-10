# 응고롱고로 (Ngorongoro) 브랜드 소개 웹사이트 개발 지침

> **목적**: 응고롱고로의 감성과 브랜드 세계관을 전달하는 정적(Static) 소개 웹사이트.  
> 상품 구매는 외부 스토어(ngorongoro.kr)로 연결하며, 이 사이트는 브랜드 경험과 스토리텔링에 집중합니다.  
> 최종 결과물은 Vercel 로 호스팅 합니다.

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 사이트명 | ngorongoro — Lifestyle Village |
| 도메인 예정 | ngorongoro.kr (또는 별도 서브도메인) |
| 기술 스택 | HTML5 / CSS3 / Vanilla JS (또는 Vite + React 가능) |
| 호스팅 | Vercel |
| 빌드 도구 | Vite (권장) 또는 순수 HTML |
| 언어 | 한국어 기본, 영문 병기(제목/슬로건) |
| 반응형 | 모바일 우선 (Mobile First) |

---

## 2. 브랜드 톤 & 디자인 원칙

### 2-1. 브랜드 무드
- **Slow Forest Village** — 서두르지 않는, 고요하고 포근한 분위기
- 말보다 여백, 화려함보다 온기
- 동물과 자연의 조용한 순간 → 정서적 쉼과 위로
- 다름을 이상하게 여기지 않고 있는 그대로 포용하는 시선

### 2-2. 디자인 방향
- **따뜻한 미니멀리즘**: 여백을 충분히 확보하고 요소를 최소화
- **자연 색감**: 크림, 초록, 연한 청록, 따뜻한 베이지 위주
- 폰트: 한국어는 **Noto Serif KR** 또는 **Gowun Batang**, 영문은 **Playfair Display** 또는 **Lora** (세리프 계열 권장)
- 애니메이션: 페이드인, 부드러운 스크롤 진입 효과만 사용. 역동적 모션 금지
- 버튼/CTA: 아웃라인 스타일 또는 소프트한 단색, 형광색·강한 그라디언트 금지

### 2-3. 색상 팔레트 (CSS 변수로 정의)

```css
:root {
  --color-bg:        #F7F4EF;   /* 메인 배경 — 크림 화이트 */
  --color-surface:   #EDE9E1;   /* 카드/섹션 배경 */
  --color-green:     #5A7A5E;   /* 포인트 — 숲의 초록 */
  --color-green-lt:  #A8C5A3;   /* 연한 초록 */
  --color-brown:     #8B6E52;   /* 따뜻한 브라운 */
  --color-text:      #3A3530;   /* 기본 텍스트 */
  --color-text-sub:  #7A7068;   /* 보조 텍스트 */
  --color-white:     #FFFFFF;
  --color-border:    #D8D2C8;   /* 구분선 */

  --font-ko:   'Gowun Batang', 'Noto Serif KR', serif;
  --font-en:   'Playfair Display', 'Lora', serif;
  --font-body: 'Noto Sans KR', sans-serif;

  --radius:    4px;
  --transition: 0.4s ease;
}
```

---

## 3. 사이트 구조 (페이지 & 섹션)

```
index.html
├── <header>        Navigation
├── #hero           Hero / 첫 인상
├── #about          브랜드 소개
├── #philosophy     핵심 가치 (Brand Philosophy)
├── #gallery        대표 작품 갤러리 (6–8점)
├── #story          작가/브랜드 스토리
├── #shop-cta       스토어 연결 CTA
└── <footer>        Footer
```

---

## 4. 섹션별 상세 명세

### 4-1. Header / Navigation

```
레이아웃: 상단 고정 (sticky), 스크롤 시 배경 불투명 전환
로고: 텍스트 로고 "ngorongoro" (영문 소문자, Playfair Display)
      + 한글 서브 "응고롱고로" (소형)
메뉴: Hero, About, Gallery, Shop (앵커 링크)
모바일: 햄버거 메뉴 (CSS only 가능)
배경: 투명 → 스크롤 시 --color-bg 80% 불투명 + blur
```

### 4-2. Hero Section

```
레이아웃: 전체 화면 높이 (100vh), 중앙 정렬
콘텐츠:
  - 영문 슬로건 (대형, Playfair Display):
      "Slow Forest Village"
  - 한글 서브카피:
      "조용한 하루의 작은 위로"
  - 브랜드명: ngorongoro
  - CTA 버튼: "작품 보러가기" → #gallery 앵커

배경: 대표 일러스트 이미지 또는 크림 배경 위 일러스트 오버레이
      (이미지 없을 경우 CSS 패턴 또는 SVG 배경 사용)
애니메이션: 텍스트 요소 순차 페이드인 (animation-delay 사용)
```

**Hero 카피 원문:**
```
Slow Forest Village
조용한 하루의 작은 위로

— ngorongoro
```

### 4-3. About Section

```
레이아웃: 2컬럼 (텍스트 좌 / 이미지 우), 모바일은 1컬럼
```

**텍스트 콘텐츠:**
```
[소제목]
고요한 풍경 속, 머무는 존재들

[본문]
응고롱고로는 조용한 동물들과 자연이 함께 머무는 장면을 그림으로 표현합니다.

나무 그늘 아래 선 양떼, 숲 가장자리에서 바람을 느끼는 치타,
호수 근처에 앉아 밤하늘을 바라보는 곰.

자연 안에서 머무는 동물들의 모습은 하루의 속도를 천천히 되돌려줍니다.

그림마다 각자의 독립된 이야기지만, 함께 놓였을 때
마치 하나의 고요한 풍경처럼 자연스럽게 이어지기를 바랍니다.

[서브 텍스트 / 강조]
바쁘지 않은 하루의 한가운데,
조용히 놓여도 괜찮은 그림.
그게 바로, 응고롱고로입니다.
```

### 4-4. Philosophy Section (핵심 가치)

```
레이아웃: 아이콘 없이 텍스트 중심, 3–5개 카드 가로 나열
카드 스타일: --color-surface 배경, 얇은 보더, 여백 충분히
```

**5개 핵심 가치 카드 콘텐츠:**

| 번호 | 제목 | 설명 |
|---|---|---|
| 1 | 자연 속 고요한 감정의 순간 | 말하지 않아도, 조금 머뭇거리거나 가만히 바라보는 모습만으로 마음이 전해지는 순간들. |
| 2 | 다름을 사랑하는 시선 | 다르거나, 서툴거나, 뭔가 조금은 엇박인 듯한 순간이 가장 사랑스러운 장면이 됩니다. |
| 3 | 말 없는 관계와 연결 | 바라보는 시선, 발끝의 방향 하나로 "같이 있어서 괜찮아"를 전달하는 조용한 연결. |
| 4 | 작은 움직임, 큰 위로 | 작은 몸짓 하나에 담긴 감정을 천천히 들여다보게 만드는, 바쁜 일상 속 멈춤의 허락. |
| 5 | 따뜻한 미니멀리즘 | 포근한 여백과 초록, 파랑, 크림빛의 자연 색감이 일상 속에 조용한 위로를 줍니다. |

### 4-5. Gallery Section (대표 작품)

```
레이아웃: Masonry 또는 균등 그리드 (3컬럼 데스크탑 / 2컬럼 태블릿 / 1컬럼 모바일)
작품 수: 6–8개 (아래 목록에서 선택)
인터랙션: hover 시 작품 제목 + 짧은 설명 오버레이 (부드러운 페이드)
CTA: 각 카드 하단 또는 오버레이에 "스토어에서 보기 →" 링크
```

**갤러리에 포함할 대표 작품 목록 (6선):**

| 번호 | 한글 제목 | 영문 제목 | 한줄 설명 |
|---|---|---|---|
| 1 | 잭슨, 멈칫하다 | Jackson Pauses | 말하지 않아도 누구나 해본 적 있는 그 순간. |
| 2 | 다르지만 같이 | Different, Together | 같이 있는 것만으로 충분히 따뜻한 장면. |
| 3 | 같이 있는 밤 | Under the Same Moon | 달빛처럼 조용히 닿아 있는 마음. |
| 4 | 작지만 강한 | Tiny But Mighty | 작다고 작은 존재는 아니라는 말처럼. |
| 5 | 그대로 괜찮은 토끼 | Lovely Just Like That | 다르기 때문에 더 아름다운 존재. |
| 6 | 같이 있어서 괜찮아 | Better Together | 아무 말 없이 옆에 있어주는 것만으로 충분한 위로. |

```html
<!-- 갤러리 카드 구조 예시 -->
<article class="gallery-card">
  <div class="gallery-img-wrap">
    <img src="assets/works/jackson_pauses.jpg" alt="잭슨, 멈칫하다" loading="lazy" />
    <div class="gallery-overlay">
      <p class="gallery-en">Jackson Pauses</p>
      <h3 class="gallery-ko">잭슨, 멈칫하다</h3>
      <p class="gallery-desc">말하지 않아도 누구나 해본 적 있는 그 순간.</p>
      <a href="https://ngorongoro.kr/products/..." class="btn-outline" target="_blank">
        스토어에서 보기 →
      </a>
    </div>
  </div>
</article>
```

### 4-6. Story Section (브랜드/작가 스토리)

```
레이아웃: 중앙 정렬, 넓은 여백, 단락 위주
배경: --color-surface 로 섹션 전환감 부여
```

**콘텐츠:**
```
[소제목 EN] Slow Forest Village
[소제목 KO] 느린 숲속 마을에서 시작된 이야기

[본문]
응고롱고로는 동물들이 편안히 쉬는 상상 속 자연 공간에서 출발한 브랜드입니다.

그림을 통해 잠시 쉬어가고 싶은 마음,
아무것도 하지 않아도 괜찮은 하루의 기분을 전하고자 합니다.

각 작품은 따뜻하고 부드러운 색감, 여백 있는 구성을 통해
일상에 잔잔한 위로와 정서적 쉼을 전합니다.

[브랜드 선언문 / 인용구 스타일]
"바쁘지 않은 하루의 한가운데,
 조용히 놓여도 괜찮은 그림.
 그게 바로, 응고롱고로입니다."
```

### 4-7. Shop CTA Section

```
레이아웃: 전체폭 배경 (--color-green 또는 --color-surface), 중앙 CTA
```

**콘텐츠:**
```
[소제목] 작품을 공간에 들여놓아 보세요

[설명]
응고롱고로의 그림은 포스터와 액자로 만나볼 수 있습니다.
A3부터 엽서 사이즈까지, 당신의 공간에 꼭 맞는 크기로.

[CTA 버튼]
"스토어 방문하기" → https://ngorongoro.kr  (target="_blank")
```

### 4-8. Footer

```
콘텐츠:
  - 브랜드명: ngorongoro / 응고롱고로
  - 태그라인: Slow Forest Village
  - 링크: 스토어 / Instagram (@ngorongoro 등)
  - 저작권: ⓒ 2025 ngorongoro. All rights reserved.
  - 이메일 (선택): hello@ngorongoro.kr
배경: --color-text (다크) 또는 --color-surface
```

---

## 5. 컴포넌트 & 스타일 가이드

### 5-1. 버튼

```css
/* Primary CTA */
.btn-primary {
  background: var(--color-green);
  color: var(--color-white);
  padding: 12px 32px;
  border-radius: var(--radius);
  font-family: var(--font-ko);
  letter-spacing: 0.05em;
  transition: background var(--transition);
}
.btn-primary:hover { background: #4a6a4e; }

/* Outline 버튼 */
.btn-outline {
  background: transparent;
  border: 1px solid var(--color-green);
  color: var(--color-green);
  padding: 10px 28px;
  border-radius: var(--radius);
  transition: all var(--transition);
}
.btn-outline:hover {
  background: var(--color-green);
  color: var(--color-white);
}
```

### 5-2. 타이포그래피 스케일

```css
.display     { font: 700 3.5rem/1.1 var(--font-en); }   /* Hero 슬로건 */
.heading-ko  { font: 400 2rem/1.4 var(--font-ko); }     /* 섹션 제목 */
.subheading  { font: 400 1.125rem/1.6 var(--font-ko); } /* 서브타이틀 */
.body-text   { font: 400 1rem/1.8 var(--font-body); }   /* 본문 */
.caption     { font: 400 0.875rem/1.6 var(--font-body); color: var(--color-text-sub); }
```

### 5-3. 스크롤 애니메이션

```js
// Intersection Observer로 섹션 진입 시 fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 6. 파일 구조

```
ngorongoro-site/
├── index.html
├── package.json          (Vite 사용 시)
├── vite.config.js        (Vite 사용 시)
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── works/        ← 갤러리 이미지 (WebP 권장)
│   │       ├── jackson_pauses.webp
│   │       ├── different_together.webp
│   │       └── ...
│   └── fonts/            (로컬 폰트 사용 시)
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── layout.css
│   └── components.css
└── js/
    ├── nav.js
    ├── gallery.js
    └── animations.js
```

---

## 7. AWS 호스팅 구성

### 방법 A: S3 + CloudFront (권장, 가장 일반적)

```bash
# 1. S3 버킷 생성 (퍼블릭 액세스 허용 또는 OAC 설정)
aws s3 mb s3://ngorongoro-site

# 2. 빌드 결과물 업로드
npm run build
aws s3 sync dist/ s3://ngorongoro-site --delete

# 3. S3 정적 웹사이트 호스팅 활성화
aws s3 website s3://ngorongoro-site \
  --index-document index.html \
  --error-document index.html

# 4. CloudFront 배포 생성
#    - Origin: S3 버킷 (OAC 방식 권장)
#    - Default Root Object: index.html
#    - HTTPS 강제 리다이렉트
#    - Custom Domain: ngorongoro.kr → ACM 인증서 연결

# 5. 배포 업데이트 시 캐시 무효화
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

**S3 버킷 정책 (CloudFront OAC 사용 시):**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontAccess",
    "Effect": "Allow",
    "Principal": {
      "Service": "cloudfront.amazonaws.com"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::ngorongoro-site/*",
    "Condition": {
      "StringEquals": {
        "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DIST_ID"
      }
    }
  }]
}
```

### 방법 B: AWS Amplify (더 간단, CI/CD 자동화)

```bash
# GitHub 연동 후 Amplify Console에서:
# 1. "새 앱 호스팅" → GitHub 리포 선택
# 2. 빌드 설정:
#    Build command: npm run build
#    Output directory: dist
# 3. 도메인 연결: ngorongoro.kr → Amplify에서 DNS 설정 안내 제공
# 4. HTTPS 자동 발급
```

### 도메인 연결 (Route 53 사용 시)

```
Type  | Name           | Value
------|----------------|-----------------------------
A     | ngorongoro.kr  | CloudFront 도메인 (Alias)
CNAME | www            | ngorongoro.kr
```

---

## 8. 성능 & SEO 체크리스트

### SEO 메타태그 (index.html `<head>`)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ngorongoro — 감성 일러스트 소품샵 응고롱고로</title>
<meta name="description" content="동물과 자연이 어우러진 감성 포스터, 따뜻한 분위기의 인테리어 소품 선물 전문샵" />
<meta name="keywords" content="일러스트포스터,감성포스터,인테리어소품,감성소품,선물추천,액자선물,감성인테리어,그림액자,집들이선물" />

<!-- OG Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content="ngorongoro — 감성 일러스트 소품샵 응고롱고로" />
<meta property="og:description" content="동물과 자연의 조용한 순간을 담은 일러스트 브랜드" />
<meta property="og:image" content="https://ngorongoro.kr/og-image.jpg" />
<meta property="og:url" content="https://ngorongoro.kr" />

<!-- 카카오/트위터 -->
<meta name="twitter:card" content="summary_large_image" />
```

### 성능 최적화

```
✅ 이미지: WebP 포맷, loading="lazy", 갤러리 이미지 max 800px
✅ 폰트: Google Fonts preconnect + display=swap
✅ CSS: 미사용 규칙 제거 (PurgeCSS)
✅ JS: 번들 최소화, defer 속성
✅ CloudFront: Gzip/Brotli 압축 활성화, Cache-Control 설정
```

---

## 9. 개발 시 주의사항 (톤 & 매너)

1. **복사/붙여넣기 금지**: 위 본문 카피는 그대로 사용. 임의 수정 시 브랜드 톤 훼손
2. **강조 최소화**: 볼드, 밑줄, 대문자 강조는 극히 제한적으로
3. **CTA는 부드럽게**: "지금 구매" 대신 "작품 보러가기", "스토어 방문하기"
4. **이미지 alt 텍스트**: 작품 제목을 한국어로 (예: `alt="잭슨, 멈칫하다 일러스트"`)
5. **링크 표기**: 외부 스토어 링크는 `target="_blank" rel="noopener noreferrer"`
6. **모바일 글자 크기**: 본문 최소 16px, 설명 14px 이상
7. **애니메이션**: `prefers-reduced-motion` 미디어 쿼리로 접근성 대응

```css
@media (prefers-reduced-motion: reduce) {
  .fade-in { transition: none; opacity: 1; transform: none; }
}
```

---

## 10. 외부 리소스 참조

| 용도 | URL |
|---|---|
| Google Fonts (한국어) | `https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@400;500&display=swap` |
| Google Fonts (영문) | `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap` |
| 스토어 링크 | `https://ngorongoro.kr` |
| 이미지 출처 | `/assets/images/works/` (로컬) |

---

*이 문서는 Codex(또는 Claude Code)가 응고롱고로 소개 웹사이트를 처음부터 일관되게 구현할 수 있도록 작성된 개발 지침서입니다.*  
*디자인 결정은 모두 응고롱고로의 브랜드 가이드라인(Slow Forest Village / 따뜻한 미니멀리즘)을 기준으로 합니다.*
