function AreaofFigures(input) {
    let figure = String(input[0]);

    if (figure == "rectangle") {
        let xRec = Number(input[1]);
        let yRec = Number(input[2]);
        console.log((xRec * yRec).toFixed(3));

    } else if (figure == "circle"){
        let rCircle = Number(input  [1]);
        console.log((Math.PI * (rCircle ** 2)).toFixed(3));

    } else if (figure == "triangle") {
        let xTri = Number(input[1]);
        let yTri = Number(input[2]);
        console.log(((xTri * yTri) / 2).toFixed(3));

    } else if (figure == "square") {
        let sideSq = Number(input[1]);
        console.log((sideSq ** 2).toFixed(3));
    }
}
AreaofFigures(['rectangle', '7', '2.5']);
AreaofFigures(['circle', '6']);
AreaofFigures(['triangle', '4.5', '20']);
AreaofFigures(['square', '5']);
