import React, { useRef, useState, useEffect } from "react";

import '../styled/base.scss';

function ListProduct() {
	// const [mount, setMount] = useRef(0)
	// const addTocart = () => {
 	// 	setMount(mount + 1)
	// }
	return (
			<section className="list-product">
				<div className="container2">
					<div className="list-product-heading text-center">
						<h2 className='list-product-title'>
							<a href="#">
								Sản phẩm
							</a>
						</h2>
					</div>
					<div className="list-product-content">
						<div className="list-product-item">
							<div className="list-product-item-inner">
								<div className="product-image">
									<img src="https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg" alt=""/>
								</div>
								<div className="product-detail">
									<p class="proloop--vendor"><a href="/collections/vendors?q=osifood">OsiFood</a></p>
									<h3>
										<a href="" class=" quickview-product " data-handle="/products/ca-hu-tuoi-song-bv-500g">Cá hú tươi 500g</a></h3>
									<p class="proloop--price">
											<span class="price">32,800₫</span>
									</p>			
									<div class="proloop--review">
									</div>	
									<div class="proloop--action  action-count" >
										<div class="proloop--action__inner">
											{/* {mount == 0 ?
											<div class="action-item action-addcart">
												<button onClick={addTocart} type="button" class="button btn-proloop-cart add-to-cart  " onclick="HRT.All.addCartProdItem('1088089427')" title="Thêm vào giỏ">
													<span class="btnico">
													</span> <span> Chọn mua	</span> 		
												</button>
											</div>: */}
											<div class="action-item action-boxqty">	
												<div class="proloop-boxqty">
													<button type="button" onclick="HRT.All.minusQtyProdItem('1088089427')" class="btnqty proloop-minus" aria-label="Minus">
													</button>
													<input type="text" readonly="" name="quantity-proloop" value="1" min="1" class="proloop-qtyvalue"/>
													<button type="button" onclick="HRT.All.plusQtyProdItem('1088089427')" class="btnqty proloop-plus" aria-label="Plus">
													</button>
												</div>
											</div> 
										 {/* } */}
										</div>
									</div>	
								</div>
							</div>
						</div>
						<div className="list-product-item">
							<div className="list-product-item-inner">
								<div className="product-image">
									<img src="https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg" alt=""/>
								</div>
								<div className="product-detail">
									<p class="proloop--vendor"><a href="/collections/vendors?q=osifood">OsiFood</a></p>
									<h3>
										<a href="" class=" quickview-product " data-handle="/products/ca-hu-tuoi-song-bv-500g">Cá hú tươi 500g</a></h3>
									<p class="proloop--price">
											<span class="price">32,800₫</span>
									</p>			
									<div class="proloop--review">
									</div>	
									<div class="proloop--action  action-count" >
										<div class="proloop--action__inner">
											<div class="action-item action-addcart">
												<button type="button" class="button btn-proloop-cart add-to-cart  " onclick="HRT.All.addCartProdItem('1088089427')" title="Thêm vào giỏ">
													<span class="btnico">
													</span> <span> Chọn mua	</span> 		
												</button>
											</div>		
											{/* <div class="action-item action-boxqty">	
												<div class="proloop-boxqty">
													<button type="button" onclick="HRT.All.minusQtyProdItem('1088089427')" class="btnqty proloop-minus" aria-label="Minus">
													</button>
													<input type="text" readonly="" name="quantity-proloop" value="1" min="1" class="proloop-qtyvalue"/>
													<button type="button" onclick="HRT.All.plusQtyProdItem('1088089427')" class="btnqty proloop-plus" aria-label="Plus">
													</button>
												</div>
											</div> */}
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	)
}

export default ListProduct