# 🌟 다솜 재가복지센터 통합 관리 시스템

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI/CD](https://github.com/your-org/project-dasom/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-org/project-dasom/actions)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-important)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **고령자 친화적 웹 플랫폼** + **효율적인 복지 서비스 관리 솔루션**

## 🎯 핵심 가치

- 60대 이상 사용자를 위한 접근성 최적화 UI와 요양보호사 스케줄링 시스템을 결합한 통합 복지 플랫폼

## 2. 주요 기능

- 사용자 회원가입/로그인
- CRUD 기반 데이터 관리
- 실시간 알림/푸시
- 반응형 UI (모바일/데스크톱)

## 3. 아키텍처

- 정적 사이트 (HTML5, CSS3, JavaScript)
- graph TD
  A[Client] -->|HTTPS| B[CDN]
  B --> C[API Gateway]
  C --> D[Auth Service]
  C --> E[Schedule Service]
  C --> F[Inquiry Service]
  D --> G[(MySQL DB)]
  E --> H[(MongoDB)]

## 4. 기술 스택

- 프론트엔드
- 상태 관리
- 백엔드
- 인프라
- 모니터링
- HTML5
- CSS3
- JavaScript (ES6+)
- CI/CD: GitHub Pages (선택 사항)

## 5. 설치 및 실행

- 환경 설정 : cp .env.example .env # 카카오맵 API 키 등 입력
- Production 빌드 : npm run build && npm run start:prod

## 6. 환경 변수

해당 프로젝트는 정적 사이트로, 별도의 환경 변수가 필요 없습니다.

## 프로젝트 소개

다솜 재가복지센터의 공식 웹사이트입니다. 어르신들과 보호자들에게 필요한 정보를 제공하고, 효율적인 서비스 관리를 위한 관리자 시스템을 포함하고 있습니다.

## 주요 기능

### 사용자 페이지

1. **메인 페이지**

   - 히어로 섹션 (이미지 캐러셀)
   - 센터 소개 요약
   - 주요 서비스 안내
   - 갤러리 섹션
   - 실버 모드 지원 (글자 크기 조절)

2. **센터 소개 페이지**

   - 센터 미션과 비전
   - 센터장 인사말
   - 연혁
   - 시설 소개
   - 오시는 길 (카카오맵 연동)

3. **서비스 안내 페이지**

   - 서비스 철학
   - 주요 서비스 설명
   - 서비스 이용 절차
   - 비용 안내
   - 자주 묻는 질문

4. **연락처 페이지**
   - 문의 안내
   - 상담 신청 폼
   - FAQ
   - 찾아오시는 길

### 관리자 페이지

1. **로그인 시스템**

   - 관리자 인증

2. **대시보드**

   - 통계 현황
   - 최근 문의 내역
   - 일정 관리

3. **관리 기능**
   - 문의 관리
   - 이용자 관리
   - 요양보호사 관리
   - 일정 관리
   - 갤러리 관리
   - 설정

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- 카카오맵 API

## 디자인 특징

- 반응형 웹 디자인
- 실버 모드 지원
- 직관적인 UI/UX
- 접근성 고려

## 진행 예정 작업

- [x] 프로젝트 초기 설정
- [x] 메인 페이지 기본 구조 구현
- [x] 서비스 소개 페이지 기본 구조 구현
- [x] 센터 소개 페이지 기본 구조 구현
- [x] 연락처 페이지 기본 구조 구현
- [x] 관리자 페이지 기본 구조 구현
- [x] 반응형 디자인 기본 적용

1. **사용자 기능 완성**

   - [ ] 실버 모드 지원 (글자 크기/대비 조절)
   - [ ] 폼 유효성 검사 (로그인/회원가입/문의 폼)
   - [ ] 이미지 갤러리 기능 (썸네일, 모달 보기, 캐러셀)
   - [ ] 카카오맵 연동 (위치 표시, 경로 안내)
   - [ ] 애니메이션 효과 (스크롤, 버튼 호버)

2. **관리자 페이지 개발**

   - [ ] 로그인/인증 시스템 (세션 및 JWT)
   - [ ] 대시보드 (통계 현황, 알림 배지)
   - [ ] 문의 관리 (목록, 상세, 답글)
   - [ ] 이용자 관리 (조회/수정/삭제)
   - [ ] 갤러리 관리 (이미지 업로드/삭제)

3. **프론트엔드 최적화**

   - [ ] 반응형 디자인 점검 (모바일/태블릿)
   - [ ] 성능 최적화 (이미지 레이지 로딩, 코드 스플리팅)
   - [ ] 접근성 개선 (ARIA, 키보드 네비게이션)
   - [ ] 크로스 브라우저 테스트

4. **콘텐츠 보강 및 테스트**
   - [ ] 실제 콘텐츠 추가 (센터 사진, 텍스트)
   - [ ] 단위/통합 테스트 작성 및 수행
   - [ ] 보안 점검 (XSS, CSRF)
   - [ ] 최종 리뷰 및 배포 준비

## 개발 일정

1. **사용자 기능 완성** (2주)

   - 실버 모드 및 기본 기능 구현
   - 반응형 디자인 완성
   - 기본 애니메이션 추가

2. **관리자 페이지 개발** (2주)

   - 로그인/인증 시스템 구현
   - 대시보드 구현
   - 문의 관리 구현
   - 이용자 관리 구현
   - 갤러리 관리 구현

3. **프론트엔드 최적화** (1주)

   - 성능 최적화
   - 접근성 개선
   - 크로스 브라우저 테스트

4. **콘텐츠 보강 및 테스트** (1주)
   - 실제 콘텐츠 추가
   - 테스트 수행
   - 최종 점검

## 주의사항

- 카카오맵 API 키 필요 : 사용량 제한, 로컬 캐싱
- 고령자 UX 적응 부족 : 실제 어르신 대상 유저 테스트
- 복잡한 의료 데이터 : HL7 FHRIR 표준 준수
- 관리자 계정 설정 필요
- 이미지 최적화 필요

## 차별화 포인트

- 음성 명령 지원
- QR코드 기반 신속 접근 시스템
- 챗봇
- 긴급 SOS버튼(위치정보 자동 전송)

## 기여 방법

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

## 라이선스

This project is licensed under the MIT License - see the LICENSE file for details
