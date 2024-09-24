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
   const p =document.createElement('p');
   p.innerHTML = `${totalBlance} Taka domate for famine-2024 at Feni,Bangladesh`
   document.getElementById()

   const historyItem = document.createElement('div');
   historyItem.className = "bg-white w-[500px] h-[200px] border-indigo-300 rounded-md";
   historyItem.innerHTML = `
       <p class="text-xl text-black font-semibold p-4 bg-white">${totalBlance} Taka donated for famine-2024 at Feni, Bangladesh</p>
       <p class="text-xl text-black font-semibold p-4 bg-white">${new Date().toLocaleDateString()}</p>
   `;
   
   const historySection = document.getElementById('history-section'); 
       historySection.insertBefore(historyItem, historySection.firstChild);
   
   
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
document.getElementById('blog-page').addEventListener('click', function() {
    window.location.href = "./blog.html"; 
});


