$(document).ready(function() {
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

var mainForm = document.querySelector('#form-submit')
var callback = document.querySelector('#form-submit_m')

mainForm.addEventListener('click', function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var message = $("#message").val();
	if(name.length>3 && name.length<16 && phone.length>9 && /\d/.test(phone)){
		submitForm()
	} else {
		alert('Перевірте уважно форму')
	}
})

callback.addEventListener('click', function(){
	var phone_m = $('#phone_m').val()
	if(phone_m.length>9 && /\d/.test(phone_m)){
		$.ajax({
			type: "POST",
			url: "callback.php",
			data: "&phone_m=" + phone,
			success : function(text){
					if (text == "success"){
							formSuccess();
					}
			}
	});
	} else {
		alert('Перевірте номер!')
	}
})

function submitForm(){
    $.ajax({
        type: "POST",
        url: "contact.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}	
function formSuccess(){
	alert('Повідомлення відправлено успішно!')
	}




});

