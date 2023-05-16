import { useState, useEffect, useRef} from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Button } from "rsuite";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";
import { toast } from 'react-toastify';

export default function PaymentCard({ onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const submitRef = useRef(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          toast.success('Payment succeeded!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
          break;
        case "processing":
          toast.success('Your payment is processing.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
          break;
        case "requires_payment_method":
          toast.success("Your payment was not successful, please try again.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
          break;
        default:
          toast.success("Something went wrong.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
          break;
      }
    });
  }, [stripe]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        
        return_url: location.origin + "",
        redirect: 'if_required',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    } else {
      toast.error("An unexpected error occurred.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }

    setIsLoading(false);
  };

  const onCheckout = async () => {
    if(submitRef.current) {
      submitRef.current.click();
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="mb-[2rem]">
      <PaymentElement id="payment-element" options={{layout: 'tabs'}}/>
      <div className="w-full flex justify-end mt-[1rem]">
        <Button ref={submitRef} appearance="primary" color="green" className='hidden h-[3rem] w-[8rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] flex justify-center items-center'
          disabled={isLoading || !stripe || !elements} id="submit" type="submit"
        >
          <span id="button-text">
            {isLoading ? <BeatLoader color="white" size='10' /> : <p>Pay now</p>}
          </span>
        </Button>
        <Button appearance="primary" color="green" className='h-[3rem] w-[8rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] flex justify-center items-center'
          disabled={isLoading || !stripe || !elements} onClick={() => {onCheckout()}}
        >
          <span id="button-text">
            {isLoading ? <BeatLoader color="white" size='10' /> : <p>Pay now</p>}
          </span>
        </Button>
      </div>
      
      {/* Show any error or success messages */}
      {message && <div className='mt-2'>{message}</div>}
    </form>
  );
}