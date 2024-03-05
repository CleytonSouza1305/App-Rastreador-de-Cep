//Ultilizando a API
const objetos = []

function validarCEPFormato(cep) {
  const formatoCEP = /^\d{5}-?\d{3}$/;
  return formatoCEP.test(cep);
}

function consultarCep(cep) {
  if (!validarCEPFormato(cep)) {
    document.getElementById('cep').value = 'Isso não é um CEP'
    return
  } 
   const url = `https://viacep.com.br/ws/${cep}/json/`
   fetch(url)
   .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição. Status: ${response.status}`);
      }
      return response.json();
    })

    .then(data => {
      const addressInput = document.getElementById('address')
      const city = document.getElementById('city')
      const state = document.getElementById('state')
      const triagem = document.getElementById('direction')
      const bairooaddress = document.getElementById('bairro')
      const cepNaTela = document.getElementById('ceptext')

      const cidade = data.localidade || 'Não encontrado'
      city.innerText = 'Cidade: ' + cidade

      const estado = data.uf || 'Não encontrado'
      state.innerText = 'Estado: ' + estado

      const rua = data.logradouro || 'Não encontrado'
      addressInput.innerText = 'Rua: ' + rua

      const bairro = data.bairro || 'Não encontrado'
      bairooaddress.innerText = 'Bairro: ' + bairro

      const cepText = data.cep || 'Não encontrado'
      cepNaTela.innerText = 'CEP: ' + cepText


   const cep = document.getElementById('cep')
   const box = document.getElementById('box')
   let pCEP = document.getElementById('pcep')
   let ptriagem = document.getElementById('ptriagem')
   let sro = document.getElementById('sro')


     if (cep.value >= '01000000' && cep.value <= '01399999' || cep.value >= '01000-000' && cep.value <= '01399-999') {
      triagem.innerText = 'JAGUARÉ' 
      box.style.backgroundColor = '#ecf400'
      box.style.color = '#7f7f7f'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'JAGUARÉ'
      sro.innerText = 'SRO (05314-979)'

     } else if(cep.value > '01399999' && cep.value <= '01499999' || cep.value > '01399-999' && cep.value <= '01499-999') {
      triagem.innerText = 'SAÚDE - CAPITAL'
      box.style.backgroundColor = '#b98aff'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SAÚDE - CAPITAL'
      sro.innerText = 'SRO (04293-970)'
     

     } else if (cep.value >= '01500000' && cep.value <= '03999999' || cep.value >= '01500-000' && cep.value <= '03999-999') {
      triagem.innerText = 'VILA MARIA - A'
      box.style.backgroundColor = '#b70100'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'VILA MARIA - A'
      sro.innerText = 'SRO (02170-970)'
     

     } else if (cep.value >= '04000000' && cep.value <= '04699999' || cep.value >= '04000-000' && cep.value <= '04699-999') {
      triagem.innerText = 'SAÚDE - CAPITAL'
      box.style.backgroundColor = '#b98aff'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SAÚDE - CAPITAL'
      sro.innerText = 'SRO (04293-970)'
     

     } else if (cep.value >= '04700000' && cep.value <= '04999999' || cep.value >= '04700-000' && cep.value <= '04999-999') {
      triagem.innerText = 'SANTO AMARO (MaQ A)'
      box.style.backgroundColor = '#013c10'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SANTO AMARO (MaQ A)'
      sro.innerText = 'SRO (04754-974)'

     } else if (cep.value >= '05000000' && cep.value <= '05699999' || cep.value >= '05000-000' && cep.value <= '05699-999') {
      triagem.innerText = 'JAGUARÉ'
      box.style.backgroundColor = '#ecf400'
      box.style.color = '#7f7f7f'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'JAGUARÉ'
      sro.innerText = 'SRO (05314-979)'
     

     } else if (cep.value >= '05700000' && cep.value <= '05899999' || cep.value >= '05700-000' && cep.value <= '05899-999') {
      triagem.innerText = 'SANTO AMARO (MaQ B)'
      box.style.backgroundColor = '#05c134'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SANTO AMARO (MaQ B)'
      sro.innerText = 'SRO (04754-974)'
      
     } else if (cep.value >= '05900000' && cep.value <= '06749999' || cep.value >= '05900-000' && cep.value <= '06749-999') {
      triagem.innerText = 'JAGUARÉ'
      box.style.backgroundColor = '#ecf400'
      box.style.color = '#7f7f7f'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'JAGUARÉ'
      sro.innerText = 'SRO (05314-979)'
     

     } else if (cep.value >= '06750000' && cep.value <= '06999999' || '06750-000' && cep.value <= '06999-999') {
      triagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      sro.innerText = 'SRO (02170-970)'
     

     } else if (cep.value >= '07000000' && cep.value <= '07749999' || cep.value >= '07000-000' && cep.value <= '07749-999') {
      triagem.innerText = 'VILA MARIA - B'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'VILA MARIA - B'
      sro.innerText = 'SRO (02170-970)'
     


     } else if (cep.value >= '07750000' && cep.value <= '07799999' || cep.value >= '07750-000' && cep.value <= '07799-999') {
      triagem.innerText = 'JAGUARÉ'
      box.style.backgroundColor = '#ecf400'
      box.style.color = '#7f7f7f'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'JAGUARÉ'
      sro.innerText = 'SRO (05314-979)'
     

     } else if (cep.value >= '07800000' && cep.value <= '07999999' || cep.value >= '07800-000' && cep.value <= '07999-999') {
      triagem.innerText = 'VILA MARIA - B'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'VILA MARIA - B'
      sro.innerText = 'SRO (02170-970)'
     

     } else if (cep.value >= '08000000' && cep.value <= '08900000' || cep.value >= '08000-000' && cep.value <= '08900-000') {
      triagem.innerText = 'GUARULHOS'
      box.style.backgroundColor = '#8B4513'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'GUARULHOS'
      sro.innerText = 'SRO (07210-970)'
     

     }
     else if (cep.value >= '09000000' && cep.value <= '09999999' || cep.value >= '09000-000' && cep.value <= '09999-999') {
      triagem.innerText = 'SANTO ANDRÉ'
      box.style.backgroundColor = '#f97603'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SANTO ANDRÉ'
      sro.innerText = 'SRO (09210-977)'
     
      
     } else if (cep.value >= '11000000' && cep.value <= '11599999' || cep.value >= '11000-000' && cep.value <= '11599-999') {
      triagem.innerText = 'SAÚDE - CAPITAL'
      box.style.backgroundColor = '#b98aff'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SAÚDE - CAPITAL'
      sro.innerText = 'SRO (04293-970)'
     

     } else if (cep.value >= '11600000' && cep.value <= '11699999' || cep.value >= '11600-000' && cep.value <= '11699-999') {
      triagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      box.style.backgroundColor = '#06005d'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      sro.innerText = 'SRO (04293-970)'
     

     } else if (cep.value >= '11700000' && cep.value <= '11999999' || cep.value >= '11700-000' && cep.value <= '11999-999') {
      triagem.innerText = 'SAÚDE - CAPITAL'
      box.style.backgroundColor = '#b98aff'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'SAÚDE - CAPITAL'
      sro.innerText = 'SRO (04293-970)'
     

     } else if (cep.value >= '12000000' && cep.value <= '23999999' || cep.value >= '12000-000' && cep.value <= '23999-999') {
      triagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      box.style.backgroundColor = '#06005d'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ A)'
      sro.innerText = 'SRO (04293-970)'
     

     }  else if (cep.value > '23999999' || cep.value > '23999-999') {
      triagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ B)'
      box.style.backgroundColor = '#00b5ba'
      box.style.color = '#f4f4f4'
      pCEP.innerText = 'CEP: ' + cepText
      ptriagem.innerText = 'EXPORTAÇÃO SAÚDE (MaQ B)'
      sro.innerText = 'SRO (04293-970)'  
     }
    })
}

document.addEventListener('keypress', function(ev) {
  const tecla = ev.key

  if (tecla === 'Enter') {
    const cep = document.getElementById('cep')
   consultarCep(cep.value)
   cep.select()
  }
})

document.querySelector('#ler').addEventListener('click', function() {
   const cep = document.getElementById('cep')
   consultarCep(cep.value)
   cep.select()
})

document.getElementById('divergir').addEventListener('click', function() {
  const cep = document.getElementById('cep')
  const cepdivergido = prompt('Digite o número do CEP para colocar na divergência')
  const confirmation = confirm(`Certeza que deseja colocar o objeto com o CEP '${cepdivergido}' na divergência`)

  if (confirmation) {
    alert('Objeto colocado na divergência com sucesso')
    objetos.push(cepdivergido)
  }

  document.querySelector('#ler').addEventListener('click', function() {
    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');
    const divergênciaText = document.getElementById('divergênciaText');

    if (objetos.includes(cep.value)) {
        box.style.display = 'none';
        divergênciaText.innerText = 'Você pegou um objeto da divergência\nDevolva ao remetente';
        box2.style.display = 'block'
    } else {
        consultarCep(cep.value);
        box2.style.display = 'none'
        box.style.display = 'block';
    }
 })
})
