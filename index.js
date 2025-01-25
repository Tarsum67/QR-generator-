async function getQRCode() {
  try {
    const userInput = document.getElementById("userInput").value;
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${userInput}`
    );
    if(userInput = ""){
       
    };
    const codeDisplay = document.getElementById("qrCode");
    console.log(response);
    const url = await response.blob()
    const code = URL.createObjectURL(url)
    codeDisplay.src = code
  } catch (error) {
    console.error(error);
  }
}
