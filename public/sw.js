if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let n={};const r=e=>s(e,t),d={module:{uri:t},exports:n,require:r};c[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RcAAkbZxPQHC4tESFy6xI/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/RcAAkbZxPQHC4tESFy6xI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0429ce87-e4cde20187640664.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/0cfcb760-cb74b57ea3edf45b.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/0e5ce63c-9e03e1bcadf65d81.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/1009.e8adda4a32284d85.js",revision:"e8adda4a32284d85"},{url:"/_next/static/chunks/1174.172ff908a3353d02.js",revision:"172ff908a3353d02"},{url:"/_next/static/chunks/118.7f53b09f8da87ef4.js",revision:"7f53b09f8da87ef4"},{url:"/_next/static/chunks/1303.2a675ce3455ba38c.js",revision:"2a675ce3455ba38c"},{url:"/_next/static/chunks/1490.a28d49d8ca0f2cba.js",revision:"a28d49d8ca0f2cba"},{url:"/_next/static/chunks/1542-6f301db599b18439.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/1587.1ab75241b3cb3ecc.js",revision:"1ab75241b3cb3ecc"},{url:"/_next/static/chunks/160.6fafeb383dc8ce8a.js",revision:"6fafeb383dc8ce8a"},{url:"/_next/static/chunks/1683.9049f4f93f7662a8.js",revision:"9049f4f93f7662a8"},{url:"/_next/static/chunks/1733.7bf8ec5697ecef98.js",revision:"7bf8ec5697ecef98"},{url:"/_next/static/chunks/1749-81b8b5e3f8bb0108.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/1787.6024804743dcbcd7.js",revision:"6024804743dcbcd7"},{url:"/_next/static/chunks/1793.381a6a0b9d6cbc35.js",revision:"381a6a0b9d6cbc35"},{url:"/_next/static/chunks/2184.a17f1df9492d230a.js",revision:"a17f1df9492d230a"},{url:"/_next/static/chunks/223.7e253e273cc58ec1.js",revision:"7e253e273cc58ec1"},{url:"/_next/static/chunks/2353.f7d7593b48d0b260.js",revision:"f7d7593b48d0b260"},{url:"/_next/static/chunks/2394.4a9de20b10c86e23.js",revision:"4a9de20b10c86e23"},{url:"/_next/static/chunks/2687.9b0295c11fed3ea1.js",revision:"9b0295c11fed3ea1"},{url:"/_next/static/chunks/2717.19a6e217fa25d52a.js",revision:"19a6e217fa25d52a"},{url:"/_next/static/chunks/2762.d35a8a051dc75f3a.js",revision:"d35a8a051dc75f3a"},{url:"/_next/static/chunks/2766.ac4987f555af06d8.js",revision:"ac4987f555af06d8"},{url:"/_next/static/chunks/2854.5d9c10931a268b28.js",revision:"5d9c10931a268b28"},{url:"/_next/static/chunks/2882.30adcbc082c32d36.js",revision:"30adcbc082c32d36"},{url:"/_next/static/chunks/2905.7bd1d6433e7ed35c.js",revision:"7bd1d6433e7ed35c"},{url:"/_next/static/chunks/2919.7c6876574708f341.js",revision:"7c6876574708f341"},{url:"/_next/static/chunks/2e317778-4d197c39f6ba875f.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/3178.917a66b1e2a6bcd2.js",revision:"917a66b1e2a6bcd2"},{url:"/_next/static/chunks/3386.4186c45687f1213f.js",revision:"4186c45687f1213f"},{url:"/_next/static/chunks/3394.a6f2b386bbbe766e.js",revision:"a6f2b386bbbe766e"},{url:"/_next/static/chunks/3401.3eb538df89c235df.js",revision:"3eb538df89c235df"},{url:"/_next/static/chunks/3455.1ea31030e368ff45.js",revision:"1ea31030e368ff45"},{url:"/_next/static/chunks/3585.5509476be0357da3.js",revision:"5509476be0357da3"},{url:"/_next/static/chunks/3994.9f1a1bb90cc5da62.js",revision:"9f1a1bb90cc5da62"},{url:"/_next/static/chunks/3df6895e.8af5f49860bda27b.js",revision:"8af5f49860bda27b"},{url:"/_next/static/chunks/4001.a58d0695ae887926.js",revision:"a58d0695ae887926"},{url:"/_next/static/chunks/414.bf13efb40e9fef14.js",revision:"bf13efb40e9fef14"},{url:"/_next/static/chunks/4143.ea702bf52d3b1d3c.js",revision:"ea702bf52d3b1d3c"},{url:"/_next/static/chunks/4247.d06f97c359fd9d55.js",revision:"d06f97c359fd9d55"},{url:"/_next/static/chunks/4279.448446cf5effb569.js",revision:"448446cf5effb569"},{url:"/_next/static/chunks/4338.244d3f348b240d19.js",revision:"244d3f348b240d19"},{url:"/_next/static/chunks/4380.b9685ffa845ddf9d.js",revision:"b9685ffa845ddf9d"},{url:"/_next/static/chunks/4468.29f7f90594a4b743.js",revision:"29f7f90594a4b743"},{url:"/_next/static/chunks/4491.a3fc98b78fabc1d2.js",revision:"a3fc98b78fabc1d2"},{url:"/_next/static/chunks/4604.4347af7dab7366b3.js",revision:"4347af7dab7366b3"},{url:"/_next/static/chunks/4654.e466b15a33720444.js",revision:"e466b15a33720444"},{url:"/_next/static/chunks/4723.359e3897df26be9b.js",revision:"359e3897df26be9b"},{url:"/_next/static/chunks/4727.630c9573c784f5dd.js",revision:"630c9573c784f5dd"},{url:"/_next/static/chunks/4756.01a009cb10273463.js",revision:"01a009cb10273463"},{url:"/_next/static/chunks/4818.d900d6f8ffc7c865.js",revision:"d900d6f8ffc7c865"},{url:"/_next/static/chunks/4867.624fdb44ab0664ea.js",revision:"624fdb44ab0664ea"},{url:"/_next/static/chunks/4899.84ae71173c7b268f.js",revision:"84ae71173c7b268f"},{url:"/_next/static/chunks/4919.33685747a5076227.js",revision:"33685747a5076227"},{url:"/_next/static/chunks/4939.da3da30ebf0ec62b.js",revision:"da3da30ebf0ec62b"},{url:"/_next/static/chunks/5085.8ebdec5b5a890afe.js",revision:"8ebdec5b5a890afe"},{url:"/_next/static/chunks/512-e5f105fbd7123830.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/5239.977f191533159101.js",revision:"977f191533159101"},{url:"/_next/static/chunks/5311.9fe2374925688cd2.js",revision:"9fe2374925688cd2"},{url:"/_next/static/chunks/5426.d218f683e4669f57.js",revision:"d218f683e4669f57"},{url:"/_next/static/chunks/5468-008fb4b5dca5000c.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/5598.2cbafa372bd0ac6d.js",revision:"2cbafa372bd0ac6d"},{url:"/_next/static/chunks/5617-cdb09534631dc07c.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/562.fb0cf1bd78b3964f.js",revision:"fb0cf1bd78b3964f"},{url:"/_next/static/chunks/5834.2137a3edb73eeeae.js",revision:"2137a3edb73eeeae"},{url:"/_next/static/chunks/5ab80550-b0b6ca8c6d8c8f50.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/5cd852ec.8948b60a17235d3d.js",revision:"8948b60a17235d3d"},{url:"/_next/static/chunks/6079.3133eec71c597464.js",revision:"3133eec71c597464"},{url:"/_next/static/chunks/6174.e5cfe0d84d2c320f.js",revision:"e5cfe0d84d2c320f"},{url:"/_next/static/chunks/6305.d9921268f708aeb3.js",revision:"d9921268f708aeb3"},{url:"/_next/static/chunks/6482.2789c35f3109ad64.js",revision:"2789c35f3109ad64"},{url:"/_next/static/chunks/6581.09771c95dd6ec19a.js",revision:"09771c95dd6ec19a"},{url:"/_next/static/chunks/675.83b46268926cf605.js",revision:"83b46268926cf605"},{url:"/_next/static/chunks/6774-f2ad237c61566348.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/6885.6b1206b135dea823.js",revision:"6b1206b135dea823"},{url:"/_next/static/chunks/6931.19c519244e258da7.js",revision:"19c519244e258da7"},{url:"/_next/static/chunks/6932-6c6f9ba6befee32f.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/6942.c08085427c39966c.js",revision:"c08085427c39966c"},{url:"/_next/static/chunks/7195.ef7182336731285f.js",revision:"ef7182336731285f"},{url:"/_next/static/chunks/7432.0d601e4971b6d429.js",revision:"0d601e4971b6d429"},{url:"/_next/static/chunks/7505.3db84a9966d31b7b.js",revision:"3db84a9966d31b7b"},{url:"/_next/static/chunks/7582.d91b4602615a0acf.js",revision:"d91b4602615a0acf"},{url:"/_next/static/chunks/7652.8c2df55e68488cf7.js",revision:"8c2df55e68488cf7"},{url:"/_next/static/chunks/7819.9a26ac64fb2d2c30.js",revision:"9a26ac64fb2d2c30"},{url:"/_next/static/chunks/7890-7d34006e3d89e8f7.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/790.6596afdfca914a52.js",revision:"6596afdfca914a52"},{url:"/_next/static/chunks/794.f3b0b0e0bf97d329.js",revision:"f3b0b0e0bf97d329"},{url:"/_next/static/chunks/7b9ccc1c.7808962c8b2ac4b0.js",revision:"7808962c8b2ac4b0"},{url:"/_next/static/chunks/7f4859ec-aa4c48c1cff76fb8.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/8084.4c050d89a40d4e8b.js",revision:"4c050d89a40d4e8b"},{url:"/_next/static/chunks/8133.e0459ebeab47a5c3.js",revision:"e0459ebeab47a5c3"},{url:"/_next/static/chunks/8147.3ec5c1979df74400.js",revision:"3ec5c1979df74400"},{url:"/_next/static/chunks/8223.ba2812826030944d.js",revision:"ba2812826030944d"},{url:"/_next/static/chunks/8245-ade632d2748a87da.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/8345.a7011a6ac2370d19.js",revision:"a7011a6ac2370d19"},{url:"/_next/static/chunks/8354.8516204ad66e17fd.js",revision:"8516204ad66e17fd"},{url:"/_next/static/chunks/8399-c7e09278659a52f8.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/8469.6562ac0ff8cd01cd.js",revision:"6562ac0ff8cd01cd"},{url:"/_next/static/chunks/8652-81516a85783fa346.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/8792-304075523de5b7c7.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/8838.8a1ebf762ed08299.js",revision:"8a1ebf762ed08299"},{url:"/_next/static/chunks/8886.779f4849b5837805.js",revision:"779f4849b5837805"},{url:"/_next/static/chunks/8932.eccc23ec226440f9.js",revision:"eccc23ec226440f9"},{url:"/_next/static/chunks/9113.dd2271ab7931228a.js",revision:"dd2271ab7931228a"},{url:"/_next/static/chunks/9149.b97ecabde43224f0.js",revision:"b97ecabde43224f0"},{url:"/_next/static/chunks/9189.24fd45ab9d1c2af9.js",revision:"24fd45ab9d1c2af9"},{url:"/_next/static/chunks/9243.488ee655bf820579.js",revision:"488ee655bf820579"},{url:"/_next/static/chunks/9437.1ceb5d8683b320d7.js",revision:"1ceb5d8683b320d7"},{url:"/_next/static/chunks/9467.59760b8b4edbbed7.js",revision:"59760b8b4edbbed7"},{url:"/_next/static/chunks/95ed196f.9f84bf8abcc7efbe.js",revision:"9f84bf8abcc7efbe"},{url:"/_next/static/chunks/982-5dec5fa5b0e19a5f.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/9931.fce569c6f333cd39.js",revision:"fce569c6f333cd39"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/dashboard/page-5344fef3b7cc2b12.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/governance/create/page-42b79b174ef7aa7a.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/governance/page-bf5a4e864417fd6d.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/layout-59121440dd887ff1.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/liquidityPool/page-fb909e3aed6665af.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/members/levelMember/%5Blevel%5D/page-6dd3a7d776c88bd1.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/members/page-9fa418803720e747.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/members/selectMember/page-3055a37cb5c38223.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/members/withdraw/page-8173fbcdce4f3c22.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/menu/page-0714c32b6a5ce5ca.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/notifications/page-a88538bd0ea477a0.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/operations/page-6f8b3ca388e74fd3.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/profile/edit/page-9c7c41d47274890d.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/profile/page-0c05dce178a442b4.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/rewardPool/page-3f17e269b6e850a2.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/(logged-in)/transactions/page-b1034b7bff9fdfed.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/connectYourWallet/layout-da07926e24c931f2.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/connectYourWallet/page-27690b997a6a6d6d.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/connectYourWallet/singMessage/page-15cf89d6b804c6e5.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/knowOurTerms/page-48d90582b403e9db.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-48b1463520f3000a.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/membership/page-7571d3f2a14ae59d.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-ae92ecb4fd35e7de.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/register/layout-6eca15d3deae4ca3.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/%5Blocale%5D/register/page-2221f71860f6f773.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/_not-found-e3724f1fa679d11b.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/app/layout-1460e28443707e10.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/b536a0f1.bbf5cda4843675b5.js",revision:"bbf5cda4843675b5"},{url:"/_next/static/chunks/bf28f64f.fc96c2112dbde4ca.js",revision:"fc96c2112dbde4ca"},{url:"/_next/static/chunks/c21e53d2-6109c526a6cd8f9b.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/fd9d1056-b1392e463ed7bb28.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/main-470e8174c3580b3c.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/main-app-536cfac6f9851dc9.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8f2dd600d386e34c.js",revision:"RcAAkbZxPQHC4tESFy6xI"},{url:"/_next/static/css/267493a6098dd2e6.css",revision:"267493a6098dd2e6"},{url:"/_next/static/css/6aba99db11727bd0.css",revision:"6aba99db11727bd0"},{url:"/_next/static/css/b2a2cdd0e0e6c385.css",revision:"b2a2cdd0e0e6c385"},{url:"/_next/static/css/e048411c1da62c65.css",revision:"e048411c1da62c65"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/BackgroundConnectBottom.7e264403.png",revision:"7e264403"},{url:"/_next/static/media/BackgroundConnectYourWallet.6fa90f1d.png",revision:"6fa90f1d"},{url:"/_next/static/media/BackgroundWelcome.9ac6d254.png",revision:"9ac6d254"},{url:"/_next/static/media/BackgroundWelcomeBottom.db5d2acc.png",revision:"db5d2acc"},{url:"/_next/static/media/CreateProposalIcon.4b6731dd.svg",revision:"c34a08748ce37fe6754ca4a64743a0b2"},{url:"/_next/static/media/DollarLiquidity.a83ce967.svg",revision:"d6848e69c10b48d91391c6e08a324687"},{url:"/_next/static/media/Edit.fb547608.svg",revision:"ae74d07cfc519f54ed5cc0022e9078a3"},{url:"/_next/static/media/Logo.ccc363d3.png",revision:"c268f1156b60d52ffba536403a637139"},{url:"/_next/static/media/LogoTipoPeq.1fbd15e5.png",revision:"974fc80401ae9d81fdfc4b2aba9497a9"},{url:"/_next/static/media/Metamask.86e9cb9e.svg",revision:"12e1e0f15139fcbaa6061a97fc80ac81"},{url:"/_next/static/media/Other.0a743e1c.svg",revision:"9b5b1fb8df3afb4124013a5c74551fcb"},{url:"/_next/static/media/RewardPoolIcon.716e8a56.svg",revision:"1868c93cde0a239f0a846b00b1a3cc78"},{url:"/_next/static/media/TrustWallet.f9a1cf7d.svg",revision:"7266a2b0b33c58104bf057dc89f3c10a"},{url:"/_next/static/media/WalletConnect.7f22d517.svg",revision:"df91c3017c7faf93ec562512772c9dcf"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/approvedIcon.20210dcc.svg",revision:"8cdc4980f9f1425c169145d10e0ab20d"},{url:"/_next/static/media/camera-reverse.316918fd.png",revision:"0e50b535ec1ea35686b662dc8a2d039d"},{url:"/_next/static/media/checkDone.a8e5bf0b.svg",revision:"e86125b9b685ae1484bb221b6c0aa5d2"},{url:"/_next/static/media/claimedReward.fc0c2ffb.svg",revision:"f4cca0c0711772079aa43d3635b4f44c"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_next/static/media/expiredIcon.8b23cda1.svg",revision:"9bce11c375d4c83a656fe722f1f8146c"},{url:"/_next/static/media/governanceIcon.14aeb3b0.svg",revision:"5dbbb5ed7141be6eca43f4f2e864c96c"},{url:"/_next/static/media/membersIcon.e71fc4f0.svg",revision:"3ae1d3064332e58416ee7bf487b5e470"},{url:"/_next/static/media/myReferral.c5eb3325.svg",revision:"33a06e25f22a48a32e93d11e30235c27"},{url:"/_next/static/media/operationsIcon.4ac4483f.svg",revision:"db93eeea4ce72d0fe3aa2f99fffd025b"},{url:"/_next/static/media/photoProfile.adbcb0ec.png",revision:"9d71928a768562ae7335b43056d69f03"},{url:"/_next/static/media/processingGifModal.81b279fe.gif",revision:"f84cee6110ab31cbb0af15970face0c3"},{url:"/_next/static/media/shareLiquidity.2a21975c.svg",revision:"a528fde81a35e14cfd1f88d1312b3f9a"},{url:"/_next/static/media/transactionsIcon.69e2574a.svg",revision:"7a23df6c71999313d9c042f94b585e86"},{url:"/icon_logo_1024.png",revision:"c2ad6f0012eb5609ace48e6d1989a879"},{url:"/icon_logo_128.png",revision:"fb4ea63b2ccdc5573ff61810be080e5c"},{url:"/icon_logo_16.png",revision:"b4777868b0e24ac0609eee44faeb25b4"},{url:"/icon_logo_192.png",revision:"d95c30a3b265ef6666a267e53a1c7b87"},{url:"/icon_logo_256.png",revision:"d762ad7f0ebe1b06e37cc97d39bbb332"},{url:"/icon_logo_32.png",revision:"e58020dcb6354d92692132c6cf4232d1"},{url:"/icon_logo_384.png",revision:"07d6368f3d0d566e520ffdbee20df13c"},{url:"/icon_logo_512.png",revision:"dd44dd96c67fb619c89146071137a9a6"},{url:"/icon_logo_64.png",revision:"e8401ae537370e35db910264c8eba373"},{url:"/icon_logo_96.png",revision:"bec9f0bebdf4e8c5e762d46fca53b139"},{url:"/manifest.json",revision:"3f20aa7bbdd16db9c6bcbe1e5f765fe3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:c}})=>!(!e||c.startsWith("/api/auth/callback")||!c.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:c},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!c.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:c},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!c.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:c})=>c&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
