var id = document.getElementById("ID")
var fname = document.getElementById("fullname")
var email = document.getElementById("email")
var gender = document.getElementsByName("gender")
var nation = document.getElementById("nation")
var genColor = document.getElementById("genders")
var hobbies = document.getElementsByName("hobby")
var colorHobby = document.getElementById("hobbies")
var note = document.getElementById("note")
var alert = document.getElementById("alert")
var emailRegex = /\S+@\S+\.\S+/

var errorName = document.getElementById("error-name")
var errorId = document.getElementById("error-id")
var errorEmail = document.getElementById("error-email")
var errorGender = document.getElementById("error-gender")
var errorHobby = document.getElementById("error-hobby")
var errorNation = document.getElementById("error-nation")
var errorNote = document.getElementById("error-note")
var errors = document.getElementsByClassName("error")

function validate() {
    var success = true
    var hobbyFlag = 0
    var text = ''

    if (fname.value == "") {
        errorName.innerHTML = "Không được để trống họ tên"
        fname.style.border = "1px solid red"
        success = false
    }
    else {
        errorName.innerHTML = "Success !!!"
        fname.style.border = "1px solid green"
        fname.style.borderRadius = "5px"
        errorName.style.color = "green"
        success = true
    }
    if (id.value == "") {
        errorId.innerHTML = "Không được để trống mã sinh viên"
        id.style.border = "1px solid red"
        success = false
    }
    else {
        errorId.innerHTML = "Success !!!"
        id.style.border = "1px solid green"
        id.style.borderRadius = "5px"
        errorId.style.color = "green"
        success = true
    }
    if (email.value == "") {
        errorEmail.innerHTML = "Không được để trống email"
        email.style.border = "1px solid red"
        success = false
    } else if (email.value.match(emailRegex) == null) {
        errorEmail.innerHTML = "Email không đúng định dạng"
        success = false
    }
    else {
        errorEmail.innerHTML = "Success !!!"
        email.style.border = "1px solid green"
        email.style.borderRadius = "5px"
        errorEmail.style.color = "green"
        success = true
    }

    if (!gender[0].checked && !gender[1].checked) {
        errorGender.innerHTML = "Giới tính không được để trống"
        genColor.style.border = "1px solid red"
        success = false
    } else {
        errorGender.innerHTML = "Success !!!"
        genColor.style.border = "1px solid green"
        errorGender.style.color = "green"
        email.style.borderRadius = "5px"
        success = true
    }
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) hobbyFlag++
    }
   
    if (hobbyFlag == 0) {
        errorHobby.innerHTML = "Sở thích không được để trống"
        colorHobby.style.border = "1px solid red"
        success = false
    }
    else {
        errorHobby.innerHTML = "Success !!!"
        colorHobby.style.border = "1px solid green"
        colorHobby.style.borderRadius = "5px"
        errorHobby.style.color = "green"
        success = true
    }
    if (nation.value == "") {
        errorNation.innerHTML = "Quốc tịch không được để trống"
        nation.style.border = "1px solid red"
        success = false
    }
    else {
        errorNation.innerHTML = "Success !!!"
        nation.style.border = "1px solid green"
        nation.style.borderRadius = "5px"
        errorNation.style.color = "green"
        success = true
    }

    if (note.value > 200) {
        errorNote.innerHTML = "Ghi chú phải trên 200 từ"
        note.style.border = "1px solid red"
        success = false
    }
    else {
        errorNote.innerHTML = "Success !!!"
        errorNote.style.color = "green"
        note.style.borderRadius = "5px"
        note.style.border = "1px solid green"
        success = false
    }
    return success
}
function removeError() {
    id.style.border = ""
    fname.style.border = ""
    email.style.border = ""
    genColor.style.border = ""
    nation.style.border = ""
    colorHobby.style.border = ""
    note.style.border = ""
    for (e of errors) e.innerHTML = ""
}