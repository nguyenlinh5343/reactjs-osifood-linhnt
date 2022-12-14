import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Cart() {
	return (
		<div class="sitenav-content sitenav-cart">
			<div class="sitenav-content__title">
				<p class="txt-title">Giỏ hàng</p>
			</div>

			<div class="sitenav-content__block cart-view">
				<div class="cart-view-scroll sitenav-boxscroll">
				{/* <div class="table-clone-cart">
					<div class="mini-cart__item hidden">
						<div class="mini-cart__left"><a class="mnc-link" href="" title=""><img src="" alt=""/></a></div>
						<div class="mini-cart__right">
							<p class="mini-cart__title">	
								<a class="mnc-title mnc-link" href="" title=""></a>
								<span class="mnc-variant">	</span>	
							</p>
							<div class="mini-cart__quantity">
								<div class="quantity-selector">
									<button class="qty-btn mnc-minus">
									</button>
									<input class="qty-value mnc-value" type="text" readonly="" name="mnc-quantity" value=""/>
									<button class="qty-btn mnc-plus">
									</button>
								</div>			
								<div class="mini-cart__price"><span class="mnc-price">0₫</span> </div>
							</div>				
							<div class="mini-cart__remove"></div>	
						</div>
					</div>   
				</div> */}
					<div class="cart-view-render">
						<div class="mini-cart__item">
							<div class="mini-cart__left">
								<a class="mnc-link" href="/products/sua-lua-mach-ngu-coc-loc-4-180ml">
									<img
										src=" //product.hstatic.net/200000459373/product/untitled_design__9__c587ee8abbab4a8a967ee69e348cca8c_small.jpg "
										alt="Sữa lúa mạch Milo lốc 4 hộp 180ml" />
								</a>
							</div>
							<div class="mini-cart__right">
								<p class="mini-cart__title">
									<a class="mnc-title mnc-link" href="/products/sua-lua-mach-ngu-coc-loc-4-180ml"
										title="Sữa lúa mạch Milo lốc 4 hộp 180ml">Sữa lúa mạch Milo lốc 4 hộp 180ml</a>
									<span class="mnc-variant"> 4 hộp </span>
								</p>

								<div class="mini-cart__quantity">
									<div class="quantity-selector">
										<button class="qty-btn mnc-minus">
											<AiOutlineMinusCircle size={20} color="green"/>
										</button>
										<input class="qty-value" type="text" readonly="" name="mnc-quantity" value="1" />
										<button class="qty-btn mnc-plus">
											<AiOutlinePlusCircle size={20} color="green"/>
										</button>
									</div>
									<div class="mini-cart__price">
										<span class="mnc-price">30,400₫</span>
									</div>
								</div>
								<div class="mini-cart__remove">
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cart-view-line"></div>
				<div class="cart-view-total">
					<div class="mini-cart">
						<div class="mini-cart__total">
							<div class="mnc-total mnc-total-text">TỔNG TIỀN:</div>
							<div class="mnc-total mnc-total-price" id="total-view-cart">
								347,200₫
							</div>
						</div>

						<div class="mini-cart__button">
							<div class="mnc-cta">
								<a href="/cart" class="linktocart button btnred">Xem giỏ hàng</a>
							</div>
							<div class="mnc-cta">
								<a href="/checkout" class="linktocheckout button btnred">Thanh toán</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart