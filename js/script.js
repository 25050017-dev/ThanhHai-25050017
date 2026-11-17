const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('joinForm').addEventListener('submit',function(e){
  e.preventDefault();
  const email=document.getElementById('email').value.trim();
  document.getElementById('formMessage').textContent=`Cảm ơn bạn! ${email} đã được ghi nhận trong bản demo.`;
  this.reset();
});
document.getElementById('showAll').addEventListener('click',()=>{
  alert('Đây là phiên bản demo. Nhóm có thể phát triển thêm trang danh sách bài viết ở phiên bản tiếp theo.');
});