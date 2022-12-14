import React from 'react'

function ItemDetail() {
	return (
		<>
			<div className="container2">
				<div className='col-md-6'>
					<div className='item-detail-img'>
						<img
              src="/detail-product.jpg"/>
					</div>
					
				</div>
				<div className='col-md-6'>
					<div className='item-detail-info'>
						<div className='info-container'>
							<div className='product-heading'>
								<h1>Cá hú tươi sống</h1>
							</div>
							<div class="product-variants">
								<form id="add-item-form" action="/cart/add" method="post" class="variants clearfix">				
									<div class="select clearfix" >
										<select id="product-select" name="id" >
											<option value="1088089427">Default Title - 32,800₫</option>
										</select>
									</div>
									<div class="select-swatch clearfix">
									</div>
									<div class="select-actions hidden-xs hidden-sm clearfix">
										<div class="quantity-area clearfix">
											<input type="button" value="-" onclick="HRT.All.minusQuantity()" class="qty-btn"/>
											<input type="text" id="quantity" name="quantity" value="1" min="1" class="quantity-input"/>
											<input type="button" value="+" onclick="HRT.All.plusQuantity()" class="qty-btn"/>
										</div>
										<div class="addcart-area">						
											<button type="button" id="add-to-cart" class=" add-to-cartProduct btnred button dark btn-addtocart addtocart-modal " name="add"> 
													Thêm vào giỏ 
											</button>
											<button type="button" id="buy-now" class=" add-to-cartProduct button dark btn-addtocart addtocart-modal hidden " name="add"> 
													Mua ngay 
											</button>
										</div>	
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail