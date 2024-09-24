const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function(){
    const donateAmountElement = parseFloat(document.getElementById('donate-amount').value);
    alert(" sucessfully Donate ")
    if(donateAmountElement <=0 || isNaN(donateAmountElement)){
       document.getElementById('error-ms').classList.remove('hidden');
        
    }
   const balance = parseFloat(document.getElementById('balance').innerText)
   
   const totalBlance = donateAmountElement + balance;
  
   document.getElementById('balance').innerText = totalBlance;

   const beforeBlance = parseFloat(document.getElementById('before-balance').innerText);
   
   const afterBalance = beforeBlance - donateAmountElement;
   document.getElementById('before-balance').innerText = afterBalance;
   const historySection =document.getElementById('history-section');
   historySection.innerHTML = `
   <p class ="text-xl font-white font-semi-bold">${totalBlance} Taka domate for famine-2024 at Feni,Bangladesh</p>
   <p>${new Date().toLocaleDateString()}</p>
   
   
   
   
   `


   
});

// history btn toggule
const historyBtn =document.getElementById('history-btn');
const donationBtn =document.getElementById('donation-btn');
historyBtn.addEventListener('click', function(){
    console.log("history btn")

    historyBtn.classList.add('bg-lime-300','text-white');
    donationBtn.classList.remove('bg-lime-300')
     document.getElementById('card').classList.add('hidden')
   


});
document.getElementById('blog-page')
.addEventListener('click',function(){
    window.location.href = "/B10A05/blob/main/blog.html"
})


