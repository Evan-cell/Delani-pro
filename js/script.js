$(document).ready(function () {
    $(".design icon").click(function () {
      $(".design icon").show();
      $(".design icon").hide("slow")
    });
    $(".design icon").click(function () {
      $(".design icon").show();
      $(".design icon").hide("slow")
    });
    $(".develop icon").click(function () {
      $(".development icon").show();
      $("#development icon").hide("slow")
    });
    $("development icon").click(function () {
      $(".develop icon").show();
      $(".development icon").hide("slow")
    });
    $(".productImage").click(function () {
      $(".product").show();
      $(".productImage").hide("slow")
    });
    $(".product").click(function () {
      $(".productImage").show();
      $("product").hide("slow")
    });
  
    $("#1st-project").hover(
      function () {
        $("#1st").show("2000");
      },
      function () {
        $("#1st").hide("2000");
      }
    );
    $("#2nd-project").hover(
      function () {
        $("#2nd").show("2000");
      },
      function () {
        $("#2nd").hide("2000");
      }
    );
    $("#3rd-project").hover(
      function () {
        $("#3rd").show("2000");
      },
      function () {
        $("#3rd").hide("2000");
      }
    );
    $("#4th-project").hover(
      function () {
        $("#4th").show("2000");
      },
      function () {
        $("#4th").hide("2000");
      }
    );
    $("#5th-project").hover(
      function () {
        $("#5th").show("2000");
      },
      function () {
        $("#5th").hide("2000");
      }
    );
    $("#6th-project").hover(
      function () {
        $("#6th").show("2000");
      },
      function () {
        $("#6th").hide("2000");
      }
    );
    $("#7th-project").hover(
      function () {
        $("#7th").show("2000");
      },
      function () {
        $("work7").hide("2000");
      }
    );
    $("#work8").hover(
      function () {
        $("#work8").show("2000");
      },
      function () {
        $("#work8").hide("2000");
      }
    );
  });
  function validateForm() {
    var name = document.getElementById("mce-NAME").value;
    var email = document.getElementById("mce-EMAIL").value;
    var message = document.getElementById("mce-MESSAGE").value;
    
    if (name == "" , email== "" ,message=="") {
      alert("Please input Your Name, Email and Message")
     event.preventDefault();
    } 
    else {
      alert(name +
        " We have received your message. Thank you for reaching out to us."
      ); event.allowDefault();
    }
   
  }