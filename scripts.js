// ##############    buscar informações do CEP     ##############

// document.getElementById("buscar").addEventListener("click", function() {
//     const cepInput = document.getElementById("cep").value;
//     const url = `https://viacep.com.br/ws/${cepInput}/json/`;
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         if (data.erro) {
//           document.getElementById("resultado").innerHTML = "CEP não encontrado.";
//         } else {
//           const endereco = `
//             <p><strong>CEP:</strong> ${data.cep}</p>
//             <p><strong>Logradouro:</strong> ${data.logradouro}</p>
//             <p><strong>Bairro:</strong> ${data.bairro}</p>
//             <p><strong>Cidade:</strong> ${data.localidade}</p>
//             <p><strong>Estado:</strong> ${data.uf}</p>
//           `;
//           document.getElementById("resultado").innerHTML = endereco;
//         }
//       })
//       .catch(error => {
//         console.error("Ocorreu um erro na busca: ", error);
//       });
// });

// ##############    Ampliar opções do formulário     ##############
document.getElementById("gerar").addEventListener("click", function() {
  const numeroFormularios = parseInt(document.getElementById("numero").value);
  const formulariosContainer = document.getElementById("formularios");
  formulariosContainer.innerHTML = '';

  for (let i = 0; i < numeroFormularios; i++) {
    const formulario = `
      <div class="container">
        <div class="row">
            <div id="header" class="container">
                <h3>Composição familiar</h3>
            </div>
        </div>
      </div>
 
  <form action="/action_page.php">
      <div class="row">
        <div class="col p-2 was-validated">
              <input name="nomeDp" type="text" class="form-control" placeholder="Nome completo"
                  aria-label="Nome completo" required />
        </div>

        <div class="col p-2 was-validated">
              <input name="dtNascDp" type="text" class="form-control" placeholder="Data de Nascimento"
                  aria-label="Data de Nascimento" required />
        </div>
     
      <div class="col p-2 was-validated">
          <input name="cpf" type="number" class="form-control" placeholder="CPF" aria-label="CPF"
              required />
      </div>
      </div>
  </form>

  <form action="/action_page.php">
      <div class="row">
          <div class="col p-2 was-validated">
              <input name="parentesco" type="text" class="form-control" placeholder="Grau de parentesco"
                  aria-label="Grau de parentesco" required />
          </div>
          <div class="col p-2 was-validated">
              <select name="sexoDp" class="form-select form-control was-validated"
              aria-label=".form-select-sm example">
              <option selected>Sexo</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Prefiro não informar</option>
          </select> 
          </div>

          <div class="col p-2 was-validated">
              <select name="pcdDp" class="form-select form-control was-validated"
                  aria-label=".form-select-sm example">
                  <option selected>PCD</option>
                  <option value="1">Sim</option>
                  <option value="2">Não</option>
              </select>
          </div>
      </div>
  </form>
  <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" name="observacao"></textarea>
      <label for="floatingTextarea">Observações relevantes: doenças, cuidados, etc...</label>
  </div>


      `;
      formulariosContainer.innerHTML += formulario;
    }
});

// ###################   Validar CPF #####################
// document.getElementById("vaasalidar").addEventListener("click", function() {
//     const cpfInput = document.getElementById("cpf").value;
//     const cpfNumeros = cpfInput.replace(/[^\d]/g, '');

//     if (cpfNumeros.length !== 11 || /^\d{11}$/.test(cpfNumeros) === false) {
//       document.getElementById("resultado").textContent = "CPF inválido.";
//       return;
//     }

//     let soma = 0;
//     for (let i = 0; i < 9; i++) {
//       soma += parseInt(cpfNumeros.charAt(i)) * (10 - i);
//     }
//     let resto = (soma * 10) % 11;
//     if (resto === 10 || resto === 11) resto = 0;

//     if (resto !== parseInt(cpfNumeros.charAt(9))) {
//       document.getElementById("resultado").textContent = "CPF inválido.";
//       return;
//     }

//     soma = 0;
//     for (let i = 0; i < 10; i++) {
//       soma += parseInt(cpfNumeros.charAt(i)) * (11 - i);
//     }
//     resto = (soma * 10) % 11;
//     if (resto === 10 || resto === 11) resto = 0;

//     if (resto !== parseInt(cpfNumeros.charAt(10))) {
//       document.getElementById("resultado").textContent = "CPF inválido.";
//       return;
//     }

//     document.getElementById("resultado").textContent = "CPF válido.";
//   });
