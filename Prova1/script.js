
function validation(){
  const form = document.forms['register'];
  const name = form.Name.value;
  const CEP = form.CEP.value;
  const CPF = form.NCPF.value;
  const CNPJ = form.NCNPJ.value;
  if (name === ''){
    alert('Escreva seu nome');
    return false;
  } else if ((CEP === '') || (CEP.length !== 9)){
    alert('Escreva seu CEP');
    return false;
  } else if ((document.getElementById('showICpf').style.display == 'inline') && ((CPF === '') || (CPF.length !== 14))){
    alert('Escreva seu CPF');
    return false;
  } else if ((document.getElementById('showICnpj').style.display == 'inline') && ((CNPJ === '') || (CNPJ.length !== 18))){
    alert('Escreva seu CNPJ');
    return false;
  } else {
    alert('Success Submit');
    return true;
  }
}
document.getElementById('checkCnpj').addEventListener('click', function(){
  document.getElementById('showLCpf').style.display = 'none';
  document.getElementById('showICpf').style.display = 'none';
  document.getElementById('showLCnpj').style.display = 'inline';
  document.getElementById('showICnpj').style.display = 'inline';
});
document.getElementById('checkCpf').addEventListener('click', function(){
  document.getElementById('showLCnpj').style.display = 'none';
  document.getElementById('showICnpj').style.display = 'none';
  document.getElementById('showLCpf').style.display = 'inline';
  document.getElementById('showICpf').style.display = 'inline';
});
