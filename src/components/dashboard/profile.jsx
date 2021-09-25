import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import logo from './../../assets/img/toptracks_logo.png'
import art from './../../assets/img/covers/calle85.jpeg'

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<main className="main">
					<div className="container-fluid">
						<div className="row row--grid">
							<div className="col-12">
								<div className="main__title main__title--page">
									<h1>Profile</h1>
								</div>
							</div>

						</div>

						<div className="row row--grid">
							<div className="col-12">
								<div className="profile">
									<div className="profile__user">
										<div className="profile__avatar">
											<img src="img/avatar.svg" alt="" />
										</div>
										<div className="profile__meta">
											<h3>Juan Guerrero</h3>
											<span>ID: 11104</span>
										</div>
									</div>


									<ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
										</li>
									</ul>


									<button className="profile__logout" type="button">
										<span>Sign out</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" /></svg>
									</button>
								</div>


								<div className="tab-content">
									<div className="tab-pane fade show active" id="tab-1" role="tabpanel">
										<div className="row row--grid">
											<div className="col-12 col-lg-6 col-xl-3">
												<div className="stats">
													<span>Total Investment</span>
													<p><b>USD 90</b></p>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z" /></svg>
												</div>
											</div>
											<div className="col-12 col-lg-6 col-xl-3">
												<div className="stats">
													<span>Total Income</span>
													<p><b>USD 10</b></p>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z" /></svg>
												</div>
											</div>

											<div className="col-12 col-lg-6 col-xl-3">
												<div className="stats">
													<span>ROI</span>
													<p><b>10%</b></p>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg>
												</div>
											</div>

											<div className="col-12 col-lg-6 col-xl-3">
												<div className="stats">
													<span>Pending Payments</span>
													<p><b>USD 5</b></p>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg>
												</div>
											</div>
										</div>
										<div className="row row--grid">
											<div className="col-12">
												<div className="dashbox">
													<div className="dashbox__table-wrap">
														<div className="dashbox__table-scroll">
															<table className="main__table">
																<thead>
																	<tr>
																		<th><a href="#">NFT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																		<th><a href="#" className="active">Title <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z" /></svg></a></th>
																		<th><a href="#" className="active">Artist <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a></th>
																		<th><a href="#">Date <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																		<th><a href="#">Total Income <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																		<th><a href="#">Streams <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																		<th><a href="#">Total Invested <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																		<th><a href="#">ROI <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<div className="main__table-img">
																				<img src={require('../../assets/img/covers/calle85.jpeg')} alt="" />
																			</div>
																		</td>
																		<td>
																			<div className="main__table-text"><a href="#">Calle 85</a></div>
																		</td>
																		<td>
																			<div className="main__table-text">Tiago Santo</div>
																		</td>
																		<td>
																			<div className="main__table-text">24/08/2021</div>
																		</td>
																		<td>
																			<div className="main__table-text main__table-text--price">USD 500</div>
																		</td>
																		<td>
																			<div className="main__table-text ">100</div>
																		</td>
																		<td>
																			<div className="main__table-text main__table-text--price">USD 50</div>
																		</td>
																		<td>
																			<div className="main__table-text main__table-text--price">40 %</div>
																		</td>

																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>





								</div>
							</div>
						</div>
					</div>


				</main>

			</>
		);
	}
}

export default Profile;