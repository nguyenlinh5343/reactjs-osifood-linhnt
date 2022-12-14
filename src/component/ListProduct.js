import React, { useRef, useState, useEffect } from "react";
import  {useDispatch,useSelector} from  'react-redux'
import '../styled/base.scss';
import {addProductToCart} from '../redux/cart/action'
function ListProduct(props) {
	// const [mount, setMount] = useRef(0)
	// const addTocart = () => {
 	// 	setMount(mount + 1)
	// }
	const dispatch = useDispatch()
	const onBuyProduct = product =>{
		dispatch(addProductToCart(product))
	}
	console.log(props.prod[0]);
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
						{props.prod.map((item, index) => 
							<div className="list-product-item">
								<div className="list-product-item-inner">
									<div className="product-image">
										<img src={item.image} alt=""/>
									</div>
									<div className="product-detail">
										<p class="proloop--vendor"><a href="/collections/vendors?q=osifood">OsiFood</a></p>
										<h3>
											<a href="" class=" quickview-product " data-handle="/products/ca-hu-tuoi-song-bv-500g">{item.name} </a></h3>
										<p class="proloop--price">
												<span class="price">{item.price}₫</span>
										</p>			
										<div class="proloop--review">
										</div>	
										<div class="proloop--action  action-count" >
											<div class="proloop--action__inner">
												{/* {mount == 0 ? */}
												<div class="action-item action-addcart">
													<button onClick={() => onBuyProduct(item)} type="button" class="button btn-proloop-cart add-to-cart  " onclick="HRT.All.addCartProdItem('1088089427')" title="Thêm vào giỏ">
														<span class="btnico">
														</span> <span> Chọn mua	</span> 		
													</button>
												</div>
												{/* : */}
												{/* <div class="action-item action-boxqty">	
													<div class="proloop-boxqty">
														<button type="button" onclick="HRT.All.minusQtyProdItem('1088089427')" class="btnqty proloop-minus" aria-label="Minus">
														</button>
														<input type="text" readonly="" name="quantity-proloop" value="1" min="1" class="proloop-qtyvalue"/>
														<button type="button" onclick="HRT.All.plusQtyProdItem('1088089427')" class="btnqty proloop-plus" aria-label="Plus">
														</button>
													</div>
												</div>  */}
											{/* } */}
											</div>
										</div>	
									</div>
								</div>
							</div>
						)
					}
					</div>
				</div>
			</section>
	)
}

export default ListProduct