1. 개요
   프로젝트 다솜의 주요 화면 설계 및 와이어프레임을 정리합니다.

2. 화면 목록
   로그인 페이지
   이메일/비밀번호 입력폼
   로그인 버튼, 회원가입 링크
   회원가입 페이지
   사용자 정보 입력폼(이메일, 비밀번호, 닉네임)
   가입 완료 후 로그인으로 이동
   대시보드
   요약 카드(총 항목 수, 알림)
   네비게이션 바(홈, 프로필, 설정, 로그아웃)
   상세보기/편집 페이지
   항목 리스트 + 검색/필터
   항목 클릭 시 모달 혹은 별도 페이지로 편집
   설정 페이지
   프로필 수정, 테마 변경, 로그아웃

3. 와이어프레임
   로그인 페이지
   CopyInsert
   +--------------------------------------+
   | Project Dasom |
   | [ 이메일 입력 ] |
   | [ 비밀번호 입력 ] |
   | [ 로그인 버튼 ] |
   | 회원가입 → |
   +--------------------------------------+
   대시보드
   CopyInsert
   +----------------------------------------------+
   | Logo | 홈 | 프로필 | 설정 | 로그아웃 |
   +----------------------------------------------+
   | 요약 카드: 총 항목 12개 | 알림 3건 |
   +----------------------------------------------+
   | [새 항목 추가] | [검색창] |
   +----------------------------------------------+
   | 항목 리스트 |
   | - 항목 A [보기] [수정] [삭제] |
   | - 항목 B ... |
   +----------------------------------------------+

4. UI 스타일 가이드

   - Primary: #4F46E5 (CTA 버튼, 활성화 상태)
   - Secondary: #6B7280 (비활성 버튼, 서브 텍스트)
   - Success: #10B981 (완료 상태)
   - Warning: #F59E0B (경고 알림)
   - Error: #EF4444 (에러 메시지)
   - 기본폰트 : Noto Sans KR (400/500/700)
   - 제목: 24px Bold (#1F2937)
   - 본문: 16px Regular (#4B5563)
   - 보조 텍스트: 14px (#6B7280)
   - Button: - 기본 사이즈: 44px 높이 (접근성 준수)
   - 상태: Default → Hover (밝기 10% up) → Active (어둡게) → Disabled (50% 투명도)
   - 아이콘 + 텍스트 조합시 8px 간격

5. 인터랙티브 컴포넌트 규칙

   - **폼 요소**
   - 입력 필드: 12px 패딩, 8px border-radius
   - 유효성 피드백: 실시간 validation + 에러 메시지 (빨간색 12px)
   - **모달 창**
   - 백드롭: 70% 불투명도 검정
   - 컨텐츠: 중앙 정렬, 최소 24px 패딩
   - 모바일: 하단에서 슬라이드 업 (100% 너비)
   - **로딩 상태**
   - 스켈레톤 UI: #E5E7EB 배경 애니메이션
   - 프로그레스 바: 파란색 그라데이션 (Lottie 애니메이션 권장)

6. 모바일 디자인 가이드

   - 모바일 우선(Mobile-first) 디자인
   - 접근성(ARIA) 고려
   - 브레이크 포인트 : 태블릿 768px, 데스크탑 1024px

7. 터치 타겟 최적화

   - 최소 클릭 영역 : 44x44px (WCAG 2.1 AA 준수)
   - 버튼 간격 : 8px 이상(오동작 방지)
   - 스와이프 제스쳐 : 좌우 20% 이상 이동시 액션

8. 접근성 강화 가이드

   - ARIA 필수속성
   - 키보드 네비게이션

9. 폴더 구조
   project_dasom/
   ├── server/
   │ ├── app.js # Express 서버 설정
   │ ├── routes/
   │ │ ├── admin.js # 관리자 페이지 라우트
   │ │ └── user.js # 사용자 페이지 라우트
   │ └── package.json
   └── public/ # 정적 파일
   ├── css/
   │ ├── main.css # 기본 스타일
   │ └── silver.css # 실버 모드 전용
   ├── js/
   │ ├── main.js # 공통 기능
   │ └── admin.js # 관리자 페이지 스크립트
   ├── images/ # 이미지 리소스
   └── views/ # HTML 템플릿
   ├── index.html
   ├── about.html
   ├── admin/
   │ └── dashboard.html
   └── ... # 기타 페이지
