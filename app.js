const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  // var string = document.documentElement.innerHTML;
  const str = $("body").html();
  // const str = String(string);
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", './download.php', true);
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.send(JSON.stringify({  //? send JSON by POST method
  //     body: str
  // }));
  const doc = new jsPDF();

  var specialElementHandlers = function (element, renderer) {
    return true;
  };
  html2canvas(document.body,{
  onrendered:function(canvas){
  doc.fromHTML(
    str,
    0,
    0,
    {
      width: 100, // max width of content on PDF
      elementHandlers: specialElementHandlers,
    },
    function (bla) {
      doc.save("saveInCallback.pdf");
    }
  );
  }
});
  alert("Saved!!");
  console.log(str);
});

// btn.addEventListener("click", myPrint);
