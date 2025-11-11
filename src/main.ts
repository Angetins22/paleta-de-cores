import TsColorConverter from 'ts-color-converter';

const cor1p1 = document.querySelector('.cor1-paleta1') as HTMLElement
const cor2p1 = document.querySelector('.cor2-paleta1') as HTMLElement
const cor3p1 = document.querySelector('.cor3-paleta1') as HTMLElement
const cor4p1 = document.querySelector('.cor4-paleta1') as HTMLElement
const cor5p1 = document.querySelector('.cor5-paleta1') as HTMLElement
const cor1p2 = document.querySelector('.cor1-paleta2') as HTMLElement
const cor2p2 = document.querySelector('.cor2-paleta2') as HTMLElement
const cor3p2 = document.querySelector('.cor3-paleta2') as HTMLElement
const cor4p2 = document.querySelector('.cor4-paleta2') as HTMLElement
const cor5p2 = document.querySelector('.cor5-paleta2') as HTMLElement
const cor1p3 = document.querySelector('.cor1-paleta3') as HTMLElement
const cor2p3 = document.querySelector('.cor2-paleta3') as HTMLElement
const cor3p3 = document.querySelector('.cor3-paleta3') as HTMLElement
const cor4p3 = document.querySelector('.cor4-paleta3') as HTMLElement
const cor5p3 = document.querySelector('.cor5-paleta3') as HTMLElement
const cor1p4 = document.querySelector('.cor1-paleta4') as HTMLElement
const cor2p4 = document.querySelector('.cor2-paleta4') as HTMLElement
const cor3p4 = document.querySelector('.cor3-paleta4') as HTMLElement
const cor4p4 = document.querySelector('.cor4-paleta4') as HTMLElement
const cor5p4 = document.querySelector('.cor5-paleta4') as HTMLElement
const botaoRefresh = document.querySelector('button') as HTMLElement

const converter = new TsColorConverter();

interface Cor {
    hex: string | object,
    inclinacao: number,
    saturacao: number,
    brilho: number,
}


let paletaDeCores: Cor[] = []


const copiarConteudo = async (text: string): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text)
        alert("texto copiado")
    } catch (err) {
        console.error('Falhou em copiar: ', err)
    }
}

const inc = (inclinacao: number): number => {
    while (inclinacao > 359) {
        inclinacao -= 360
    }
    return inclinacao
}

const hSL = (inclinacao: number, saturacao: number, brilho: number): TsColorConverter => {
    console.log(inclinacao)
    return converter.hsl(`hsl(${inc(inclinacao)}, ${saturacao}%, ${brilho}%)`)
}

const saturacaoAle = (min: number): number => {
    const max = 100
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const brilhoAle = (min: number): number => {
    const max = 100
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const brilhoFunc = (brilho: number): number => {
    if (brilho > 99) return 100
    else if (brilho < 0) return 0
    else {
        return brilho
    }
}


const renderizarCor1 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {

    cor1p1.style.setProperty('--cor1-h', String(inclinacao))
    cor1p1.style.setProperty('--cor1-s', `${brilhoFunc(saturacao)}%`)
    cor1p1.style.setProperty('--cor1-l', `${brilhoFunc(brilho)}%`)
    cor1p1.textContent = hex.to("HEX", true) as string

    cor2p1.style.setProperty('--cor2-h', String(inclinacao))
    cor2p1.style.setProperty('--cor2-s', `${brilhoFunc(saturacao - 10)}%`)
    cor2p1.style.setProperty('--cor2-l', `${brilhoFunc(brilho - 10)}%`)
    cor2p1.textContent = hSL(inclinacao, brilhoFunc(saturacao - 10), brilhoFunc(brilho - 10)).to("HEX", true) as string

    cor3p1.style.setProperty('--cor3-h', String(inclinacao))
    cor3p1.style.setProperty('--cor3-s', `${brilhoFunc(saturacao - 23)}%`)
    cor3p1.style.setProperty('--cor3-l', `${brilhoFunc(brilho - 23)}%`)
    cor3p1.textContent = hSL(inclinacao, brilhoFunc(saturacao - 23), brilhoFunc(brilho - 23)).to("HEX", true) as string

    cor4p1.style.setProperty('--cor4-h', String(inclinacao))
    cor4p1.style.setProperty('--cor4-s', `${brilhoFunc(saturacao - 40)}%`)
    cor4p1.style.setProperty('--cor4-l', `${brilhoFunc(brilho - 40)}%`)
    cor4p1.textContent = hSL(inclinacao, brilhoFunc(saturacao - 40), brilhoFunc(brilho - 40)).to("HEX", true) as string

    cor5p1.style.setProperty('--cor5-h', String(inclinacao))
    cor5p1.style.setProperty('--cor5-s', `${brilhoFunc(saturacao - 57)}%`)
    cor5p1.style.setProperty('--cor5-l', `${brilhoFunc(brilho - 57)}%`)
    cor5p1.textContent = hSL(inclinacao, brilhoFunc(saturacao - 57), brilhoFunc(brilho - 57)).to("HEX", true) as string


    const texto = cor1p1.textContent
    const texto2 = cor2p1.textContent
    const texto3 = cor3p1.textContent
    const texto4 = cor4p1.textContent
    const texto5 = cor5p1.textContent

    cor1p1.onclick = () => copiarConteudo(texto)
    cor2p1.onclick = () => copiarConteudo(texto2)
    cor3p1.onclick = () => copiarConteudo(texto3)
    cor4p1.onclick = () => copiarConteudo(texto4)
    cor5p1.onclick = () => copiarConteudo(texto5)

}

const renderizarCor2 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {

    cor1p2.style.setProperty('--cor1-h', String(inclinacao))
    cor1p2.style.setProperty('--cor1-s', `${brilhoFunc(saturacao)}%`)
    cor1p2.style.setProperty('--cor1-l', `${brilhoFunc(brilho)}%`)

    cor1p2.textContent = hex.to("HEX", true) as string

    cor2p2.style.setProperty('--cor2-h', String(inclinacao))
    cor2p2.style.setProperty('--cor2-s', `${brilhoFunc(saturacao - 7)}%`)
    cor2p2.style.setProperty('--cor2-l', `${brilhoFunc(brilho - 7)}%`)
    cor2p2.textContent = hSL(inclinacao, brilhoFunc(saturacao - 7), brilhoFunc(brilho - 7)).to("HEX", true) as string

    cor3p2.style.setProperty('--cor3-h', String(inclinacao))
    cor3p2.style.setProperty('--cor3-s', `${brilhoFunc(saturacao - 23)}%`)
    cor3p2.style.setProperty('--cor3-l', `${brilhoFunc(brilho - 23)}%`)
    cor3p2.textContent = hSL(inclinacao, brilhoFunc(saturacao - 23), brilhoFunc(brilho - 23)).to("HEX", true) as string

    cor4p2.style.setProperty('--cor4-h', String(inclinacao))
    cor4p2.style.setProperty('--cor4-s', `${brilhoFunc(saturacao - 40)}%`)
    cor4p2.style.setProperty('--cor4-l', `${brilhoFunc(brilho - 40)}%`)
    cor4p2.textContent = hSL(inclinacao, brilhoFunc(saturacao - 40), brilhoFunc(brilho - 40)).to("HEX", true) as string

    cor5p2.style.setProperty('--cor5-h', String(inclinacao))
    cor5p2.style.setProperty('--cor5-s', `${brilhoFunc(saturacao - 57)}%`)
    cor5p2.style.setProperty('--cor5-l', `${brilhoFunc(brilho - 57)}%`)
    cor5p2.textContent = hSL(inclinacao, brilhoFunc(saturacao - 57), brilhoFunc(brilho - 57)).to("HEX", true) as string

    const texto = cor1p2.textContent
    const texto2 = cor2p2.textContent
    const texto3 = cor3p2.textContent
    const texto4 = cor4p2.textContent
    const texto5 = cor5p2.textContent

    cor1p2.onclick = () => copiarConteudo(texto)
    cor2p2.onclick = () => copiarConteudo(texto2)
    cor3p2.onclick = () => copiarConteudo(texto3)
    cor4p2.onclick = () => copiarConteudo(texto4)
    cor5p2.onclick = () => copiarConteudo(texto5)

}

const renderizarCor3 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {

    cor1p3.style.setProperty('--cor1-h', String(inclinacao))
    cor1p3.style.setProperty('--cor1-s', `${brilhoFunc(saturacao)}%`)
    cor1p3.style.setProperty('--cor1-l', `${brilhoFunc(brilho)}%`)
    cor1p3.textContent = hex.to("HEX", true) as string

    cor2p3.style.setProperty('--cor2-h', String(inclinacao))
    cor2p3.style.setProperty('--cor2-s', `${brilhoFunc(saturacao - 7)}%`)
    cor2p3.style.setProperty('--cor2-l', `${brilhoFunc(brilho - 7)}%`)
    cor2p3.textContent = hSL(inclinacao, brilhoFunc(saturacao - 7), brilhoFunc(brilho - 7)).to("HEX", true) as string

    cor3p3.style.setProperty('--cor3-h', String(inclinacao))
    cor3p3.style.setProperty('--cor3-s', `${brilhoFunc(saturacao - 23)}%`)
    cor3p3.style.setProperty('--cor3-l', `${brilhoFunc(brilho - 23)}%`)
    cor3p3.textContent = hSL(inclinacao, brilhoFunc(saturacao - 23), brilhoFunc(brilho - 23)).to("HEX", true) as string

    cor4p3.style.setProperty('--cor4-h', String(inclinacao))
    cor4p3.style.setProperty('--cor4-s', `${brilhoFunc(saturacao - 40)}%`)
    cor4p3.style.setProperty('--cor4-l', `${brilhoFunc(brilho - 40)}%`)
    cor4p3.textContent = hSL(inclinacao, brilhoFunc(saturacao - 40), brilhoFunc(brilho - 40)).to("HEX", true) as string

    cor5p3.style.setProperty('--cor5-h', String(inclinacao))
    cor5p3.style.setProperty('--cor5-s', `${brilhoFunc(saturacao - 57)}%`)
    cor5p3.style.setProperty('--cor5-l', `${brilhoFunc(brilho - 57)}%`)
    cor5p3.textContent = hSL(inclinacao, brilhoFunc(saturacao - 57), brilhoFunc(brilho - 57)).to("HEX", true) as string

    const texto = cor1p3.textContent
    const texto2 = cor2p3.textContent
    const texto3 = cor3p3.textContent
    const texto4 = cor4p3.textContent
    const texto5 = cor5p3.textContent

    cor1p3.onclick = () => copiarConteudo(texto)
    cor2p3.onclick = () => copiarConteudo(texto2)
    cor3p3.onclick = () => copiarConteudo(texto3)
    cor4p3.onclick = () => copiarConteudo(texto4)
    cor5p3.onclick = () => copiarConteudo(texto5)

}

const renderizarCor4 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {

    cor1p4.style.setProperty('--cor1-h', String(inclinacao))
    cor1p4.style.setProperty('--cor1-s', `${brilhoFunc(saturacao)}%`)
    cor1p4.style.setProperty('--cor1-l', `${brilhoFunc(brilho)}%`)
    cor1p4.textContent = hex.to("HEX", true) as string

    cor2p4.style.setProperty('--cor2-h', String(inclinacao))
    cor2p4.style.setProperty('--cor2-s', `${brilhoFunc(saturacao - 7)}%`)
    cor2p4.style.setProperty('--cor2-l', `${brilhoFunc(brilho - 7)}%`)
    cor2p4.textContent = hSL(inclinacao, brilhoFunc(saturacao - 7), brilhoFunc(brilho - 7)).to("HEX", true) as string

    cor3p4.style.setProperty('--cor3-h', String(inclinacao))
    cor3p4.style.setProperty('--cor3-s', `${brilhoFunc(saturacao - 23)}%`)
    cor3p4.style.setProperty('--cor3-l', `${brilhoFunc(brilho - 23)}%`)
    cor3p4.textContent = hSL(inclinacao, brilhoFunc(saturacao - 23), brilhoFunc(brilho - 23)).to("HEX", true) as string

    cor4p4.style.setProperty('--cor4-h', String(inclinacao))
    cor4p4.style.setProperty('--cor4-s', `${brilhoFunc(saturacao - 40)}%`)
    cor4p4.style.setProperty('--cor4-l', `${brilhoFunc(brilho - 40)}%`)
    cor4p4.textContent = hSL(inclinacao, brilhoFunc(saturacao - 40), brilhoFunc(brilho - 40)).to("HEX", true) as string

    cor5p4.style.setProperty('--cor5-h', String(inclinacao))
    cor5p4.style.setProperty('--cor5-s', `${brilhoFunc(saturacao - 57)}%`)
    cor5p4.style.setProperty('--cor5-l', `${brilhoFunc(brilho - 57)}%`)
    cor5p4.textContent = hSL(inclinacao, brilhoFunc(saturacao - 57), brilhoFunc(brilho - 57)).to("HEX", true) as string

    const texto = cor1p4.textContent
    const texto2 = cor2p4.textContent
    const texto3 = cor3p4.textContent
    const texto4 = cor4p4.textContent
    const texto5 = cor5p4.textContent

    cor1p4.onclick = () => copiarConteudo(texto)
    cor2p4.onclick = () => copiarConteudo(texto2)
    cor3p4.onclick = () => copiarConteudo(texto3)
    cor4p4.onclick = () => copiarConteudo(texto4)
    cor5p4.onclick = () => copiarConteudo(texto5)

}

const adicionarCor1 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {
    const novaCor: Cor = {
        hex: hex,
        inclinacao: inclinacao,
        saturacao: saturacao,
        brilho: brilho
    }
    paletaDeCores.push(novaCor)
    console.log(novaCor)
    renderizarCor1(hex, inclinacao, saturacao, brilho)
}

const adicionarCor2 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {
    const novaCor: Cor = {
        hex: hex,
        inclinacao: inclinacao,
        saturacao: saturacao,
        brilho: brilho
    }

    console.log(novaCor)

    paletaDeCores.push(novaCor)
    renderizarCor2(hex, inclinacao, saturacao, brilho)
}

const adicionarCor3 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {
    const novaCor: Cor = {
        hex: hex,
        inclinacao: inclinacao,
        saturacao: saturacao,
        brilho: brilho
    }

    console.log(novaCor)

    paletaDeCores.push(novaCor)
    renderizarCor3(hex, inclinacao, saturacao, brilho)
}

const adicionarCor4 = (hex: TsColorConverter, inclinacao: number, saturacao: number, brilho: number): void => {
    const novaCor: Cor = {
        hex: hex,
        inclinacao: inclinacao,
        saturacao: saturacao,
        brilho: brilho
    }

    console.log(novaCor)

    paletaDeCores.push(novaCor)
    renderizarCor4(hex, inclinacao, saturacao, brilho)
}



const refresh = () => {

    const minSaturacao = 40
    const minBrilho = 85
    let inclinacao = Math.floor(Math.random() * 360)
    let saturacao = saturacaoAle(minSaturacao)
    let brilho = brilhoAle(minBrilho)


    adicionarCor1(hSL(inclinacao, saturacao, brilho), inclinacao, saturacao, brilho)

    inclinacao = inc(inclinacao + 120)
    saturacao = saturacaoAle(minSaturacao)
    brilho = brilhoAle(minBrilho)

    adicionarCor2(
        hSL(inclinacao, saturacao, brilho),
        inclinacao,
        saturacao,
        brilho
    )
    inclinacao = inc(inclinacao + 120)
    saturacao = saturacaoAle(minSaturacao)
    brilho = brilhoAle(minBrilho)

    adicionarCor3(
        hSL(inclinacao, saturacao, brilho),
        inclinacao,
        saturacao,
        brilho
    )

    inclinacao = inc(inclinacao + 120)
    saturacao = saturacaoAle(minSaturacao)
    brilho = brilhoAle(minBrilho)

    adicionarCor4(
        hSL(inclinacao, saturacao, brilho),
        inclinacao,
        saturacao,
        brilho
    )
}

botaoRefresh.onclick = refresh

refresh()