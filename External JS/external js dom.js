//  DOM (getElementByID)
//  get element by id itu dalam kurungnya ngikutin id tag html dan bisa diubah oleh JS (seperti JS menguasai segalanya)
//  kalo ada lebih dari satu, maka kenannya yang paling atas(h1 belajar)
        var a = document.getElementById("h6");
        a.innerHTML = "nama saya adalah si mang";

//  DOM (getELementByTag 1)
        // const h5 = document.getElementsByTagName('h5');
        // for (let i =0; i < h5.length; i++) {
        // h5[i].style.color = 'white';
        // h5[i].style.backgroundColor = 'green';
        // }

// DOM (getElementByTag 2)
        // const h5 = document.getElementsByTagName('h5') [2];
        // h5.style.backgroundColor = 'red';
        // h5.style.color = 'white';

// DOM (getElementByClassName)
        // const h4 = document.getElementsByClassName('text');
        // for (let i =0; i < h4.length; i++) {
        // h4[i].style.color = 'white';
        // h4[i].style.backgroundColor = 'green';
        // }

// DOM (queryselector)
// mirip seperti getElementById tetapi bisa milih antara id, class, tag. kenanya yang paling atas
// id (#)
// class (.)
// tag (p/h1/h3/button, dll. pokoknya tag html)
        // const h3 = document.querySelector('.text');
        // h3.style.color = "white";
        // h3.style.backgroundColor = "green";

// DOM (queryselectorall)
// mirip seperti queryselector, tapi dia nyeleksi semua
    const h3 = document.querySelectorAll('.text');
    for (let i =0; i < h3.length; i++) {
    h3[i].style.color = 'white';
    h3[i].style.backgroundColor = 'green';
    }


