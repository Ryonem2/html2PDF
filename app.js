const btn = document.querySelector(".btn");
const request = require('request');


btn.addEventListener("click", function () {
    // const bodys = document.getElementsByTagName('body');
    request('http://localhost/Btn2PDF/index.html', function (
      error,
      response,
      body
    ) {
      // console.error('error:', error)
      // console.log('body:', body)
      var xhr = new XMLHttpRequest();
      xhr.open("POST", './download.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({  //? send JSON by POST method
        body: body
    }));
    })
    
    // window.location.href = "http://localhost/sig2/docs/";
    alert("Saved!!");
});

// btn.addEventListener("click", myPrint);