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
                    onApprove={(data, actions) => {
                        // Capture the funds from the transaction
                        return actions.order.capture().then( (details) => {
                            // Show a success message to your buyer
                            alert("Transaction completed by " + details.payer.name.given_name);

                            return PaymentConfirmation({
                                idMaster: 'c3a4b710-2251-11ec-9046-79c7b4f508e8',
                                orderID: data.orderID,
                                amount: data.amount ? parseInt(data.amount) : 1,
                                user
                            })
                        });
                    }}
                />
            </div>
        </>
    )
}
