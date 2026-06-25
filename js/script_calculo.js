function calcularIPVA(valorVeiculo, combustivel) {

    if (combustivel === "Gasolina") {
        return valorVeiculo * 0.04;
    }

    if (combustivel === "Etanol") {
        return valorVeiculo * 0.03;
    }

    if (combustivel === "GNV") {
        return valorVeiculo * 0.02;
    }

    if (combustivel === "Diesel") {
        return valorVeiculo * 0.05;
    }

    return valorVeiculo * 0.04;
}

function calcularSeguro(valorVeiculo, combustivel) {

    if (combustivel === "Gasolina") {
        return valorVeiculo * 0.10;
    }

    if (combustivel === "Etanol") {
        return valorVeiculo * 0.08;
    }

    if (combustivel === "GNV") {
        return valorVeiculo * 0.06;
    }

    if (combustivel === "Diesel") {
        return valorVeiculo * 0.12;
    }

    return valorVeiculo * 0.10;
}

function calcularLicenciamento() {
    return 150;
}