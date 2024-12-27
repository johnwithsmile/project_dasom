document.addEventListener('DOMContentLoaded', function() {
    // 사용자 메뉴 토글
    const userMenuBtn = document.getElementById('userMenuBtn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    userMenuBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    // 클릭 외 영역에서 드롭다운 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!userMenuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // 모바일 사이드바 토글 (향후 구현)
    const hamburgerBtn = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.admin-sidebar');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }

    // 테이블 행 클릭 이벤트
    const tableRows = document.querySelectorAll('.admin-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // TODO: 상세 정보 표시 로직 구현
            console.log('Row clicked:', this.dataset);
        });
    });

    // 답변 버튼 클릭 이벤트
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 테이블 행 클릭 이벤트 전파 방지
            // TODO: 답변 모달 또는 페이지 이동 로직 구현
            console.log('Action button clicked');
        });
    });
});
