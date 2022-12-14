import React from "react";

function Login() {
	return (
		<>
			<div class="header-dropdown_content">
				<div
					class="sitenav-content site_account sitenav-account "
					id="siteNav-account"
				>
					<div class="site_account_panel_list">
						<div id="header-login-panel" class="site_account_panel site_account_default is-selected"
						>
							<div class="site_account_header">
								<p class="txt-title ">Đăng nhập tài khoản</p>
								<p class="txt-small">Nhập email và mật khẩu của bạn:</p>
							</div>
							<div class="site_account_inner">
								<form	accept-charset="UTF-8">
									<div class="form__input-wrapper form__input-wrapper--labelled">
										<input
											type="email"
											id="login-customer[email]"
											class="form__field form__field--text"
											name="customer[email]"
											required="required"
										/>
										<label
											for="login-customer[email]"
											class="form__floating-label"
										>
											Email
										</label>
									</div>
									<div class="form__input-wrapper form__input-wrapper--labelled">
										<input
											type="password"
											id="login-customer[password]"
											class="form__field form__field--text"
											name="customer[password]"
											required="required"
											autocomplete="current-password"
										/>
										<label
											for="login-customer[password]"
											class="form__floating-label"
										>
											Mật khẩu
										</label>

										<div class="sitebox-recaptcha">
											This site is protected by reCAPTCHA and the Google
											<a
												href="https://policies.google.com/privacy"
												target="_blank"
												rel="noreferrer"
											>
												Privacy Policy
											</a>
											and{" "}
											<a
												href="https://policies.google.com/terms"
												target="_blank"
												rel="noreferrer"
											>
												Terms of Service
											</a>{" "}
											apply.
										</div>
									</div>
									<button
										type="submit"
										class="form__submit button dark"
										id="form_submit-login"
									>
										Đăng nhập
									</button>

									<input
										id="887265df03d943ccb6c5ac00d89bfdfb"
										name="g-recaptcha-response"
										type="hidden"
									/>
								</form>

								<div class="site_account_secondary-action">
									<p>
										Khách hàng mới?
										<a class="link" href="/account/register">
											Tạo tài khoản
										</a>
									</p>
									<p>
										Quên mật khẩu?
										<button
											aria-controls="header-recover-panel"
											class="js-link link"
										>
											Khôi phục mật khẩu
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
