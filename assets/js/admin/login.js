document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;
        
        // TODO: 실제 로그인 로직 구현
        // 예시로 기본 검증만 수행
        if (username && password) {
            // 로그인 성공 시 대시보드로 이동
            window.location.href = 'dashboard.html';
        } else {
            alert('아이디와 비밀번호를 입력해주세요.');
        }
    });
});
