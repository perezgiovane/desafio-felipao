let nickname = "BlackCrow"
let xp = 8999
switch (true) {
    case xp <= 1000:
    console.log ("O herói " + nickname + " está no nível Ferro")
    break;
    case xp <= 2000:
        console.log ("O herói " + nickname + " está no nível Bronze")
     break;
     case xp <= 5000:
     console.log ("O herói " + nickname + " está no nível Prata")
     break;
     case xp <= 7000:
        console.log ("O herói " + nickname + " está no nível Ouro")
    break;
     case xp <= 8000:
    console.log ("O herói " + nickname + " está no nível Platina")
    break;
    case xp <= 9000:
    console.log ("O herói " + nickname + " está no nível Ascendente")
    break;
    case xp <= 10000:
    console.log ("O herói " + nickname + " está no nível Imortal")
    break;
    case xp > 10000:
    console.log ("O herói " + nickname + " está no nível Radiante")
    break;
}
