const HarTsanaanTovch = document.getElementById('toggle-dark-mode');
const adminToggleBtn = document.getElementById('admin-toggle');

// Hide admin sections on page load
document.addEventListener('DOMContentLoaded', () => {
  const loginSection = document.getElementById('login-section');
  const adminPanel = document.getElementById('admin-panel');
  loginSection.style.display = 'none';
  adminPanel.style.display = 'none';
});

if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  console.log('Dark mode is true');
} else {
  console.log('Dark mode is false');
}

HarTsanaanTovch.addEventListener('click', () => {
  const assanEseh = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', assanEseh);

  if (assanEseh) {
    console.log('Dark mode enabled');
  } else {
    console.log('Dark mode disabled');
  }
});
// Admin toggle functionality
adminToggleBtn.addEventListener('click', () => {
  const loginSection = document.getElementById('login-section');
  if (
    loginSection.style.display === 'none' ||
    loginSection.style.display === ''
  ) {
    loginSection.style.display = 'block';
  } else {
    loginSection.style.display = 'none';
  }
});

// Close admin login functionality
const closeAdminBtn = document.getElementById('close-admin');
closeAdminBtn.addEventListener('click', () => {
  const loginSection = document.getElementById('login-section');
  loginSection.style.display = 'none';
});

const PASSWORD = '123';
const loginBtn = document.getElementById('login-button');
const loginSection = document.getElementById('login-section');
const adminPanel = document.getElementById('admin-panel');
const loginError = document.getElementById('login-error');

loginBtn.addEventListener('click', () => {
  const password = document.getElementById('admin-password').value;

  if (password === PASSWORD) {
    loginSection.style.display = 'none';
    adminPanel.style.display = 'block';
    console.log('Нэвтрэлт амжилттай');
  } else {
    loginError.textContent = ' Нууц үг буруу байна!';
    console.log('Нэвтрэлт амжилтгүй');
  }
});

const enableEditBtn = document.getElementById('enable-edit-mode');
const saveBtn = document.getElementById('save-all');

enableEditBtn.addEventListener('click', () => {
  const about = document.getElementById('about-text');
  about.setAttribute('contenteditable', 'true');

  const project1 = document.getElementById('project-1');
  project1.setAttribute('contenteditable', 'true');
  const project2 = document.getElementById('project-2');
  project2.setAttribute('contenteditable', 'true');
  const project3 = document.getElementById('project-3');
  project3.setAttribute('contenteditable', 'true');

  saveBtn.style.display = 'inline-block';
  alert(
    'Засварлах горим идэвхжлээ. Хадгалах товчийг дарж өөрчлөлтөө хадгална уу.'
  );
});

// ✅ Save товчний event-г гадуур бичих
saveBtn.addEventListener('click', () => {
  const aboutText = document.getElementById('about-text').textContent.trim();
  localStorage.setItem('aboutText', aboutText);

  const project1Text = document.getElementById('project-1').textContent.trim();
  localStorage.setItem('project1Text', project1Text);

  const project2Text = document.getElementById('project-2').textContent.trim();
  localStorage.setItem('project2Text', project2Text);

  const project3Text = document.getElementById('project-3').textContent.trim();
  localStorage.setItem('project3Text', project3Text);

  alert('Өөрчлөлтүүд хадгалагдлаа.');
});

// ✅ Хуудас ачааллах үед хадгалсан өгөгдлийг сэргээх
document.addEventListener('DOMContentLoaded', () => {
  const savedAboutText = localStorage.getItem('aboutText');
  if (savedAboutText) {
    document.getElementById('about-text').textContent = savedAboutText;
  }
  const savedProject1Text = localStorage.getItem('project1Text');
  if (savedProject1Text) {
    document.getElementById('project-1').textContent = savedProject1Text;
  }
  const savedProject2Text = localStorage.getItem('project2Text');
  if (savedProject2Text) {
    document.getElementById('project-2').textContent = savedProject2Text;
  }
  const savedProject3Text = localStorage.getItem('project3Text');
  if (savedProject3Text) {
    document.getElementById('project-3').textContent = savedProject3Text;
  }
});
