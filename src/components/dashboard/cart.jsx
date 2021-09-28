import React, { Component } from 'react';
import { PayPalForm } from './../../pages/Paypal'

const value = 50
const currency = 'USD'

class Cart extends Component {
	render() {
		return (
			<>
				<main className="main">
					<div className="container-fluid">
						<div className="row row--grid">

							<div className="col-12">
								<div className="main__title main__title--page">
									<h1>Cart</h1>
								</div>
							</div>

						</div>

						<div className="row row--grid">
							<div className="col-12 col-lg-8">
								<div className="cart">
									<div className="cart__table-wrap">
										<div className="cart__table-scroll">
											<table className="cart__table">
												<thead>
													<tr>
														<th>Product</th>
														<th>Title</th>
														<th>Amount</th>
														<th>Price</th>
														<th></th>
													</tr>
												</thead>

												<tbody>
													<tr>
														<td>
															<div className="cart__img">
																<img src={require('./../../assets/img/covers/calle85.jpeg')} alt="" />
															</div>
														</td>
														<td><a href="product.html">Calle 85 - Tiago Santo</a></td>
														<td>
															<div className="cart__amount">
																<button type="button">
																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" /></svg>
																</button>
																<input type="text" value="1" />
																<button type="button">
																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
																</button>
															</div>
														</td>
														<td><span className="cart__price">{value} {currency}</span></td>
														<td><button className="cart__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button></td>
													</tr>

												</tbody>
											</table>
										</div>
									</div>

									<div className="cart__info">
										<div className="cart__total">
											<p>Total:</p>
											<span>USD 50</span>
										</div>


										<div className="cart__systems">
											<i className="pf pf-visa"></i>
											<i className="pf pf-mastercard"></i>
											<i className="pf pf-paypal"></i>
											<i className="pf pf-bitcoin-sign"></i>
										</div>
									</div>
								</div>
							</div>	

							<PayPalForm value={value} currency={currency} ></PayPalForm>

						</div>

					</div>
				</main>

			</>
		);
	}
}

export default Cart;