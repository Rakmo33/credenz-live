

function loadScript(src) {

    //console.log("load razor called !")

    return new Promise( (resolve) => {

        const script = document.createElement('script');
        script.src = src;
        
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }

        document.body.appendChild(script)

    })
}

const _DEV_ = document.domain === 'localhost'

async function DisplayRazorpay() {

    //console.log("display razor called !")

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res) {
        alert('Razorpay SDK failed to load!')
        return
    }

    const options = {
        "key": _DEV_ ? 'rzp_test_8OXCvHsV5OiOpe' : 'prod-key', // Enter the Key ID generated from the Dashboard
        "amount": "50000", // 100p = 1rupee
        "currency": "INR",
        "name": "Credenz",
        "description": "Test Transaction",
        "image": "",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#F37254"
        }
    };
    const paymentObject = new window.Razorpay(options)
    
    paymentObject.open()
}

export default DisplayRazorpay;