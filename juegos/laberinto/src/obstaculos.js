for(let i = 0; i<250;i = i+50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:${i}px; left:300px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 0; i<150; i = i + 50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:100px; left: ${i}px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 100; i<300; i = i + 50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:200px; left: ${i}px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 0; i<500; i = i + 100)
{
    let hilera = `<img src="assets/img/porton.png" class="obstaculo"  style="top:300px; left:${i}px;" alt=""></img>`;
    document.write(hilera);
    hilera = `<img src="assets/img/muro.png" class="obstaculo"  style="top:300px; left:${i+50}px;" alt=""></img>`;
    document.write(hilera);
    if (i < 400)
    {
        let hilera = `<img src="assets/img/porton.png" class="obstaculo"  style="top:400px; left:${i}px;" alt=""></img>`;
        document.write(hilera);
        hilera = `<img src="assets/img/muro.png" class="obstaculo"  style="top:400px; left:${i+50}px;" alt=""></img>`;
        document.write(hilera);
    }
}
for (let i = 250; i>0; i = i - 50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:${i}px; left: 450px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 0; i<500; i = i + 50)
{
    if (i!=200 && i!=250)
    {
        let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:${i}px; left: 600px;" alt=""></img>`;
        document.write(hilera);
    }
}
for (let i = 100; i<300; i = i + 50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:${i}px; left: 800px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 650; i<1000; i = i + 100)
{
    let hilera = `<img src="assets/img/porton.png" class="obstaculo"  style="top:300px; left:${i}px;" alt=""></img>`;
    document.write(hilera);
    hilera = `<img src="assets/img/muro.png" class="obstaculo"  style="top:300px; left:${i+50}px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 750; i<1000; i = i + 100)
{
    if (i != 850)
    {
        let hilera = `<img src="assets/img/porton.png" class="obstaculo"  style="top:450px; left:${i}px;" alt=""></img>`;
        document.write(hilera);
        hilera = `<img src="assets/img/muro.png" class="obstaculo"  style="top:450px; left:${i+50}px;" alt=""></img>`;
        document.write(hilera);
    }
}
for (let i = 550; i>50; i = i - 100)
{
    let hilera = `<img src="assets/img/porton.png" class="obstaculo"  style="top:500px; left:${i}px;" alt=""></img>`;
    document.write(hilera);
    hilera = `<img src="assets/img/muro.png" class="obstaculo"  style="top:500px; left:${i+50}px;" alt=""></img>`;
    document.write(hilera);
}
for (let i = 500; i<600; i = i+50)
{
    let hilera = `<img src="assets/img/bc.gif" class="obstaculo"  style="top:${i}px; left:750px;" alt=""></img>`;
    document.write(hilera);   
}