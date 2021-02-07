//Greeting Card Text
document.getElementById("from").innerHTML=localStorage.getItem("txtValue");
document.getElementById("to").innerHTML=localStorage.getItem("txtValue1");
document.getElementById("userText").innerHTML=localStorage.getItem("txtValue2");

    // $(document).ready(function() {
    //
    //     // Global variable
    //     var element = $("#html-content-holder");
    //
    //     // Global variable
    //     var getCanvas;
    //
    //     //getting image
    //     $('a').on('mouseover', function () {
    //         html2canvas(element, {
    //             onrendered: function(canvas) {
    //                 getCanvas = canvas;
    //             }
    //         });
    //       });
    //
    //   //downloading image
    //     $("#btn-Convert-Html2Image").on('click', function() {
    //         var imgageData =
    //             getCanvas.toDataURL("image/png");
    //
    //         // Now browser starts downloading
    //         // it instead of just showing it
    //         var newData = imgageData.replace(
    //         /^data:image\/png/, "data:application/octet-stream");
    //
    //         $("#btn-Convert-Html2Image").attr(
    //         "download", "BirthdayCard.png").attr(
    //         "href", newData);
    //     });
    // });
    //

    //Download Greeting

    $("#btn-Convert-Html2Image").click(function() {
          var element = $("#html-content-holder");

        html2canvas(element, {
          // width: 400,
          // height: 800,

         onrendered: function(canvas) {
           saveAs(canvas.toDataURL(), 'GreetingCard.png');
         }
       });
     });

     function saveAs(uri, filename) {
       var link = document.createElement('a');
       if (typeof link.download === 'string') {
         link.href = uri;
         link.download = filename;

         //Firefox requires the link to be in the body
         document.body.appendChild(link);

         //simulate click
         link.click();

         //remove the link when done
         document.body.removeChild(link);
       } else {
         window.open(uri);
       }
     }


     $('#btn-Convert-Html2Image').click(function(){go()});
     $('#ok').click(function(){go()});

     setTimeout(function(){go()});
     setTimeout(function(){go()});

     function go() {
       // $('.bb').fadeToggle(200);
       $('.message').toggleClass('comein');
       $('.check').toggleClass('scaledown');
       $('#btn-Convert-Html2Image').fadeToggle();
     }


     $('#ok').on('click', () => {
       if (navigator.share) {
         navigator.share({
             title: 'Web Share API Draft',
             text: 'Take a look at this spec!',
             url: 'https://wicg.github.io/web-share/#share-method',
           })
           .then(() => console.log('Successful share'))
           .catch((error) => console.log('Error sharing', error));
       } else {
         console.log('Share not supported on this browser, do it the old way.');
       }
     });
