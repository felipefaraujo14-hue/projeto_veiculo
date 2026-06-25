const form = document.getElementById("formVeiculo");
const lista = document.getElementById("listaVeiculos");

const veiculos = [];

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const ano = Number(document.getElementById("ano").value);
    const valor = Number(document.getElementById("valor").value);

    const combustivel = document.querySelector(
        'input[name="combustivel"]:checked'
    ).value;

    const veiculo = {
        marca,
        modelo,
        placa,
        ano,
        valor,
        combustivel
    };

    veiculos.push(veiculo);

    excluirVeiculos();

    form.reset();
});

function excluirVeiculo(index) {
    veiculos.splice(index, 1);
    excluirVeiculos();
}

function excluirVeiculos() {

    lista.innerHTML = "";

    veiculos.forEach((veiculo, index) => {

        const idade =
            new Date().getFullYear() - veiculo.ano;

        const ipva =
            calcularIPVA(veiculo.valor);

        const seguro =
            calcularSeguro(veiculo.valor);

        const licenciamento =
            calcularLicenciamento();

        const valorFinal =
            ipva + seguro + licenciamento;

        lista.innerHTML += `
            <div class="card">

                <p><strong>Marca:</strong> ${veiculo.marca}</p>

                <p><strong>Modelo:</strong> ${veiculo.modelo}</p>

                <p><strong>Placa:</strong> ${veiculo.placa}</p>

                <p><strong>Combustível:</strong> ${veiculo.combustivel}</p>

                <p><strong>Idade:</strong> ${idade} anos</p>

                <p><strong>Seguro:</strong>
                R$ ${seguro.toFixed(2)}</p>

                <p><strong>IPVA:</strong>
                R$ ${ipva.toFixed(2)}</p>

                <p><strong>Licenciamento:</strong>
                R$ ${licenciamento.toFixed(2)}</p>

                <p><strong>Valor Final:</strong>
                R$ ${valorFinal.toFixed(2)}</p>

                <button onclick="excluirVeiculo(${index})">
                    Excluir
                </button>

            </div>
        `;
    });
}