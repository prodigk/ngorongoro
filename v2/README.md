# ngorongoro v2

현재 운영 중인 루트 사이트와 분리된 다음 버전 작업 공간입니다.

## 실행

정적 파일이므로 `v2/index.html`을 직접 열거나 저장소 루트에서 로컬 서버를 실행합니다.

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173/v2/`로 접속합니다.

## 구조

```text
v2/
├── index.html
├── gallery.html
├── about.html
├── contact.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── js/artworks.js
│   └── images/
│       ├── gallery/
│       └── about/
└── docs/spec-v2.md
```

## 작업 원칙

- 루트의 `index.html`과 `assets/`는 현재 사이트이므로 수정하지 않습니다.
- v2의 스타일, 스크립트, 이미지는 모두 `v2/assets/`에서 관리합니다.
- 작품 추가는 `assets/js/artworks.js`의 데이터와 `assets/images/gallery/` 이미지를 함께 수정합니다.
- v2가 완성된 뒤 배포 진입점 전환 여부를 결정합니다.
