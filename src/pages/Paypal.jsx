import { PayPalButton } from "react-paypal-button-v2";
import { getLoggedInUser } from './../api/authUtil' 
import { PaymentConfirmation } from './../api/httpRequest'


export const PayPalForm = (data) => {
    const user = getLoggedInUser()
    const value = data.value
    return (
        <>
            <div className="col-12 col-lg-4">
                <PayPalButton
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    currency_code: data.currency,
                                    value: value
                                }
                            }],
                        });
                    }}
                    // options={{
                    //     clientId:
                    //       "access_token$sandbox$4ywx9d2bmdmk3b9f$903618724c8478bd91c60161db66a1f3"
                    // }}
                    // onSuccess={(data) => {
                    //     console.log('dat');
                    //     alert('HOli funciono te llamo desde la prisión')
                    // }}
                    onApprove={(data, actions) => {
                        // Capture the funds from the transaction
                        return actions.order.capture().then( (details) => {
                            // Show a success message to your buyer
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return PaymentConfirmation({
                                orderID: data.orderID,
                                user
                            })
                        });
                    }}
                />
            </div>
        </>
    )
}
