function displayMessage() {

            var total = 0;
            var purchase = "";
            var name = document.getElementById("textName").value;
            var email = document.getElementById("textEmail").value;
            var TP = document.getElementById("textTP").value;

            var qty1 = document.getElementById("textQty1").value;
            var price1 = 120;
            var qty2 = document.getElementById("textQty2").value;
            var price2 = 150;
            var qty3 = document.getElementById("textQty3").value;
            var price3 = 200;

            if (name != ""){
                if (email != ""){
                    if (TP != ""){
                        if (qty1 > 0){
                            total = total + (price1 * qty1);
                            purchase = purchase + "Nike Shoe :  " + qty1 + " * " + price1 + " = " + (price1 * qty1) + "\n";
                        }
                        if (qty2 > 0){
                            total = total + (price2 * qty2);
                            purchase = purchase + "Nike Mercurial Edition Shoe :  " + qty2 + " * " + price2 + " = " + (price2 * qty2) + "\n";
                        }
                        if (qty3 > 0){
                            total = total + (price3 * qty3);
                            purchase = purchase + "Nike Gold Edition Shoe :  " + qty3 + " * " + price3 + " = " + (price3 * qty3) + "\n";
                        }

                        printReceipt(name, purchase, total, email);
                    }else{
                        alert("!!! Phone number is not entered !!!\n Please reenter");
                    }
                }else{
                    alert("!!! E-mail address is not entered !!!\n Please reenter");
                }
            }else{
                alert("!!! Name is not entered !!!\n Please reenter")
            }
        }

        function printReceipt(name, purchase, total, email){
            alert(
                "Hi " + name + ", \n" + "You have purchased:\n\n" +
                purchase + "\n" +
                "Total amount : " + total +"USD\n\n" +
                "Conformation receipt will be sent to : " + email
            );
        }



        function increase(){
            document.getElementsByClassName("topic")[0].style.fontSize='50px';
            document.getElementsByClassName("formStyle")[0].style.fontSize='35px';

            document.getElementsByClassName("saleHeader")[0].style.fontSize='50px';
            document.getElementsByClassName("saleHeader")[1].style.fontSize='50px';
            document.getElementsByClassName("saleHeader")[2].style.fontSize='50px';
        }

        function usually(){
            document.getElementsByClassName("topic")[0].style.fontSize='40px';
            document.getElementsByClassName("formStyle")[0].style.fontSize='25px';

            document.getElementsByClassName("saleHeader")[0].style.fontSize='40px';
            document.getElementsByClassName("saleHeader")[1].style.fontSize='40px';
            document.getElementsByClassName("saleHeader")[2].style.fontSize='40px';
        }

        function decrease(){
            document.getElementsByClassName("topic")[0].style.fontSize='30px';
            document.getElementsByClassName("formStyle")[0].style.fontSize='15px';

            document.getElementsByClassName("saleHeader")[0].style.fontSize='30px';
            document.getElementsByClassName("saleHeader")[1].style.fontSize='30px';
            document.getElementsByClassName("saleHeader")[2].style.fontSize='30px';
        }