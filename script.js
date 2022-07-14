$mail = document.getElementById('mail')
$phone = document.getElementById('phone')
$form = document.forms.form;
$name = document.getElementById('name')
console.log($form)

let $messageNode = document.getElementById("error")

$form.addEventListener("submit",event =>{
    if(!validationMail($mail.value, $messageNode) || !validationPhone($phone.value, $messageNode) || validateName($name, $messageNode))
        event.preventDefault();
        console.log($messageNode)
})

const validateName = (name, $messageNode) =>{
    const isValid = name.length > 1;
    if(isValid) return isValid
    $messageNode.textContent = "Введите имя"; 
}

const validationMail  = (mail, $messageNode) =>{
    let regular = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let isValid = regular.test(mail)
    if(isValid) return isValid
    $messageNode.textContent = "Адрес эл. почты введен правильно!"
}

const validationPhone = (phone, $messageNode) => {
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let isValid = re.test(phone);
    if (isValid) return isValid
    $messageNode.textContent = 'Номер телефона введен неправильно!'
}  
