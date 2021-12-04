document.getElementById('submit').addEventListener('click', (e)=>{
  e.preventDefault();
  
  let nome = document.getElementById('fname').value;
  let email = document.getElementById('fmail').value;
  let telefone = document.getElementById('fPhone').value;
  let mensagem = document.getElementById('fmesage').value;
  let data = document.getElementById('fData').value;
  let hora = document.getElementById('fHora').value;

  const content = document.getElementById('final');


  if(!content.classList.contains('active')){
    content.classList.add('active')
  }

  content.innerHTML = `
    <div>
    <i id="closeForm" class="fas fa-times"></i>
    <strong>Agendamento Registrado</strong>
    <p>${nome}</p>
    <p>
      <span>Para as ${hora}</span>
      <span>no dia ${data}</span>
    </p>
    <strong>Agradecimenos</strong>
  </div>
  `;

  document.getElementById('closeForm').addEventListener('click', ()=>{
    content.classList.remove('active');
    content.innerHTML = '';
  })
});