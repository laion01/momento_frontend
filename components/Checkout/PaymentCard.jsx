import { useState, useEffect, useRef } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Button } from "rsuite";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";
import { toast } from 'react-toastify';

export default function PaymentCard({ onSuccess, onCreateOrder, orderId, clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const submitRef = useRef(null);
  const [isError, setError] = useState(true)

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );

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
          setError(false)
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
          setError(true)
          break;
        case "requires_payment_method":
          // toast.error("Your payment was not successful, please try again.", {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
          setError(true)
          break;

        default:
          toast.error("Something went wrong.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setError(false)
          break;
      }
    });
  }, [stripe, clientSecret]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    await onCreateOrder();

    const res = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.origin + "",
      },
      redirect: 'if_required',
    });
    const error = res?.error;

    if (!error && !res.paymentIntent) {
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
    } else {
      if (!res.error && res.paymentIntent.status == "succeeded") {
        await onSuccess(res.paymentIntent.id);

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
      }
    }

    setIsLoading(false);
  };


  const onCheckout = async () => {
    if (submitRef.current) {
      submitRef.current.click();
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="mb-[2rem]">
      <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
      <div className="w-full flex justify-end mt-[1rem]">
        <Button ref={submitRef} appearance="primary" color="green" className='hidden h-[3rem] w-[8rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] flex justify-center items-center'
          disabled={isLoading || !stripe || !elements} id="submit" type="submit"
        >
          <span id="button-text">
            {isLoading ? <BeatLoader color="white" size='10' /> : <p>Pay now</p>}
          </span>
        </Button>
        <Button appearance="primary" color="green" className='h-[3rem] w-[8rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] flex justify-center items-center'
          disabled={isLoading || !stripe || !elements} onClick={() => { onCheckout() }}
        >
          <span id="button-text">
            {isLoading ? <BeatLoader color="white" size='10' /> : <p>Pay now</p>}
          </span>
        </Button>
      </div>
    </form>
  );
}