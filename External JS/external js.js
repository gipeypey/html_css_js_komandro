var x = 2019;
var y = 2020;
    console.log(x);
    console.log("Hello!");
    console.log("Nama saya Gipey, saya adalah pengajar kelas design periode " + x + "-" + y);
    console.log(document);

// Alert (peringatan di awal buka web)
    alert('Selamat belajar JavaScript!');

// Alert pake if, switch case
// parseInt itu untuk ngubah huruf ke angka
    var hari = parseInt(prompt("input a number of day"));
    if (hari) {
        switch (hari) {
            case 1:
                alert("Monday");
            break;
            case 2:
                alert("Tuesday");
            break;
            case 3:
                alert("Wednesday");
            break;
            case 4:
                alert('Thursday');
            break;
            case 5:
                alert('Friday');
            break;
            case 6:
                alert('Saturday');
            break;
            case 7:
                alert('Sunday');
            break;
            default:
                alert('invalid number');
        }
    } else {
        alert('please select the number');
    }

//  Alert confirm
//  true menandakan diterima/accept/enable
    var again = true;
    while (again) {
        var nama = prompt('please input your name: ');
        alert('Hello ' + nama);
        again = confirm ('try again ?');
    }
    alert('thank you');


