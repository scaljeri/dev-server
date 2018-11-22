/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icons/exclude.svg",
    "revision": "4793e4b2ae762154f5c8a04e24f220e5"
  },
  {
    "url": "assets/icons/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/icons/ios-add-circle-outline.svg",
    "revision": "c6124080f01f368a17b176f4311d523b"
  },
  {
    "url": "assets/icons/ios-add-circle.svg",
    "revision": "03a04b4748efffeb4124a59716b9d1cf"
  },
  {
    "url": "assets/icons/ios-add.svg",
    "revision": "db9452b83fbabf7ebcf664d0ef9ec7d0"
  },
  {
    "url": "assets/icons/ios-airplane.svg",
    "revision": "48c8f17bf3e2adfd74a8c98f4aaeb5fb"
  },
  {
    "url": "assets/icons/ios-alarm.svg",
    "revision": "2e0f7f8bad4e64f5b896efdf6b8f29e8"
  },
  {
    "url": "assets/icons/ios-albums.svg",
    "revision": "b2352cd277ea3055d6faf80be3abc64f"
  },
  {
    "url": "assets/icons/ios-alert.svg",
    "revision": "6d95f2ff65d4433a575ae998e5307726"
  },
  {
    "url": "assets/icons/ios-american-football.svg",
    "revision": "776267f662867e0cfc8dcde521e633f0"
  },
  {
    "url": "assets/icons/ios-analytics.svg",
    "revision": "aea7cce4a442422678590c59cfccd3c3"
  },
  {
    "url": "assets/icons/ios-aperture.svg",
    "revision": "2f50a52248506e5936aa8d5fa4e164bb"
  },
  {
    "url": "assets/icons/ios-apps.svg",
    "revision": "ce86ec38256e8866b1449163b8aa3c21"
  },
  {
    "url": "assets/icons/ios-appstore.svg",
    "revision": "053f095487709e05a7d662a02c9df6ec"
  },
  {
    "url": "assets/icons/ios-archive.svg",
    "revision": "f221f6ab0a0cae5fe0efb481669f6a95"
  },
  {
    "url": "assets/icons/ios-arrow-back.svg",
    "revision": "6e4c2ebd9aff048a382ca8b1ecf1a39e"
  },
  {
    "url": "assets/icons/ios-arrow-down.svg",
    "revision": "dea169d34b7b1898d742ac84eeb07b8f"
  },
  {
    "url": "assets/icons/ios-arrow-dropdown-circle.svg",
    "revision": "12a8928ea369dd137dddd168d06a0b41"
  },
  {
    "url": "assets/icons/ios-arrow-dropdown.svg",
    "revision": "95630422f7115691395c7463ecfacaa2"
  },
  {
    "url": "assets/icons/ios-arrow-dropleft-circle.svg",
    "revision": "359a8292c3ad0b88edeeee084ca9d553"
  },
  {
    "url": "assets/icons/ios-arrow-dropleft.svg",
    "revision": "a129b30fe9a0ec7b29c4cd7f09f6722d"
  },
  {
    "url": "assets/icons/ios-arrow-dropright-circle.svg",
    "revision": "929924193198183596fd113784307d7d"
  },
  {
    "url": "assets/icons/ios-arrow-dropright.svg",
    "revision": "d1fe36a6a73f56d5c6bf01f80f55e5e9"
  },
  {
    "url": "assets/icons/ios-arrow-dropup-circle.svg",
    "revision": "d69821287c5445be4a090189bf3a2008"
  },
  {
    "url": "assets/icons/ios-arrow-dropup.svg",
    "revision": "6f41aa098f1ec74c29cf7d20f02f4d48"
  },
  {
    "url": "assets/icons/ios-arrow-forward.svg",
    "revision": "8441c142707c976ca9efeb6be2c074f0"
  },
  {
    "url": "assets/icons/ios-arrow-round-back.svg",
    "revision": "f5c15e39c143cd1e28ecc1228cb86829"
  },
  {
    "url": "assets/icons/ios-arrow-round-down.svg",
    "revision": "2b330e5e9a61b222bca468603c95aa91"
  },
  {
    "url": "assets/icons/ios-arrow-round-forward.svg",
    "revision": "205088cfb2cb7ccbf0ad0a39515a1b5b"
  },
  {
    "url": "assets/icons/ios-arrow-round-up.svg",
    "revision": "a3046e0bdab8253fe90a8462ab21aa27"
  },
  {
    "url": "assets/icons/ios-arrow-up.svg",
    "revision": "0d50660ecf943e7cbe379ecfd384ba78"
  },
  {
    "url": "assets/icons/ios-at.svg",
    "revision": "3b446f48521452e67307241b5ac0a25e"
  },
  {
    "url": "assets/icons/ios-attach.svg",
    "revision": "cc2e98ebf42c687b6665a890a1e1284c"
  },
  {
    "url": "assets/icons/ios-backspace.svg",
    "revision": "9a80ca6a9c0152c564f5246dfdd46f91"
  },
  {
    "url": "assets/icons/ios-barcode.svg",
    "revision": "312a7fbc795eef230edfd7ae87576b38"
  },
  {
    "url": "assets/icons/ios-baseball.svg",
    "revision": "3e403708c3999bd39a130f2656ad780f"
  },
  {
    "url": "assets/icons/ios-basket.svg",
    "revision": "b423b9e5ab429476844e451e6d3049ac"
  },
  {
    "url": "assets/icons/ios-basketball.svg",
    "revision": "9a012dfecfd2518643abb5e32907ffbc"
  },
  {
    "url": "assets/icons/ios-battery-charging.svg",
    "revision": "b62199554fad8e5ede6d32cb27f2bef4"
  },
  {
    "url": "assets/icons/ios-battery-dead.svg",
    "revision": "cc3d5d548a6226f471c50e286bd6ac74"
  },
  {
    "url": "assets/icons/ios-battery-full.svg",
    "revision": "34b7cdbab831427a89c9167d05502b08"
  },
  {
    "url": "assets/icons/ios-beaker.svg",
    "revision": "87aaa01ce2966bd7b4bb26a352b5baa8"
  },
  {
    "url": "assets/icons/ios-bed.svg",
    "revision": "9f5bc3fbb372fb8542aedcf4f44b89a0"
  },
  {
    "url": "assets/icons/ios-beer.svg",
    "revision": "ff10b67bc6dce6a89d6a1a1452ca591c"
  },
  {
    "url": "assets/icons/ios-bicycle.svg",
    "revision": "65a6df44de21d7185036adca3eaef333"
  },
  {
    "url": "assets/icons/ios-bluetooth.svg",
    "revision": "787de718e7e9629777f818920098d3a6"
  },
  {
    "url": "assets/icons/ios-boat.svg",
    "revision": "f65b5d3f84d2968936e5053f96bc36e8"
  },
  {
    "url": "assets/icons/ios-body.svg",
    "revision": "19156c11cc343e0580612177788e641c"
  },
  {
    "url": "assets/icons/ios-bonfire.svg",
    "revision": "1425cccef1652438782f0967c143064e"
  },
  {
    "url": "assets/icons/ios-book.svg",
    "revision": "cb972184b837e667801553b4025f430d"
  },
  {
    "url": "assets/icons/ios-bookmark.svg",
    "revision": "c1a007a56be58f341b1371c463ff1350"
  },
  {
    "url": "assets/icons/ios-bookmarks.svg",
    "revision": "ed2342a43e3d542696fea6166c4b9387"
  },
  {
    "url": "assets/icons/ios-bowtie.svg",
    "revision": "4b32574085be4be6aba4ca6e0ebfe5dc"
  },
  {
    "url": "assets/icons/ios-briefcase.svg",
    "revision": "e7210e6cc5ea79b4522073df833d92ca"
  },
  {
    "url": "assets/icons/ios-browsers.svg",
    "revision": "9129eef5d3a100b89674f00e604479a2"
  },
  {
    "url": "assets/icons/ios-brush.svg",
    "revision": "ed6244f2c27390faf671eeb97539909f"
  },
  {
    "url": "assets/icons/ios-bug.svg",
    "revision": "3ec7a1c455b9eb01d090ddf61aaf3af3"
  },
  {
    "url": "assets/icons/ios-build.svg",
    "revision": "72f188daf36ad42e27003ca60def9cab"
  },
  {
    "url": "assets/icons/ios-bulb.svg",
    "revision": "4981c2cb83079dfed88391169b059957"
  },
  {
    "url": "assets/icons/ios-bus.svg",
    "revision": "9fa6f1c4607dcf7991eec13f411512ec"
  },
  {
    "url": "assets/icons/ios-business.svg",
    "revision": "94c0c89cb63fea8f183b0f910073caeb"
  },
  {
    "url": "assets/icons/ios-cafe.svg",
    "revision": "54a77a1dd653612919fed8aae6bc3084"
  },
  {
    "url": "assets/icons/ios-calculator.svg",
    "revision": "067eb3ccdf0fee7d8cb99dab4cda36cb"
  },
  {
    "url": "assets/icons/ios-calendar.svg",
    "revision": "73ec30db3c91f3ee786bab7cdfe1d7ab"
  },
  {
    "url": "assets/icons/ios-call.svg",
    "revision": "5130a6e3489efd3d95b896d586598653"
  },
  {
    "url": "assets/icons/ios-camera.svg",
    "revision": "fe9cb17a29df2e94bba9fd1216a3d571"
  },
  {
    "url": "assets/icons/ios-car.svg",
    "revision": "dc589a98cad66db42fb89a374f2d6484"
  },
  {
    "url": "assets/icons/ios-card.svg",
    "revision": "aadb347d7e68291e06b04799822bcc16"
  },
  {
    "url": "assets/icons/ios-cart.svg",
    "revision": "035e78157264b53fb960ab4a7b4e5fd1"
  },
  {
    "url": "assets/icons/ios-cash.svg",
    "revision": "fbeb5cc46ccc4473dd010e04756121d3"
  },
  {
    "url": "assets/icons/ios-cellular.svg",
    "revision": "228396ac5ab8e497c7cfa0abd0f57597"
  },
  {
    "url": "assets/icons/ios-chatboxes.svg",
    "revision": "6561420f1cc7c440fe0b17e3094755cc"
  },
  {
    "url": "assets/icons/ios-chatbubbles.svg",
    "revision": "a81ee59bae8aa38118306df51f5c8ee4"
  },
  {
    "url": "assets/icons/ios-checkbox-outline.svg",
    "revision": "0819341d82c1efaaa502ee76da4b93b5"
  },
  {
    "url": "assets/icons/ios-checkbox.svg",
    "revision": "3f94e0faf5afc719ca896dab046f0583"
  },
  {
    "url": "assets/icons/ios-checkmark-circle-outline.svg",
    "revision": "58b33fbda9ae51525a7dfdda1be19b11"
  },
  {
    "url": "assets/icons/ios-checkmark-circle.svg",
    "revision": "6681aa80dcbed60c265c95999d6f5d8a"
  },
  {
    "url": "assets/icons/ios-checkmark.svg",
    "revision": "291bb93594c57ec190c1cdca70dcedc5"
  },
  {
    "url": "assets/icons/ios-clipboard.svg",
    "revision": "bc6cadd18a493402116cc0514479ae92"
  },
  {
    "url": "assets/icons/ios-clock.svg",
    "revision": "e95f3173a96ac274fad866143a5c6c9a"
  },
  {
    "url": "assets/icons/ios-close-circle-outline.svg",
    "revision": "fa3e59c171545c0cbb31e27b11232fd8"
  },
  {
    "url": "assets/icons/ios-close-circle.svg",
    "revision": "0d66924670586b2af08b99c3cb912aba"
  },
  {
    "url": "assets/icons/ios-close.svg",
    "revision": "e4131ac2b2bcf924ac11a8c355016d16"
  },
  {
    "url": "assets/icons/ios-cloud-circle.svg",
    "revision": "40a36e0b94309bd50358212ccd637bad"
  },
  {
    "url": "assets/icons/ios-cloud-done.svg",
    "revision": "d4e64ac109e8c8ee62eb742e8fca84df"
  },
  {
    "url": "assets/icons/ios-cloud-download.svg",
    "revision": "b3a8b61fac63d60c9c3e1994ee56ba1d"
  },
  {
    "url": "assets/icons/ios-cloud-outline.svg",
    "revision": "876326dd05ae9802cb793225f5d6354b"
  },
  {
    "url": "assets/icons/ios-cloud-upload.svg",
    "revision": "e210030c015532b327e3367d00fb56df"
  },
  {
    "url": "assets/icons/ios-cloud.svg",
    "revision": "8b6844755463bea81ee704a473dfa33c"
  },
  {
    "url": "assets/icons/ios-cloudy-night.svg",
    "revision": "872a90f08d576552e97eaef2a8a8853c"
  },
  {
    "url": "assets/icons/ios-cloudy.svg",
    "revision": "9d2115366e1b95e63587a81e978c3f2b"
  },
  {
    "url": "assets/icons/ios-code-download.svg",
    "revision": "b7ac22b713de8b1c036f90c1f223cdd6"
  },
  {
    "url": "assets/icons/ios-code-working.svg",
    "revision": "121a6a15d1c4402665293058bcd9d05b"
  },
  {
    "url": "assets/icons/ios-code.svg",
    "revision": "ae015cbd21f136815ba3bb9e8f8a4e5b"
  },
  {
    "url": "assets/icons/ios-cog.svg",
    "revision": "aa39caebdbb2457f9adbc4c190e575d0"
  },
  {
    "url": "assets/icons/ios-color-fill.svg",
    "revision": "d5b0feeabaa7ab2d86a4366de088e3ec"
  },
  {
    "url": "assets/icons/ios-color-filter.svg",
    "revision": "ae333bcacfade4e21c4098bdda37a771"
  },
  {
    "url": "assets/icons/ios-color-palette.svg",
    "revision": "eb538e112bcb947e27b29e4a0862e1d7"
  },
  {
    "url": "assets/icons/ios-color-wand.svg",
    "revision": "65cc66f084d9abc68aa0dd3db8e84a6c"
  },
  {
    "url": "assets/icons/ios-compass.svg",
    "revision": "df707fbda59dc488d747b8f63152b81f"
  },
  {
    "url": "assets/icons/ios-construct.svg",
    "revision": "7bd3e76efe6aeebc02482166cb88999f"
  },
  {
    "url": "assets/icons/ios-contact.svg",
    "revision": "773b329c9ac787a6c4c70dae8d28caaf"
  },
  {
    "url": "assets/icons/ios-contacts.svg",
    "revision": "0b6d630e333649b951a2a0653562b6b7"
  },
  {
    "url": "assets/icons/ios-contract.svg",
    "revision": "b1b5d8b84eec159fd1e7ff6d69dc484c"
  },
  {
    "url": "assets/icons/ios-contrast.svg",
    "revision": "91c607978f94a4ff60f320070bab9494"
  },
  {
    "url": "assets/icons/ios-copy.svg",
    "revision": "7307b54008075d32553f658b058843ab"
  },
  {
    "url": "assets/icons/ios-create.svg",
    "revision": "39c52fa8670acbf20824cc9691e78419"
  },
  {
    "url": "assets/icons/ios-crop.svg",
    "revision": "f7b304fbbda6fde64e72e5abaeb991c3"
  },
  {
    "url": "assets/icons/ios-cube.svg",
    "revision": "5f33f27925df4a597dfe7ba9596922e4"
  },
  {
    "url": "assets/icons/ios-cut.svg",
    "revision": "2ad493b8654fa62b9b0ccb4ec98ba1a1"
  },
  {
    "url": "assets/icons/ios-desktop.svg",
    "revision": "384d0f1eae52935bf3c63b31542c3eca"
  },
  {
    "url": "assets/icons/ios-disc.svg",
    "revision": "4ea0aa88de969abf1c1ceb6159ba1446"
  },
  {
    "url": "assets/icons/ios-document.svg",
    "revision": "bdfceefb01c401e5842c00ae1d5c56e5"
  },
  {
    "url": "assets/icons/ios-done-all.svg",
    "revision": "0d744e98935b032b98d965a55b5d2b49"
  },
  {
    "url": "assets/icons/ios-download.svg",
    "revision": "3f10c8e5a05d153ace95d03afb282d28"
  },
  {
    "url": "assets/icons/ios-easel.svg",
    "revision": "18f5ff324ab5235b106daf9b4b91cd9e"
  },
  {
    "url": "assets/icons/ios-egg.svg",
    "revision": "414f2c1e8f9b67e2067aae656a7c7631"
  },
  {
    "url": "assets/icons/ios-exit.svg",
    "revision": "68ca2b415372c251e9373d89dcf7fb5d"
  },
  {
    "url": "assets/icons/ios-expand.svg",
    "revision": "5fc2646b28d481336a39e6ab0c4205c5"
  },
  {
    "url": "assets/icons/ios-eye-off.svg",
    "revision": "fb6fc0038a4c4cc32830da92f07c2b71"
  },
  {
    "url": "assets/icons/ios-eye.svg",
    "revision": "1cf920dc028417985856aec7ed5c0af7"
  },
  {
    "url": "assets/icons/ios-fastforward.svg",
    "revision": "42126d5ff52a612a667fa5559fcfb840"
  },
  {
    "url": "assets/icons/ios-female.svg",
    "revision": "5932dd5ae753d382a76a25eb7494a938"
  },
  {
    "url": "assets/icons/ios-filing.svg",
    "revision": "a45263e362513164d7d033e7bf40cb77"
  },
  {
    "url": "assets/icons/ios-film.svg",
    "revision": "0308983b7bac821ab01749c14e3ad373"
  },
  {
    "url": "assets/icons/ios-finger-print.svg",
    "revision": "de419ca64f032d8d1468804b07d26a14"
  },
  {
    "url": "assets/icons/ios-fitness.svg",
    "revision": "3e35b91973e4ea21fce2e5b982bc757e"
  },
  {
    "url": "assets/icons/ios-flag.svg",
    "revision": "c950a854c258686de078c4b2605c1b78"
  },
  {
    "url": "assets/icons/ios-flame.svg",
    "revision": "370d59850a617cb03651a65a4c2f87b5"
  },
  {
    "url": "assets/icons/ios-flash-off.svg",
    "revision": "69082ecdaec748f3a583d1fb534f9b1a"
  },
  {
    "url": "assets/icons/ios-flash.svg",
    "revision": "50f5f950299858c8fbb05873195bb4d1"
  },
  {
    "url": "assets/icons/ios-flashlight.svg",
    "revision": "7e96e3fcd2a0399937ae33f886810b4d"
  },
  {
    "url": "assets/icons/ios-flask.svg",
    "revision": "89537195b87941e85a5c85956482cd8f"
  },
  {
    "url": "assets/icons/ios-flower.svg",
    "revision": "ff49cb64bf816a34059a74b62f1b5223"
  },
  {
    "url": "assets/icons/ios-folder-open.svg",
    "revision": "9e27af5d2a46d9a6d50cae3bfa2393fc"
  },
  {
    "url": "assets/icons/ios-folder.svg",
    "revision": "62726cba10e76a0b8afa009ca96f2562"
  },
  {
    "url": "assets/icons/ios-football.svg",
    "revision": "727a24d262bc65998324dea48ad9b8b4"
  },
  {
    "url": "assets/icons/ios-funnel.svg",
    "revision": "052ca356b73102c3f4c01b91d65894dd"
  },
  {
    "url": "assets/icons/ios-gift.svg",
    "revision": "e9caf04a04fd61209071243658009f9c"
  },
  {
    "url": "assets/icons/ios-git-branch.svg",
    "revision": "757070c3bc439008748b6cde7eaedd59"
  },
  {
    "url": "assets/icons/ios-git-commit.svg",
    "revision": "f1a66843d416012caef111e24eeed559"
  },
  {
    "url": "assets/icons/ios-git-compare.svg",
    "revision": "46a16c67588f0f05155433d24706ee0a"
  },
  {
    "url": "assets/icons/ios-git-merge.svg",
    "revision": "3c12f2c9f2c5f6e70250b7952c3fbd81"
  },
  {
    "url": "assets/icons/ios-git-network.svg",
    "revision": "ebaf6041a69809179b1844900dec3b54"
  },
  {
    "url": "assets/icons/ios-git-pull-request.svg",
    "revision": "d17ef751bab3f597d362aeb905de40e7"
  },
  {
    "url": "assets/icons/ios-glasses.svg",
    "revision": "4ceabef05704d8a20c1bef450a2c4cec"
  },
  {
    "url": "assets/icons/ios-globe.svg",
    "revision": "5c50975c50feade1e0246725bf9934d2"
  },
  {
    "url": "assets/icons/ios-grid.svg",
    "revision": "5b557ee2061dfdea5b4c90a9c9c66bca"
  },
  {
    "url": "assets/icons/ios-hammer.svg",
    "revision": "afa5a31e2b83e6b77d258b0b02284f14"
  },
  {
    "url": "assets/icons/ios-hand.svg",
    "revision": "b6f2921b4652949d15e3c7ffb1605fd2"
  },
  {
    "url": "assets/icons/ios-happy.svg",
    "revision": "968c61a6c2c798757b6992114e955a9a"
  },
  {
    "url": "assets/icons/ios-headset.svg",
    "revision": "48510d9b06423825fa6502f0135600c7"
  },
  {
    "url": "assets/icons/ios-heart-dislike.svg",
    "revision": "7f5bd42aab2906cfc16cb3e43c6f350e"
  },
  {
    "url": "assets/icons/ios-heart-empty.svg",
    "revision": "ee260fc7dde8035a944e134bffff348c"
  },
  {
    "url": "assets/icons/ios-heart-half.svg",
    "revision": "e98c5669e0cbbf6ba90405b295cf0f60"
  },
  {
    "url": "assets/icons/ios-heart.svg",
    "revision": "9057b76c20ad0fcde714f424906954c1"
  },
  {
    "url": "assets/icons/ios-help-buoy.svg",
    "revision": "765d17d405622e3465d427b878a73236"
  },
  {
    "url": "assets/icons/ios-help-circle-outline.svg",
    "revision": "c141038117e6f0bc3a01be903ca44950"
  },
  {
    "url": "assets/icons/ios-help-circle.svg",
    "revision": "52d11dd90fc2b89b834cc79e7a691ff3"
  },
  {
    "url": "assets/icons/ios-help.svg",
    "revision": "38cadde3588a6a171177d14326dd55b8"
  },
  {
    "url": "assets/icons/ios-home.svg",
    "revision": "410fd0262abe2feb0f12f8ddd94ee7f0"
  },
  {
    "url": "assets/icons/ios-hourglass.svg",
    "revision": "630482f70c7b4fdca64e41c8a955ee54"
  },
  {
    "url": "assets/icons/ios-ice-cream.svg",
    "revision": "588056b6c1541e373283f71cedb90900"
  },
  {
    "url": "assets/icons/ios-image.svg",
    "revision": "9584c079a5586c078b0a2549393fbaa2"
  },
  {
    "url": "assets/icons/ios-images.svg",
    "revision": "1eed8c8f0a8ac6969226ab4859a7b15b"
  },
  {
    "url": "assets/icons/ios-infinite.svg",
    "revision": "274f71ffe9adacefd0f5d3edd9dbc4c8"
  },
  {
    "url": "assets/icons/ios-information-circle-outline.svg",
    "revision": "e27ecf40bf3d4872b5248ddc4706d208"
  },
  {
    "url": "assets/icons/ios-information-circle.svg",
    "revision": "a1abd1dea3f060ad123373818fcc4965"
  },
  {
    "url": "assets/icons/ios-information.svg",
    "revision": "d6135608e24bf9736becded080b4735b"
  },
  {
    "url": "assets/icons/ios-jet.svg",
    "revision": "f5af3efa8984dddf5d11b9e90bf079b4"
  },
  {
    "url": "assets/icons/ios-journal.svg",
    "revision": "9eb4b6eb5648c7c57a382d41c94afa41"
  },
  {
    "url": "assets/icons/ios-key.svg",
    "revision": "aabb384bf266e27b2bb12d1f6805e608"
  },
  {
    "url": "assets/icons/ios-keypad.svg",
    "revision": "c7050b19a8e887573579ca565cde3ed1"
  },
  {
    "url": "assets/icons/ios-laptop.svg",
    "revision": "b306c2808ef2c0d6f22159edc776fc05"
  },
  {
    "url": "assets/icons/ios-leaf.svg",
    "revision": "f7b27bbe2378fb7dcf0ba477603ff85d"
  },
  {
    "url": "assets/icons/ios-link.svg",
    "revision": "81bfac4a773d462a1a2a1ce4a0a7f5d1"
  },
  {
    "url": "assets/icons/ios-list-box.svg",
    "revision": "c36cb798f292c7bd6b391fe49259a56b"
  },
  {
    "url": "assets/icons/ios-list.svg",
    "revision": "cbcd14711dcd6b257421df6291eb1cbd"
  },
  {
    "url": "assets/icons/ios-locate.svg",
    "revision": "f80ba955c5a30540f3fc02b236a8515b"
  },
  {
    "url": "assets/icons/ios-lock.svg",
    "revision": "9087529be78d3e0628a9d07910b22246"
  },
  {
    "url": "assets/icons/ios-log-in.svg",
    "revision": "bd2175631609b13fec4f8c1322fbc6c0"
  },
  {
    "url": "assets/icons/ios-log-out.svg",
    "revision": "6cfe1fb25f3f9c761ddb91d8e9b57e98"
  },
  {
    "url": "assets/icons/ios-magnet.svg",
    "revision": "eaa527767b3824701557d27aaacd4131"
  },
  {
    "url": "assets/icons/ios-mail-open.svg",
    "revision": "dc10dd5c20fa2bf5c71329968af9c2a0"
  },
  {
    "url": "assets/icons/ios-mail-unread.svg",
    "revision": "023521fa115e74fe167ceab8387bc6ed"
  },
  {
    "url": "assets/icons/ios-mail.svg",
    "revision": "6068fe8b707c262184e3536a4511bafa"
  },
  {
    "url": "assets/icons/ios-male.svg",
    "revision": "852eeb1a97f6fb90334df60f5c35f4d3"
  },
  {
    "url": "assets/icons/ios-man.svg",
    "revision": "ccab0429c05fd5026c7c1c7349e856d7"
  },
  {
    "url": "assets/icons/ios-map.svg",
    "revision": "4a646c3f233b813abaecce479a88ca78"
  },
  {
    "url": "assets/icons/ios-medal.svg",
    "revision": "f5f720ee1d7ed5efda3fa8301b408274"
  },
  {
    "url": "assets/icons/ios-medical.svg",
    "revision": "8f09183187cf021d0c4a126aa4408d1f"
  },
  {
    "url": "assets/icons/ios-medkit.svg",
    "revision": "769e8b54e5417ae998a900ceb05ecff6"
  },
  {
    "url": "assets/icons/ios-megaphone.svg",
    "revision": "e5af007c5c1210e592f85588ec819e61"
  },
  {
    "url": "assets/icons/ios-menu.svg",
    "revision": "32301819a3aac943eb0ff2e564d9914e"
  },
  {
    "url": "assets/icons/ios-mic-off.svg",
    "revision": "55a508c9b448354672ba880f36d1bd10"
  },
  {
    "url": "assets/icons/ios-mic.svg",
    "revision": "e876a2498db061400542dcb1fb75c7a4"
  },
  {
    "url": "assets/icons/ios-microphone.svg",
    "revision": "a8eb024133bbab596104aaf148e7f85e"
  },
  {
    "url": "assets/icons/ios-moon.svg",
    "revision": "976d12f52ab9c85700cc33e7dcbe8ddf"
  },
  {
    "url": "assets/icons/ios-more.svg",
    "revision": "662e33b4f541660e299dec13faf5450d"
  },
  {
    "url": "assets/icons/ios-move.svg",
    "revision": "a4a2aa33b2b2bfa60fd54abd51344fc7"
  },
  {
    "url": "assets/icons/ios-musical-note.svg",
    "revision": "daab88f344c05c8869a7c79655ee0737"
  },
  {
    "url": "assets/icons/ios-musical-notes.svg",
    "revision": "3f9b1469e39d63564325f74ba8c98416"
  },
  {
    "url": "assets/icons/ios-navigate.svg",
    "revision": "80c37162ec0077193b6865848e8582a4"
  },
  {
    "url": "assets/icons/ios-notifications-off.svg",
    "revision": "e4bca1d5ef5104da6c2e33c11cca326f"
  },
  {
    "url": "assets/icons/ios-notifications-outline.svg",
    "revision": "e91354edad45bfb310fe97383e608609"
  },
  {
    "url": "assets/icons/ios-notifications.svg",
    "revision": "2de1ef6a0631f1b22f7b56188951b7bb"
  },
  {
    "url": "assets/icons/ios-nuclear.svg",
    "revision": "87a24f139c0ada0fe594edd6277a890b"
  },
  {
    "url": "assets/icons/ios-nutrition.svg",
    "revision": "9c0e1ccc757e05d8a175ef2919ecabf9"
  },
  {
    "url": "assets/icons/ios-open.svg",
    "revision": "a072b57c44bbddd651fd1bdb0d4bba24"
  },
  {
    "url": "assets/icons/ios-options.svg",
    "revision": "01845c4a5a09f6aca1d6e94d06871851"
  },
  {
    "url": "assets/icons/ios-outlet.svg",
    "revision": "555592143756331b73ef1febaa8ddddd"
  },
  {
    "url": "assets/icons/ios-paper-plane.svg",
    "revision": "734e408c377837591b52a287e702d795"
  },
  {
    "url": "assets/icons/ios-paper.svg",
    "revision": "cc24166829f24047bf51caa388c94e57"
  },
  {
    "url": "assets/icons/ios-partly-sunny.svg",
    "revision": "15f07f5d70646050e44bbe913d661bdf"
  },
  {
    "url": "assets/icons/ios-pause.svg",
    "revision": "692d5bc7167338499d001b7d2eb7a3e2"
  },
  {
    "url": "assets/icons/ios-paw.svg",
    "revision": "eb5e0680ee73366e0e9f165e8f7cdd6d"
  },
  {
    "url": "assets/icons/ios-people.svg",
    "revision": "88f4a7974aba8ae70a1f36865467007d"
  },
  {
    "url": "assets/icons/ios-person-add.svg",
    "revision": "e07f9854f31de8fee148554797589a6b"
  },
  {
    "url": "assets/icons/ios-person.svg",
    "revision": "ffea8a9a95d593fa4666b2332a36d634"
  },
  {
    "url": "assets/icons/ios-phone-landscape.svg",
    "revision": "89033909cef36f38ea98bf11c31151ca"
  },
  {
    "url": "assets/icons/ios-phone-portrait.svg",
    "revision": "fd724734dc5f649c7a7b7d0ea40f2a54"
  },
  {
    "url": "assets/icons/ios-photos.svg",
    "revision": "3d2a9390ba4e07044def29ec85d0abf1"
  },
  {
    "url": "assets/icons/ios-pie.svg",
    "revision": "0850a058afea1fa26b213de4caa3e530"
  },
  {
    "url": "assets/icons/ios-pin.svg",
    "revision": "c42601ce914cbbf71e0632bc357875ae"
  },
  {
    "url": "assets/icons/ios-pint.svg",
    "revision": "4b8f32f88ab519dcf7a3c4e30b17aca9"
  },
  {
    "url": "assets/icons/ios-pizza.svg",
    "revision": "f2d7fca2c6fb0c4ec875af9f62776406"
  },
  {
    "url": "assets/icons/ios-planet.svg",
    "revision": "7a303abfabdb86dbf036d47e31916899"
  },
  {
    "url": "assets/icons/ios-play-circle.svg",
    "revision": "5baa64946d42b567d13fde5220f13a9c"
  },
  {
    "url": "assets/icons/ios-play.svg",
    "revision": "fb7905f5d649d946bbdc94461650b86f"
  },
  {
    "url": "assets/icons/ios-podium.svg",
    "revision": "710f04c336fde4746ec0426a6104ee77"
  },
  {
    "url": "assets/icons/ios-power.svg",
    "revision": "32e2e549603cc5a109b937998c15af18"
  },
  {
    "url": "assets/icons/ios-pricetag.svg",
    "revision": "ad93cbfac999b9ae4167663af8c459ea"
  },
  {
    "url": "assets/icons/ios-pricetags.svg",
    "revision": "d06e75119472fd511dc62bca6e0bbed6"
  },
  {
    "url": "assets/icons/ios-print.svg",
    "revision": "4d33b29bca85285cbefe0a9067982058"
  },
  {
    "url": "assets/icons/ios-pulse.svg",
    "revision": "0a7c04bcf13df24a5bd6ae3503c5da96"
  },
  {
    "url": "assets/icons/ios-qr-scanner.svg",
    "revision": "9fd006c132ed8e133df37c6de2a7b52b"
  },
  {
    "url": "assets/icons/ios-quote.svg",
    "revision": "240901e1f0066570e2fab803e635c099"
  },
  {
    "url": "assets/icons/ios-radio-button-off.svg",
    "revision": "4465ccca86b031c8d6841aabd19f7685"
  },
  {
    "url": "assets/icons/ios-radio-button-on.svg",
    "revision": "3e6f964ef5a8f4440816f621af422554"
  },
  {
    "url": "assets/icons/ios-radio.svg",
    "revision": "10935681fa6279958e241cec82863bbf"
  },
  {
    "url": "assets/icons/ios-rainy.svg",
    "revision": "9d5640027817367e7e3dfb90779a5fda"
  },
  {
    "url": "assets/icons/ios-recording.svg",
    "revision": "8960bbc53ae3075856d6b4060d0c39c2"
  },
  {
    "url": "assets/icons/ios-redo.svg",
    "revision": "5b6d6efe7b2f290e285c49d17a950add"
  },
  {
    "url": "assets/icons/ios-refresh-circle.svg",
    "revision": "4aab135f793a41ed4df3cd39197494e6"
  },
  {
    "url": "assets/icons/ios-refresh.svg",
    "revision": "b29ca10e4a275292c2c9de323968d172"
  },
  {
    "url": "assets/icons/ios-remove-circle-outline.svg",
    "revision": "6af8f0861b5697589854ffc792db1880"
  },
  {
    "url": "assets/icons/ios-remove-circle.svg",
    "revision": "a457e2f7f762032f36af99ab4ac369da"
  },
  {
    "url": "assets/icons/ios-remove.svg",
    "revision": "a0d89ceedb2438dff44905f69acc52b1"
  },
  {
    "url": "assets/icons/ios-reorder.svg",
    "revision": "e44b3545c20ff7fde6cd4f23958e6848"
  },
  {
    "url": "assets/icons/ios-repeat.svg",
    "revision": "8ffb17089a6ebc5a4dca68a0aa68c27d"
  },
  {
    "url": "assets/icons/ios-resize.svg",
    "revision": "5721fbd4ad3ab111bf71b9851a14fb03"
  },
  {
    "url": "assets/icons/ios-restaurant.svg",
    "revision": "29994bd36ce3ecc0c5b93b89b5c752ca"
  },
  {
    "url": "assets/icons/ios-return-left.svg",
    "revision": "d52717cb1a51d0e6e4ea6a6630ed6151"
  },
  {
    "url": "assets/icons/ios-return-right.svg",
    "revision": "b934d803b0a398f1572f16348e7023ca"
  },
  {
    "url": "assets/icons/ios-reverse-camera.svg",
    "revision": "de5daaa659f077f0a665f8ec19f7f6b7"
  },
  {
    "url": "assets/icons/ios-rewind.svg",
    "revision": "5fd4bd59eeb8f681a37d5d096b6a73a5"
  },
  {
    "url": "assets/icons/ios-ribbon.svg",
    "revision": "9c7b9e468110c68b91e54f3d56fd97e1"
  },
  {
    "url": "assets/icons/ios-rocket.svg",
    "revision": "ee2eeb9098f423cf146f22b97259dac7"
  },
  {
    "url": "assets/icons/ios-rose.svg",
    "revision": "73fbacf8dd596e4024f93f989ba839dd"
  },
  {
    "url": "assets/icons/ios-sad.svg",
    "revision": "137198504577c4c972c390e98cb7e26a"
  },
  {
    "url": "assets/icons/ios-save.svg",
    "revision": "10002a90247a12c672893ea5e53b1441"
  },
  {
    "url": "assets/icons/ios-school.svg",
    "revision": "3f8017b53096601937c3798e7ae33598"
  },
  {
    "url": "assets/icons/ios-search.svg",
    "revision": "9d86c6d333f925c771313b6a7302cc2e"
  },
  {
    "url": "assets/icons/ios-send.svg",
    "revision": "369b51e5ba9ad877d49cfbcceb1ecd4e"
  },
  {
    "url": "assets/icons/ios-settings.svg",
    "revision": "3f5db6a47257737a1b0f49c1270bbccc"
  },
  {
    "url": "assets/icons/ios-share-alt.svg",
    "revision": "be276f8f0e91a9deb79301c7db558622"
  },
  {
    "url": "assets/icons/ios-share.svg",
    "revision": "2ee22a280001b528bdb2be03f4231065"
  },
  {
    "url": "assets/icons/ios-shirt.svg",
    "revision": "1aafaa3678d62815e76d4e9eb4ea1474"
  },
  {
    "url": "assets/icons/ios-shuffle.svg",
    "revision": "0910f6c47912d4475abd56c6e6cc90d2"
  },
  {
    "url": "assets/icons/ios-skip-backward.svg",
    "revision": "51698f0f29ae813db7374f158d0f4c8e"
  },
  {
    "url": "assets/icons/ios-skip-forward.svg",
    "revision": "294ae4af5e2ede037ee9175aa7a4bd3a"
  },
  {
    "url": "assets/icons/ios-snow.svg",
    "revision": "92a4e3d3f7f7b4286be6ed3932facc30"
  },
  {
    "url": "assets/icons/ios-speedometer.svg",
    "revision": "d5d1208ecd29d6ae11027d45f16cb916"
  },
  {
    "url": "assets/icons/ios-square-outline.svg",
    "revision": "3b9ed6b8c0d5de4f057f29bf740a5d74"
  },
  {
    "url": "assets/icons/ios-square.svg",
    "revision": "97ba6391d6057e9756d5450821fa21ee"
  },
  {
    "url": "assets/icons/ios-star-half.svg",
    "revision": "10c232a550207685092cf5ed177e90a9"
  },
  {
    "url": "assets/icons/ios-star-outline.svg",
    "revision": "8c2a81ab981403874e189027d440c8b7"
  },
  {
    "url": "assets/icons/ios-star.svg",
    "revision": "888a10f429f6e78bee516cba33084970"
  },
  {
    "url": "assets/icons/ios-stats.svg",
    "revision": "5c50eb745a92b4ba92caeb9bfde46d5a"
  },
  {
    "url": "assets/icons/ios-stopwatch.svg",
    "revision": "80ffdb5a26b854194b679e99b77c4122"
  },
  {
    "url": "assets/icons/ios-subway.svg",
    "revision": "dbaa4f93ca1f40b234a3ab8760d11333"
  },
  {
    "url": "assets/icons/ios-sunny.svg",
    "revision": "903d5882446e6a3c58377158665d2038"
  },
  {
    "url": "assets/icons/ios-swap.svg",
    "revision": "30199c2915991b80dfdd9c4accb19202"
  },
  {
    "url": "assets/icons/ios-switch.svg",
    "revision": "7964a85d0eb268afd0014bc325a888f2"
  },
  {
    "url": "assets/icons/ios-sync.svg",
    "revision": "ceac7fa0eff67cfe2d3a1328d894312e"
  },
  {
    "url": "assets/icons/ios-tablet-landscape.svg",
    "revision": "4e2abab47378ebd4cf3c37e90df0ac53"
  },
  {
    "url": "assets/icons/ios-tablet-portrait.svg",
    "revision": "264beb76c6f22fff4fd4ca11d318e2ae"
  },
  {
    "url": "assets/icons/ios-tennisball.svg",
    "revision": "90f525f4d76aa80394d8bfb7dd702a14"
  },
  {
    "url": "assets/icons/ios-text.svg",
    "revision": "fcba61decf5a502fa7731752fd074f23"
  },
  {
    "url": "assets/icons/ios-thermometer.svg",
    "revision": "2766e9785f930105cab1ec65cdfb9bf9"
  },
  {
    "url": "assets/icons/ios-thumbs-down.svg",
    "revision": "b219c33ba979504d6bf9f8a26765586d"
  },
  {
    "url": "assets/icons/ios-thumbs-up.svg",
    "revision": "2ff6053071c853401010bafb73da96c9"
  },
  {
    "url": "assets/icons/ios-thunderstorm.svg",
    "revision": "c1a8ae691d4a09c013b2a92bc633ff4c"
  },
  {
    "url": "assets/icons/ios-time.svg",
    "revision": "b5cb1ccc78418b3f57a6af645553eba1"
  },
  {
    "url": "assets/icons/ios-timer.svg",
    "revision": "855c1adaf0907e5bcc7b6c4de699e305"
  },
  {
    "url": "assets/icons/ios-today.svg",
    "revision": "1f543be644c5c623bf82450353adefaf"
  },
  {
    "url": "assets/icons/ios-train.svg",
    "revision": "4380cc35968c5ac5f31419c00e18759b"
  },
  {
    "url": "assets/icons/ios-transgender.svg",
    "revision": "42dc3990c4fcf8634078b1232138a93e"
  },
  {
    "url": "assets/icons/ios-trash.svg",
    "revision": "db21b1d46905ed608915f146f233c96a"
  },
  {
    "url": "assets/icons/ios-trending-down.svg",
    "revision": "4779f887943bb9883511584dd9be2aba"
  },
  {
    "url": "assets/icons/ios-trending-up.svg",
    "revision": "62221dbf47131865b228e39544d80552"
  },
  {
    "url": "assets/icons/ios-trophy.svg",
    "revision": "8652774a2e68b19d9b0df7a46a329514"
  },
  {
    "url": "assets/icons/ios-tv.svg",
    "revision": "5d99d64ef53f53080c2953a2f685f88f"
  },
  {
    "url": "assets/icons/ios-umbrella.svg",
    "revision": "6dad6cea7f4fe7870a9825a7746fd197"
  },
  {
    "url": "assets/icons/ios-undo.svg",
    "revision": "78a0209a699b5ef2d6c1c731497abaa4"
  },
  {
    "url": "assets/icons/ios-unlock.svg",
    "revision": "6bea5ff6aa96ad0fa268c63750311964"
  },
  {
    "url": "assets/icons/ios-videocam.svg",
    "revision": "26aac2c2edfb109f91268e9d554715d9"
  },
  {
    "url": "assets/icons/ios-volume-high.svg",
    "revision": "02fe717594e584f711139f1dd953bb8d"
  },
  {
    "url": "assets/icons/ios-volume-low.svg",
    "revision": "ab869121507f9c5ba6acd23b69fdc801"
  },
  {
    "url": "assets/icons/ios-volume-mute.svg",
    "revision": "d33487f8180f140876bd2a7ce94c4200"
  },
  {
    "url": "assets/icons/ios-volume-off.svg",
    "revision": "6eeb0286528edae450876c05be5b5b28"
  },
  {
    "url": "assets/icons/ios-walk.svg",
    "revision": "623106f7066e2612e13c9ab79d9ca3ed"
  },
  {
    "url": "assets/icons/ios-wallet.svg",
    "revision": "582388368f1c274b5527f5a79056e2d0"
  },
  {
    "url": "assets/icons/ios-warning.svg",
    "revision": "5b6710fd516d9bfa14a2d9eb62fdeb92"
  },
  {
    "url": "assets/icons/ios-watch.svg",
    "revision": "1efaa949b93a6a0b0029f6ca85254aa1"
  },
  {
    "url": "assets/icons/ios-water.svg",
    "revision": "ece0d54e2d841426029e801dc7d407f1"
  },
  {
    "url": "assets/icons/ios-wifi.svg",
    "revision": "3fbd5f8592ae11781541a1ee3a8232de"
  },
  {
    "url": "assets/icons/ios-wine.svg",
    "revision": "51dd0f9c323fdc9f617146637c6bd8a6"
  },
  {
    "url": "assets/icons/ios-woman.svg",
    "revision": "13b996c537e7bbf97cd1f1cd41907d72"
  },
  {
    "url": "assets/icons/logo-android.svg",
    "revision": "971a3e79695aead3c568e7d5084faba9"
  },
  {
    "url": "assets/icons/logo-angular.svg",
    "revision": "63134cfb7cc4833d7112e09618fc8a5a"
  },
  {
    "url": "assets/icons/logo-apple.svg",
    "revision": "6fdbaac03e9a8bb1ff04af40cb21e5eb"
  },
  {
    "url": "assets/icons/logo-bitbucket.svg",
    "revision": "9ff5a8a25e75592ea9be945dd77f8d5b"
  },
  {
    "url": "assets/icons/logo-bitcoin.svg",
    "revision": "95136fbe4a2669a8ca5d969da8a6f2c5"
  },
  {
    "url": "assets/icons/logo-buffer.svg",
    "revision": "f843ce770196935115428c0693b42b6a"
  },
  {
    "url": "assets/icons/logo-chrome.svg",
    "revision": "68591473f0165ed627fb77f9bf8a2b40"
  },
  {
    "url": "assets/icons/logo-closed-captioning.svg",
    "revision": "9e9d1040ed9e569cf4c8fe661b33c38b"
  },
  {
    "url": "assets/icons/logo-codepen.svg",
    "revision": "6cf6c5b1f589468ebd27b2eaa4c62033"
  },
  {
    "url": "assets/icons/logo-css3.svg",
    "revision": "8f6d15d223a75223c41914bfbf81bf4b"
  },
  {
    "url": "assets/icons/logo-designernews.svg",
    "revision": "556590b2609f2d7da7b681e7aaa71415"
  },
  {
    "url": "assets/icons/logo-dribbble.svg",
    "revision": "4be209403fe3a0f4f41ad6e97fb17589"
  },
  {
    "url": "assets/icons/logo-dropbox.svg",
    "revision": "4d55c441dfa6237778ad35ba14f39b48"
  },
  {
    "url": "assets/icons/logo-euro.svg",
    "revision": "cc4827c463852e5ae86f20ac11f2ab47"
  },
  {
    "url": "assets/icons/logo-facebook.svg",
    "revision": "49d302abba51beb713c653d56bb419a5"
  },
  {
    "url": "assets/icons/logo-flickr.svg",
    "revision": "156c7d9db0f2af4b278af6e5e054fa19"
  },
  {
    "url": "assets/icons/logo-foursquare.svg",
    "revision": "2c89411d7792fe906818dd242c6bf424"
  },
  {
    "url": "assets/icons/logo-freebsd-devil.svg",
    "revision": "a4e2b72d44b47f47213b5477b2a1d205"
  },
  {
    "url": "assets/icons/logo-game-controller-a.svg",
    "revision": "3e93aa65ce56331fd016fdb9ff92ca35"
  },
  {
    "url": "assets/icons/logo-game-controller-b.svg",
    "revision": "fbad43953e0013413fda69d2c33e8c5a"
  },
  {
    "url": "assets/icons/logo-github.svg",
    "revision": "4f47064557639675c1c1e84b96b0aab3"
  },
  {
    "url": "assets/icons/logo-google.svg",
    "revision": "56c4c3c87a2220b96266e23a0f9b4004"
  },
  {
    "url": "assets/icons/logo-googleplus.svg",
    "revision": "ceee7958378973e325990d259b14449b"
  },
  {
    "url": "assets/icons/logo-hackernews.svg",
    "revision": "cffe66764028fe923e0e436a5944c468"
  },
  {
    "url": "assets/icons/logo-html5.svg",
    "revision": "f8ef12e9e19819ff40db28d444146cf5"
  },
  {
    "url": "assets/icons/logo-instagram.svg",
    "revision": "058763dce3beae7a72dc50ef8ae3fe2b"
  },
  {
    "url": "assets/icons/logo-ionic.svg",
    "revision": "719d52b5374160f99211917e2125f56b"
  },
  {
    "url": "assets/icons/logo-ionitron.svg",
    "revision": "9b8c616769cd4e9491ae74d4be1c3afd"
  },
  {
    "url": "assets/icons/logo-javascript.svg",
    "revision": "79930b1ccadb9221a5cd14aece2868fd"
  },
  {
    "url": "assets/icons/logo-linkedin.svg",
    "revision": "e1613418cea60afab186ac7e5ec2264b"
  },
  {
    "url": "assets/icons/logo-markdown.svg",
    "revision": "bf3a7581bb0ed047d173d377333208dc"
  },
  {
    "url": "assets/icons/logo-model-s.svg",
    "revision": "32f05e99e0491bbc51e527d89be3a098"
  },
  {
    "url": "assets/icons/logo-no-smoking.svg",
    "revision": "2b7a451c5aa0d1afcf20e23da9afdc68"
  },
  {
    "url": "assets/icons/logo-nodejs.svg",
    "revision": "36e7f994d5539e6dccb12c2f9615e878"
  },
  {
    "url": "assets/icons/logo-npm.svg",
    "revision": "cae7ceae48f7f45d83784de1c41db490"
  },
  {
    "url": "assets/icons/logo-octocat.svg",
    "revision": "d4ab9b32979865b130d26a41028b2872"
  },
  {
    "url": "assets/icons/logo-pinterest.svg",
    "revision": "c2de72fc242c64bf790e7da0dd1e1e0c"
  },
  {
    "url": "assets/icons/logo-playstation.svg",
    "revision": "cc0feda6884dfc6e9272e96611c7035b"
  },
  {
    "url": "assets/icons/logo-polymer.svg",
    "revision": "f6a5624d2edca34a3d951b4c2b7230d1"
  },
  {
    "url": "assets/icons/logo-python.svg",
    "revision": "6dd2e192db6fd235f1db606d7e599cc2"
  },
  {
    "url": "assets/icons/logo-reddit.svg",
    "revision": "462b208b052a9251a5e1efff577bc690"
  },
  {
    "url": "assets/icons/logo-rss.svg",
    "revision": "2f99827be46388191f18f7be1f2268ca"
  },
  {
    "url": "assets/icons/logo-sass.svg",
    "revision": "60eb4bd22419be478bada0c32e640193"
  },
  {
    "url": "assets/icons/logo-skype.svg",
    "revision": "c9dbc8eae914e21f01535b6898911b67"
  },
  {
    "url": "assets/icons/logo-slack.svg",
    "revision": "3abe2556ba4c5ce8375df0ceed3cf701"
  },
  {
    "url": "assets/icons/logo-snapchat.svg",
    "revision": "60781c2a1dc0b3b155214d75164dfd67"
  },
  {
    "url": "assets/icons/logo-steam.svg",
    "revision": "207aa1c13a8da57b7cec87b883cc6875"
  },
  {
    "url": "assets/icons/logo-tumblr.svg",
    "revision": "c5b1db8fd75c4c0dc4f934b812316752"
  },
  {
    "url": "assets/icons/logo-tux.svg",
    "revision": "dd591855e8ea5232af18225835f6a0e0"
  },
  {
    "url": "assets/icons/logo-twitch.svg",
    "revision": "231d8af80f3957689115714d4711a48a"
  },
  {
    "url": "assets/icons/logo-twitter.svg",
    "revision": "9c8900643d6828311fef0f3b0545bb5e"
  },
  {
    "url": "assets/icons/logo-usd.svg",
    "revision": "cbb5da556a9c7a133eb94a92ac20299c"
  },
  {
    "url": "assets/icons/logo-vimeo.svg",
    "revision": "cbf3689bb00741441ce7e7ba80a70db5"
  },
  {
    "url": "assets/icons/logo-vk.svg",
    "revision": "50bdf5ef0f69b70ac5d987353012a62e"
  },
  {
    "url": "assets/icons/logo-whatsapp.svg",
    "revision": "14f071c351af0c09aed5c36327713c11"
  },
  {
    "url": "assets/icons/logo-windows.svg",
    "revision": "f5b4e2ee336f94fda57f7ae095c25150"
  },
  {
    "url": "assets/icons/logo-wordpress.svg",
    "revision": "6afb5d380cfdb402dda4d13a03deb8fc"
  },
  {
    "url": "assets/icons/logo-xbox.svg",
    "revision": "ec47dbddc0b3a1a965507798c2312603"
  },
  {
    "url": "assets/icons/logo-xing.svg",
    "revision": "a9882eea7d287c0b873c9b23c800fc98"
  },
  {
    "url": "assets/icons/logo-yahoo.svg",
    "revision": "838c26b4fade01cd2e2dee1fca646504"
  },
  {
    "url": "assets/icons/logo-yen.svg",
    "revision": "b366bcfa92a768f61f9b0f56baccfad4"
  },
  {
    "url": "assets/icons/logo-youtube.svg",
    "revision": "e13651fb826e8ee48af66fc640d001c4"
  },
  {
    "url": "assets/icons/md-add-circle-outline.svg",
    "revision": "d1e087f70dd034acc0fe26237f5ceb0c"
  },
  {
    "url": "assets/icons/md-add-circle.svg",
    "revision": "a387313b905404aedaa6fdb9d334e2c0"
  },
  {
    "url": "assets/icons/md-add.svg",
    "revision": "639fe73cfbf28b6d27958e5a5a78759f"
  },
  {
    "url": "assets/icons/md-airplane.svg",
    "revision": "45e791560989faf5e8011634e8ba0972"
  },
  {
    "url": "assets/icons/md-alarm.svg",
    "revision": "419ab22455f46fa03f333683c9d08c92"
  },
  {
    "url": "assets/icons/md-albums.svg",
    "revision": "e934ab9126a7a4700d3d6e4054c53d1f"
  },
  {
    "url": "assets/icons/md-alert.svg",
    "revision": "2b803dda5b3c6be840ffd34f4d840cb5"
  },
  {
    "url": "assets/icons/md-american-football.svg",
    "revision": "a25dc6de228079691e3f5ea404d6adb9"
  },
  {
    "url": "assets/icons/md-analytics.svg",
    "revision": "c81f9c6e4120d82cc611114ebec5a74b"
  },
  {
    "url": "assets/icons/md-aperture.svg",
    "revision": "e66c8ce330cb554cf1a8f98b0ae6d921"
  },
  {
    "url": "assets/icons/md-apps.svg",
    "revision": "214152e7dffdbb7519ef39bdc55bf747"
  },
  {
    "url": "assets/icons/md-appstore.svg",
    "revision": "1c8f408a4cfaa5e29986aa18004f1a52"
  },
  {
    "url": "assets/icons/md-archive.svg",
    "revision": "c19c7e20b79879d7b1fce81741e27d26"
  },
  {
    "url": "assets/icons/md-arrow-back.svg",
    "revision": "64d4ff7fe87c20feec20c33543bf9b8f"
  },
  {
    "url": "assets/icons/md-arrow-down.svg",
    "revision": "4bc1abf2f3dc9d6fe49472e310d527e4"
  },
  {
    "url": "assets/icons/md-arrow-dropdown-circle.svg",
    "revision": "a8e4e07da8ef86059e4cdbdb6d57274a"
  },
  {
    "url": "assets/icons/md-arrow-dropdown.svg",
    "revision": "45a8de2b2b17e88ef479914d7f2df29a"
  },
  {
    "url": "assets/icons/md-arrow-dropleft-circle.svg",
    "revision": "070a9a0f2afee02fca669c31afc9d347"
  },
  {
    "url": "assets/icons/md-arrow-dropleft.svg",
    "revision": "8b790e9a181a7056df71ffd22338cf58"
  },
  {
    "url": "assets/icons/md-arrow-dropright-circle.svg",
    "revision": "dbef68d55d67d98066bf4c89391753d2"
  },
  {
    "url": "assets/icons/md-arrow-dropright.svg",
    "revision": "a27690f8f0afd660809f40c3cc1784f4"
  },
  {
    "url": "assets/icons/md-arrow-dropup-circle.svg",
    "revision": "0d3c8e51d43a4d119bad80d0fc8cb7cb"
  },
  {
    "url": "assets/icons/md-arrow-dropup.svg",
    "revision": "91108cdd4cbcd6efa5f56ead7c64eadb"
  },
  {
    "url": "assets/icons/md-arrow-forward.svg",
    "revision": "1c6d07ad3d1238ae07ddc53cf5ffb783"
  },
  {
    "url": "assets/icons/md-arrow-round-back.svg",
    "revision": "b99dcc1d7f40d68d51896da522532711"
  },
  {
    "url": "assets/icons/md-arrow-round-down.svg",
    "revision": "3b7ec24930335128b795c4e1e57c5df4"
  },
  {
    "url": "assets/icons/md-arrow-round-forward.svg",
    "revision": "ddd54ca9250ce7a04deae403fc7d8057"
  },
  {
    "url": "assets/icons/md-arrow-round-up.svg",
    "revision": "82256faefcee6de84cd5170b0067dffc"
  },
  {
    "url": "assets/icons/md-arrow-up.svg",
    "revision": "1bb12ac43acdc5ecb13b266531029391"
  },
  {
    "url": "assets/icons/md-at.svg",
    "revision": "4db472a2328045056799fe589963c558"
  },
  {
    "url": "assets/icons/md-attach.svg",
    "revision": "61375d46df862eadef1ae636251f9d12"
  },
  {
    "url": "assets/icons/md-backspace.svg",
    "revision": "7eac9e5ee6c1dac35a87b5d4cdd1e0e3"
  },
  {
    "url": "assets/icons/md-barcode.svg",
    "revision": "e38f231ee319ec61c7c10da266718487"
  },
  {
    "url": "assets/icons/md-baseball.svg",
    "revision": "bb1f6005311dbc1d0fccebb011b5a90d"
  },
  {
    "url": "assets/icons/md-basket.svg",
    "revision": "6bbc52dad86657d4d9d26cac8729b693"
  },
  {
    "url": "assets/icons/md-basketball.svg",
    "revision": "7ed13ddd1cb4497d492422b0ee16b79f"
  },
  {
    "url": "assets/icons/md-battery-charging.svg",
    "revision": "dc0126fe87fa4307760c23d722682e10"
  },
  {
    "url": "assets/icons/md-battery-dead.svg",
    "revision": "707fd426e4927e859e074eb3c37ad2f8"
  },
  {
    "url": "assets/icons/md-battery-full.svg",
    "revision": "573bd14c8a620450363f94a0f273fc6f"
  },
  {
    "url": "assets/icons/md-beaker.svg",
    "revision": "02fd9c06ba032c007ba3741c879771f5"
  },
  {
    "url": "assets/icons/md-bed.svg",
    "revision": "17431f879ec229fa588961192e03525d"
  },
  {
    "url": "assets/icons/md-beer.svg",
    "revision": "c1056a54c30386c0f7c4fee38cd79f86"
  },
  {
    "url": "assets/icons/md-bicycle.svg",
    "revision": "f0021d235ebea3d07720d829e0007243"
  },
  {
    "url": "assets/icons/md-bluetooth.svg",
    "revision": "99453b84b535008b39c5751d06d121bb"
  },
  {
    "url": "assets/icons/md-boat.svg",
    "revision": "dcc2418c26341e84631a9751fa9e846d"
  },
  {
    "url": "assets/icons/md-body.svg",
    "revision": "0816072f332f59878594df9ad5fcd219"
  },
  {
    "url": "assets/icons/md-bonfire.svg",
    "revision": "54aeddc1a57978943826631869ecb528"
  },
  {
    "url": "assets/icons/md-book.svg",
    "revision": "55f13f9a73a85f3a29ca01d244a0b8cf"
  },
  {
    "url": "assets/icons/md-bookmark.svg",
    "revision": "2852adc55d912d585fcfcc4058e09801"
  },
  {
    "url": "assets/icons/md-bookmarks.svg",
    "revision": "f6881ec1e36f2f26a67ec081eca0031d"
  },
  {
    "url": "assets/icons/md-bowtie.svg",
    "revision": "451326fbe813c561c5f4c66b40005558"
  },
  {
    "url": "assets/icons/md-briefcase.svg",
    "revision": "1649793c8da177baeef563fe72f3a196"
  },
  {
    "url": "assets/icons/md-browsers.svg",
    "revision": "27616fcd83a0e64f46bb9e53aeecb935"
  },
  {
    "url": "assets/icons/md-brush.svg",
    "revision": "de48125eb1d653383a6f040a78258c4f"
  },
  {
    "url": "assets/icons/md-bug.svg",
    "revision": "d97a94caeed06c2704016677d2d1f198"
  },
  {
    "url": "assets/icons/md-build.svg",
    "revision": "7831949068e395254ab6f200347203af"
  },
  {
    "url": "assets/icons/md-bulb.svg",
    "revision": "3565c56952f875c29fdf6b37d6e2ced0"
  },
  {
    "url": "assets/icons/md-bus.svg",
    "revision": "924a33025d5fda33f29aed20bfe39719"
  },
  {
    "url": "assets/icons/md-business.svg",
    "revision": "95d7386ecbde1774322c2c38c4520921"
  },
  {
    "url": "assets/icons/md-cafe.svg",
    "revision": "ee8c8801adbd8d6f00c0aaa14dae8149"
  },
  {
    "url": "assets/icons/md-calculator.svg",
    "revision": "8ec4c5ba72d0a603f237b0a23a1edd42"
  },
  {
    "url": "assets/icons/md-calendar.svg",
    "revision": "5f07792be9da769b29a7a6ea117e38bc"
  },
  {
    "url": "assets/icons/md-call.svg",
    "revision": "69d187bdd7bcca174d287b704c22ff24"
  },
  {
    "url": "assets/icons/md-camera.svg",
    "revision": "4182f521f158c6944d46e1c27aed2709"
  },
  {
    "url": "assets/icons/md-car.svg",
    "revision": "a37ba2551c72f37e2d8fff4b20ee49f3"
  },
  {
    "url": "assets/icons/md-card.svg",
    "revision": "e1cae1f3a06d8d6586ce2ba711b24d08"
  },
  {
    "url": "assets/icons/md-cart.svg",
    "revision": "2c4718a4f67355532515f11b4752fdc5"
  },
  {
    "url": "assets/icons/md-cash.svg",
    "revision": "d1583e47f1c09d3a1d86626c53d01dfb"
  },
  {
    "url": "assets/icons/md-cellular.svg",
    "revision": "33e57eb960e5d59bd70c6fb167097c5f"
  },
  {
    "url": "assets/icons/md-chatboxes.svg",
    "revision": "efb5cb2b93fd86d5ab4889db996e0df2"
  },
  {
    "url": "assets/icons/md-chatbubbles.svg",
    "revision": "775d060b4a319b3debadf5ea5d2f5425"
  },
  {
    "url": "assets/icons/md-checkbox-outline.svg",
    "revision": "fd6ec0b9c860adb4f3719a878ba5ee49"
  },
  {
    "url": "assets/icons/md-checkbox.svg",
    "revision": "7bfcf66dcec5f72e2528a3ff2adc40bb"
  },
  {
    "url": "assets/icons/md-checkmark-circle-outline.svg",
    "revision": "eaa16566707ed83ea00890703599874e"
  },
  {
    "url": "assets/icons/md-checkmark-circle.svg",
    "revision": "17eeeb2dd50342ac7cb70d2efe461d03"
  },
  {
    "url": "assets/icons/md-checkmark.svg",
    "revision": "b9c14acd2a4f4ba7224bbbb4177da8fa"
  },
  {
    "url": "assets/icons/md-clipboard.svg",
    "revision": "9e61207a7c1e390d85f631c40071cb30"
  },
  {
    "url": "assets/icons/md-clock.svg",
    "revision": "f94a4b924e3f62793d73cd8084ba0105"
  },
  {
    "url": "assets/icons/md-close-circle-outline.svg",
    "revision": "f95a2d6ef60a63404e3fa8a2ad7049c3"
  },
  {
    "url": "assets/icons/md-close-circle.svg",
    "revision": "d23742b6d9a4b202a4bdadb093c12720"
  },
  {
    "url": "assets/icons/md-close.svg",
    "revision": "5297827c7273e30a8e79648c3a7e0c92"
  },
  {
    "url": "assets/icons/md-cloud-circle.svg",
    "revision": "1adcc9ad23576a745bb51edac0ad91b8"
  },
  {
    "url": "assets/icons/md-cloud-done.svg",
    "revision": "8286b1a7d128161bbe9adf58197a03f2"
  },
  {
    "url": "assets/icons/md-cloud-download.svg",
    "revision": "84e042d750662428b509d4249b84ae97"
  },
  {
    "url": "assets/icons/md-cloud-outline.svg",
    "revision": "2e27fe73a27cd7144b20cf4a16476d91"
  },
  {
    "url": "assets/icons/md-cloud-upload.svg",
    "revision": "8cba13202152ee44cc46e133d70588a1"
  },
  {
    "url": "assets/icons/md-cloud.svg",
    "revision": "869fa2434a02262a661c0c98d90b2c20"
  },
  {
    "url": "assets/icons/md-cloudy-night.svg",
    "revision": "e642bdac8c42d55bd5b4157e02ec04ae"
  },
  {
    "url": "assets/icons/md-cloudy.svg",
    "revision": "bf965abdb582cd5f1f8b6caecb39b63c"
  },
  {
    "url": "assets/icons/md-code-download.svg",
    "revision": "d7b48bdbfc95c4231e69d8127861919c"
  },
  {
    "url": "assets/icons/md-code-working.svg",
    "revision": "3b86a0590e5c496baadcccf922e127e7"
  },
  {
    "url": "assets/icons/md-code.svg",
    "revision": "49110e3c42cbda0882a3310a1567f483"
  },
  {
    "url": "assets/icons/md-cog.svg",
    "revision": "a3be8610c91f687272e9b76ad4129348"
  },
  {
    "url": "assets/icons/md-color-fill.svg",
    "revision": "2f6196b4cfd4f657270ae7c31f9be07c"
  },
  {
    "url": "assets/icons/md-color-filter.svg",
    "revision": "db2eeb202d744fc208c4487c3491cf4c"
  },
  {
    "url": "assets/icons/md-color-palette.svg",
    "revision": "9be9517fcae60eb93bfc51122a716021"
  },
  {
    "url": "assets/icons/md-color-wand.svg",
    "revision": "16e7faa98079256af20030855404b383"
  },
  {
    "url": "assets/icons/md-compass.svg",
    "revision": "95e209fd57137492abb7ce92572703eb"
  },
  {
    "url": "assets/icons/md-construct.svg",
    "revision": "6ac5eab9dced0a4bf6167b2d1256ede3"
  },
  {
    "url": "assets/icons/md-contact.svg",
    "revision": "65951140cd327f6b4624555331116cbb"
  },
  {
    "url": "assets/icons/md-contacts.svg",
    "revision": "2dcc5bb585f9be1c031d5958d1789f8d"
  },
  {
    "url": "assets/icons/md-contract.svg",
    "revision": "0a75ee87d0dabbe30bdc5c5b2b08b063"
  },
  {
    "url": "assets/icons/md-contrast.svg",
    "revision": "519e437c8fd02b6f7350eda3b2aa575d"
  },
  {
    "url": "assets/icons/md-copy.svg",
    "revision": "90d6843c0e778b091b1bae30ed5dd89c"
  },
  {
    "url": "assets/icons/md-create.svg",
    "revision": "31fceef6c25d6579a117a28ffecfb513"
  },
  {
    "url": "assets/icons/md-crop.svg",
    "revision": "8ad440f0375ea2993bcebd6c2aea1cfe"
  },
  {
    "url": "assets/icons/md-cube.svg",
    "revision": "bff7b5dee4d93452ebb912aefb21176a"
  },
  {
    "url": "assets/icons/md-cut.svg",
    "revision": "d90ee1dbdfc5650695d24f892ddc5d9e"
  },
  {
    "url": "assets/icons/md-desktop.svg",
    "revision": "7777827403a70c90f7b13b30183f92de"
  },
  {
    "url": "assets/icons/md-disc.svg",
    "revision": "9ad0cb81c4550aecc2ac1646a9dd5743"
  },
  {
    "url": "assets/icons/md-document.svg",
    "revision": "3a4ceee5c5987e7f1935748497917d3a"
  },
  {
    "url": "assets/icons/md-done-all.svg",
    "revision": "d0edb4b26cb0a97787b50bf27a5360b2"
  },
  {
    "url": "assets/icons/md-download.svg",
    "revision": "3b72a7713b0f25efed5594ea8e08a781"
  },
  {
    "url": "assets/icons/md-easel.svg",
    "revision": "5ba3bcdaddd5e4fccbf4e592da0a31aa"
  },
  {
    "url": "assets/icons/md-egg.svg",
    "revision": "e6cde9b90df7fdff748cf13adce64685"
  },
  {
    "url": "assets/icons/md-exit.svg",
    "revision": "065f3246ed3e7c649f81ba5820de5605"
  },
  {
    "url": "assets/icons/md-expand.svg",
    "revision": "1a78877b7b625c3b437813255263345e"
  },
  {
    "url": "assets/icons/md-eye-off.svg",
    "revision": "63c8758ac97e80ac203ce480ab6fe48f"
  },
  {
    "url": "assets/icons/md-eye.svg",
    "revision": "bfbd68d8b6450691b259e0d58d7d5ded"
  },
  {
    "url": "assets/icons/md-fastforward.svg",
    "revision": "9e9eebe89394223cfe3037555b65f1bf"
  },
  {
    "url": "assets/icons/md-female.svg",
    "revision": "240ecdf80a69614cf6bd00434a648adb"
  },
  {
    "url": "assets/icons/md-filing.svg",
    "revision": "35a2020d2b343745a85abf22230d88ac"
  },
  {
    "url": "assets/icons/md-film.svg",
    "revision": "b98430a3fb784f781feb7ebf883c6ad7"
  },
  {
    "url": "assets/icons/md-finger-print.svg",
    "revision": "a8c3a0c6f739abf37137d9c97159e9cc"
  },
  {
    "url": "assets/icons/md-fitness.svg",
    "revision": "169bb3c2181496d21b02aa7203ebabee"
  },
  {
    "url": "assets/icons/md-flag.svg",
    "revision": "e699778cdff831b70959e34ed0c845a0"
  },
  {
    "url": "assets/icons/md-flame.svg",
    "revision": "e77a5fd679d51a065bfe191b1c40c90f"
  },
  {
    "url": "assets/icons/md-flash-off.svg",
    "revision": "21bd0ba6963d0236854b801efd8c9733"
  },
  {
    "url": "assets/icons/md-flash.svg",
    "revision": "f65b42d5224e071dfdda58f86d32e091"
  },
  {
    "url": "assets/icons/md-flashlight.svg",
    "revision": "97db5a4477c0e38ed292eeb46c6a2a1c"
  },
  {
    "url": "assets/icons/md-flask.svg",
    "revision": "2e009840f6a42c034adcdf9aec611a1e"
  },
  {
    "url": "assets/icons/md-flower.svg",
    "revision": "fec814130eff0221662399b96b11e856"
  },
  {
    "url": "assets/icons/md-folder-open.svg",
    "revision": "45a5aefa4438d7675bc70dbe04a2629c"
  },
  {
    "url": "assets/icons/md-folder.svg",
    "revision": "0230ca79da3e006855f85a3b52edd06a"
  },
  {
    "url": "assets/icons/md-football.svg",
    "revision": "9a95aa0874b22c132031ee35b733865f"
  },
  {
    "url": "assets/icons/md-funnel.svg",
    "revision": "e5275b0af53ef293d35b0800a3808630"
  },
  {
    "url": "assets/icons/md-gift.svg",
    "revision": "9857122863273479b5806c73237045bb"
  },
  {
    "url": "assets/icons/md-git-branch.svg",
    "revision": "4fafcc4efdc2ccc0f817f876e556306c"
  },
  {
    "url": "assets/icons/md-git-commit.svg",
    "revision": "636fdfb39f8796e59a60671971b374d1"
  },
  {
    "url": "assets/icons/md-git-compare.svg",
    "revision": "1d275acaadfcf789a3790786a3105378"
  },
  {
    "url": "assets/icons/md-git-merge.svg",
    "revision": "17e91d253453eb1b1ead11236a485b24"
  },
  {
    "url": "assets/icons/md-git-network.svg",
    "revision": "1a09dafa29c9c2a24d9c664bba062cf9"
  },
  {
    "url": "assets/icons/md-git-pull-request.svg",
    "revision": "b31c08c270d7d11abbb6a8533b3c24dc"
  },
  {
    "url": "assets/icons/md-glasses.svg",
    "revision": "d832addd11b6a949071ffc47f3765b35"
  },
  {
    "url": "assets/icons/md-globe.svg",
    "revision": "25f61fbbf25b0c14b6530ae064f1b8cf"
  },
  {
    "url": "assets/icons/md-grid.svg",
    "revision": "f635a55a824df275b94030bd652e8c0d"
  },
  {
    "url": "assets/icons/md-hammer.svg",
    "revision": "87c686e1acdbba5877af7e709b2534fa"
  },
  {
    "url": "assets/icons/md-hand.svg",
    "revision": "1b15d13c783db1746ee0756d7b7775d8"
  },
  {
    "url": "assets/icons/md-happy.svg",
    "revision": "02c58e1e107efaf0b39519b93d2f32d9"
  },
  {
    "url": "assets/icons/md-headset.svg",
    "revision": "4711242a5f84f926e5306f1700af0c6a"
  },
  {
    "url": "assets/icons/md-heart-dislike.svg",
    "revision": "5105758ee4d0036d9a20ac58fbddb257"
  },
  {
    "url": "assets/icons/md-heart-empty.svg",
    "revision": "75b8915a025d4321863712463f16f2f6"
  },
  {
    "url": "assets/icons/md-heart-half.svg",
    "revision": "33ad429de7a6b335f22422dd9a8c2397"
  },
  {
    "url": "assets/icons/md-heart.svg",
    "revision": "63281edbe619b11057428a2a1a0dd4e3"
  },
  {
    "url": "assets/icons/md-help-buoy.svg",
    "revision": "625c7769649891d5911143fdaa51473a"
  },
  {
    "url": "assets/icons/md-help-circle-outline.svg",
    "revision": "1add4845d1ceaa50e53de40459c58e35"
  },
  {
    "url": "assets/icons/md-help-circle.svg",
    "revision": "cc123579e8c9c083e5cc2fb0831d5a1a"
  },
  {
    "url": "assets/icons/md-help.svg",
    "revision": "4f5d6aaf8abbfe69d4380433b75e0337"
  },
  {
    "url": "assets/icons/md-home.svg",
    "revision": "3d60dacbd658d84f18d828443bf69e89"
  },
  {
    "url": "assets/icons/md-hourglass.svg",
    "revision": "34659cd13a63e62459d0a4ea07d8ece3"
  },
  {
    "url": "assets/icons/md-ice-cream.svg",
    "revision": "bf50243c3e08724c9850ed1a715b4ab9"
  },
  {
    "url": "assets/icons/md-image.svg",
    "revision": "f0b632d63a715a63a03ba4cec366918b"
  },
  {
    "url": "assets/icons/md-images.svg",
    "revision": "6ef2c46a0e99ad68bbd052fa6fdecd39"
  },
  {
    "url": "assets/icons/md-infinite.svg",
    "revision": "8288e1fe32c0e05b33d0b6d116e95025"
  },
  {
    "url": "assets/icons/md-information-circle-outline.svg",
    "revision": "c6d01d850985dafa111686c9e800032e"
  },
  {
    "url": "assets/icons/md-information-circle.svg",
    "revision": "66efdc35c8eccd1e8452001726e7c540"
  },
  {
    "url": "assets/icons/md-information.svg",
    "revision": "3cb29b374a297dd468dcc4749e813381"
  },
  {
    "url": "assets/icons/md-jet.svg",
    "revision": "c98409536b50936b1a5d110c7df38d4b"
  },
  {
    "url": "assets/icons/md-journal.svg",
    "revision": "04aeb9d29cfffb0d0f6c04311e9ed8e4"
  },
  {
    "url": "assets/icons/md-key.svg",
    "revision": "2d4034197d2853e7d1d6c6183aa0a494"
  },
  {
    "url": "assets/icons/md-keypad.svg",
    "revision": "fa24f9217f8ebd939c53eee391272b64"
  },
  {
    "url": "assets/icons/md-laptop.svg",
    "revision": "362c0b6b162eb66c187300ae76482b62"
  },
  {
    "url": "assets/icons/md-leaf.svg",
    "revision": "db30e72bfd16ad9efdeafadbb6679c90"
  },
  {
    "url": "assets/icons/md-link.svg",
    "revision": "49bd307cfb33a51e031c131fb6d0843e"
  },
  {
    "url": "assets/icons/md-list-box.svg",
    "revision": "70b4cdee8dd5bf82ca4a92f12544cebd"
  },
  {
    "url": "assets/icons/md-list.svg",
    "revision": "2a288b6965fc71d7149379942e86e373"
  },
  {
    "url": "assets/icons/md-locate.svg",
    "revision": "5f40ed9764814150662ade10af0179b0"
  },
  {
    "url": "assets/icons/md-lock.svg",
    "revision": "df9fb5750a742bedc6d6b697dcfa0acd"
  },
  {
    "url": "assets/icons/md-log-in.svg",
    "revision": "bc6977ed7420180ca1fe9ae0f919e9f9"
  },
  {
    "url": "assets/icons/md-log-out.svg",
    "revision": "3872eaf4d56600e7d364724d1c880792"
  },
  {
    "url": "assets/icons/md-magnet.svg",
    "revision": "bbec81a007f7e3daf1dba9b41c12053e"
  },
  {
    "url": "assets/icons/md-mail-open.svg",
    "revision": "9d46df580978de935ef0b66478a90148"
  },
  {
    "url": "assets/icons/md-mail-unread.svg",
    "revision": "49dfcd85cab92f2a10f6478a45c9cdd7"
  },
  {
    "url": "assets/icons/md-mail.svg",
    "revision": "e3637d4ed64e70c87dcdbd9edd0143a3"
  },
  {
    "url": "assets/icons/md-male.svg",
    "revision": "38298052102754b1eaaf7788ac5a3f86"
  },
  {
    "url": "assets/icons/md-man.svg",
    "revision": "8a7ebbdfd671c46d6e9d9cd960925071"
  },
  {
    "url": "assets/icons/md-map.svg",
    "revision": "7920378ce5cecafd86d8b9baec3635da"
  },
  {
    "url": "assets/icons/md-medal.svg",
    "revision": "2f4355c5442e7f60774471cab1255dfa"
  },
  {
    "url": "assets/icons/md-medical.svg",
    "revision": "7185e8eab2d2ee084361fd4681425b5f"
  },
  {
    "url": "assets/icons/md-medkit.svg",
    "revision": "cf2ff2e469c710116889750a497020f4"
  },
  {
    "url": "assets/icons/md-megaphone.svg",
    "revision": "39a3f557166a892c54ace2dbd2b568ab"
  },
  {
    "url": "assets/icons/md-menu.svg",
    "revision": "6550e5c3323fef60e4bfac53a4cc686f"
  },
  {
    "url": "assets/icons/md-mic-off.svg",
    "revision": "c14cb8c836e6aece7625ae40d6b237b8"
  },
  {
    "url": "assets/icons/md-mic.svg",
    "revision": "f387da2017b937ce5ad0294a2bd1e41b"
  },
  {
    "url": "assets/icons/md-microphone.svg",
    "revision": "dad633b55a8971bf5adfd23e5274beb5"
  },
  {
    "url": "assets/icons/md-moon.svg",
    "revision": "dd0ed399ab6e3ec41e6df75f0af0ede7"
  },
  {
    "url": "assets/icons/md-more.svg",
    "revision": "bf93098e34a2eb7d59f600b0b8314984"
  },
  {
    "url": "assets/icons/md-move.svg",
    "revision": "cf64be0618b362ea2e76a1d3741b0b39"
  },
  {
    "url": "assets/icons/md-musical-note.svg",
    "revision": "9843f61a3a7c8f12a11d82ae2f7c57d3"
  },
  {
    "url": "assets/icons/md-musical-notes.svg",
    "revision": "d3f0b02f0c2d1025c50d39d1ff15f6b9"
  },
  {
    "url": "assets/icons/md-navigate.svg",
    "revision": "31e3ada163f04f89217b063361f58f46"
  },
  {
    "url": "assets/icons/md-notifications-off.svg",
    "revision": "0d24a34a3a904d99c03c6a36f7826677"
  },
  {
    "url": "assets/icons/md-notifications-outline.svg",
    "revision": "8557822723c58c4cf3064ef70eafc315"
  },
  {
    "url": "assets/icons/md-notifications.svg",
    "revision": "950bee434a8d17f1725388db3d7b6d35"
  },
  {
    "url": "assets/icons/md-nuclear.svg",
    "revision": "22b4947869b8d6315d840bd43d3ebb04"
  },
  {
    "url": "assets/icons/md-nutrition.svg",
    "revision": "2096ecad8e601b71e971ea56c4cb2828"
  },
  {
    "url": "assets/icons/md-open.svg",
    "revision": "40613d31ceb7da817c55b8837feaae24"
  },
  {
    "url": "assets/icons/md-options.svg",
    "revision": "369225ad0888f5445dbfd0e08335eca1"
  },
  {
    "url": "assets/icons/md-outlet.svg",
    "revision": "23f80e833818fbb8ee9b9e01c2c2279a"
  },
  {
    "url": "assets/icons/md-paper-plane.svg",
    "revision": "af2259247855dd2e4f92cfea45cc209b"
  },
  {
    "url": "assets/icons/md-paper.svg",
    "revision": "374baffa36a096efcb71d4d731b67d18"
  },
  {
    "url": "assets/icons/md-partly-sunny.svg",
    "revision": "fd8d80b6862072917299fcc55cf9d4cf"
  },
  {
    "url": "assets/icons/md-pause.svg",
    "revision": "b00a36d685be70424c9253e3037ad2ae"
  },
  {
    "url": "assets/icons/md-paw.svg",
    "revision": "cd3cdb15728749544ab2b837e2c5c1c0"
  },
  {
    "url": "assets/icons/md-people.svg",
    "revision": "442f27d3a2cf2d08ff3dfd5020035292"
  },
  {
    "url": "assets/icons/md-person-add.svg",
    "revision": "0f7770b58eb0aeb99ef9af96fc035110"
  },
  {
    "url": "assets/icons/md-person.svg",
    "revision": "762bc5e979694dbb5f75a0e093e47d32"
  },
  {
    "url": "assets/icons/md-phone-landscape.svg",
    "revision": "eaac0cf386a9a13f5004da9e29218a46"
  },
  {
    "url": "assets/icons/md-phone-portrait.svg",
    "revision": "dcc40359d09a080a3f162b63f8e21fa8"
  },
  {
    "url": "assets/icons/md-photos.svg",
    "revision": "4d7fd7737a3fce75b121107dc3ed48f2"
  },
  {
    "url": "assets/icons/md-pie.svg",
    "revision": "fdc0c593337af55059e1f0dbb1d30172"
  },
  {
    "url": "assets/icons/md-pin.svg",
    "revision": "9803085df8c88c50949fe6b49abad212"
  },
  {
    "url": "assets/icons/md-pint.svg",
    "revision": "1c102304b1f59ccee500fedac28b4f14"
  },
  {
    "url": "assets/icons/md-pizza.svg",
    "revision": "99fff5655cb647fb9577e08ad71503c5"
  },
  {
    "url": "assets/icons/md-planet.svg",
    "revision": "20b9b8cc6ee8aedd6664b4c5ab040193"
  },
  {
    "url": "assets/icons/md-play-circle.svg",
    "revision": "9063272ed17dc944dac92bd4853a4692"
  },
  {
    "url": "assets/icons/md-play.svg",
    "revision": "29025f4603cfd3fa885848dda9b2365d"
  },
  {
    "url": "assets/icons/md-podium.svg",
    "revision": "36fb20188fa3130a09af0b42d854f4c9"
  },
  {
    "url": "assets/icons/md-power.svg",
    "revision": "47b111d630add5d16b226431efeab840"
  },
  {
    "url": "assets/icons/md-pricetag.svg",
    "revision": "c39be18701e59057e636e093d329a70d"
  },
  {
    "url": "assets/icons/md-pricetags.svg",
    "revision": "1edd15c96f5919247bda4f938fcac660"
  },
  {
    "url": "assets/icons/md-print.svg",
    "revision": "85f51e069fddf6e8d6e9b1b6b6f142ce"
  },
  {
    "url": "assets/icons/md-pulse.svg",
    "revision": "2107f85c79d538414671fb9e28bd3647"
  },
  {
    "url": "assets/icons/md-qr-scanner.svg",
    "revision": "4c76127144c5a209414afe4600541a8d"
  },
  {
    "url": "assets/icons/md-quote.svg",
    "revision": "dd5dba0f7f8894465c0181bfa8dd8b27"
  },
  {
    "url": "assets/icons/md-radio-button-off.svg",
    "revision": "6a38452d59854ac406c103e87928a41c"
  },
  {
    "url": "assets/icons/md-radio-button-on.svg",
    "revision": "b4a2f27c244a9182cf07f1e315b83308"
  },
  {
    "url": "assets/icons/md-radio.svg",
    "revision": "0c1706717c942318675719cbfdd5bebb"
  },
  {
    "url": "assets/icons/md-rainy.svg",
    "revision": "0067efb4400c22cfd1e14e7648ae5c83"
  },
  {
    "url": "assets/icons/md-recording.svg",
    "revision": "e013b557bfda06427790c5ce5b5833db"
  },
  {
    "url": "assets/icons/md-redo.svg",
    "revision": "6983c011d83db95045ccddc6b4e4e239"
  },
  {
    "url": "assets/icons/md-refresh-circle.svg",
    "revision": "77342c154e96b0f2d88eabb82ee3f46c"
  },
  {
    "url": "assets/icons/md-refresh.svg",
    "revision": "c8866ba56b39ea8c258e6a4889951899"
  },
  {
    "url": "assets/icons/md-remove-circle-outline.svg",
    "revision": "f281ccec222c4453906b650bc489bf5e"
  },
  {
    "url": "assets/icons/md-remove-circle.svg",
    "revision": "98e9409464f644767d93aa3b750698bd"
  },
  {
    "url": "assets/icons/md-remove.svg",
    "revision": "32adc3f50e5b4c7f65b95f05b8307d25"
  },
  {
    "url": "assets/icons/md-reorder.svg",
    "revision": "e1046f32a858e4728d7a494bc38880ab"
  },
  {
    "url": "assets/icons/md-repeat.svg",
    "revision": "1a439b2763ce2122b5cb21942d57d56c"
  },
  {
    "url": "assets/icons/md-resize.svg",
    "revision": "76bc09a5e1f3c63bfaed7285199d1038"
  },
  {
    "url": "assets/icons/md-restaurant.svg",
    "revision": "c6e99e5faacfb749d546691f4ad82ba7"
  },
  {
    "url": "assets/icons/md-return-left.svg",
    "revision": "ee7334a1e7a8a429d6a6067c28903677"
  },
  {
    "url": "assets/icons/md-return-right.svg",
    "revision": "ddb2195c41120a9361fc92a5a5c48851"
  },
  {
    "url": "assets/icons/md-reverse-camera.svg",
    "revision": "02f7099da1a7309676eb34b575a9a3ef"
  },
  {
    "url": "assets/icons/md-rewind.svg",
    "revision": "cc95f96fc5175dec40ee9e7b45d3a5d9"
  },
  {
    "url": "assets/icons/md-ribbon.svg",
    "revision": "e7c4739bfcd077a6cbe62eb31ef27a05"
  },
  {
    "url": "assets/icons/md-rocket.svg",
    "revision": "9d66777b84dec3d030457926882cca69"
  },
  {
    "url": "assets/icons/md-rose.svg",
    "revision": "3b986df3d0e604eddd780a3e506fde44"
  },
  {
    "url": "assets/icons/md-sad.svg",
    "revision": "f9737ad952ec61aa2eeb59c5f1fb1ffb"
  },
  {
    "url": "assets/icons/md-save.svg",
    "revision": "3827532e727bbaf3ea92fa10115aa014"
  },
  {
    "url": "assets/icons/md-school.svg",
    "revision": "7ddedeb441f0f3d149c4aa8654a4c1da"
  },
  {
    "url": "assets/icons/md-search.svg",
    "revision": "fa8f9b72e3e29ba7a70b6bd240fc3ec4"
  },
  {
    "url": "assets/icons/md-send.svg",
    "revision": "287dfddbdde2547815e7368e8e87d780"
  },
  {
    "url": "assets/icons/md-settings.svg",
    "revision": "b765b74d5c5b9c672bec96ba649e3462"
  },
  {
    "url": "assets/icons/md-share-alt.svg",
    "revision": "5d3d49d800a0624e22904bf52fc25e15"
  },
  {
    "url": "assets/icons/md-share.svg",
    "revision": "b3aee8b9cbb0009d5458e7f256c6d587"
  },
  {
    "url": "assets/icons/md-shirt.svg",
    "revision": "2cee733b95dbaf50d906c4a23fb8c09b"
  },
  {
    "url": "assets/icons/md-shuffle.svg",
    "revision": "5b58355ad7757a727934b3e221bb4873"
  },
  {
    "url": "assets/icons/md-skip-backward.svg",
    "revision": "9c4f1d22fa24ea02508c26829038d78c"
  },
  {
    "url": "assets/icons/md-skip-forward.svg",
    "revision": "fdd5e8dd4dec380e426be7e173e61935"
  },
  {
    "url": "assets/icons/md-snow.svg",
    "revision": "926429964f4db3f894bd065d9fb1ed9f"
  },
  {
    "url": "assets/icons/md-speedometer.svg",
    "revision": "f27fa0beef77f70e49c6bfc7018bede6"
  },
  {
    "url": "assets/icons/md-square-outline.svg",
    "revision": "8dce978e56839c5ee39852b81b6d8ac3"
  },
  {
    "url": "assets/icons/md-square.svg",
    "revision": "dcf0f6b7148ae522b1870655e2643c1f"
  },
  {
    "url": "assets/icons/md-star-half.svg",
    "revision": "19aae142c60b9e864b5f62625e7baa50"
  },
  {
    "url": "assets/icons/md-star-outline.svg",
    "revision": "6b0fdbbab95084c951b784679be16920"
  },
  {
    "url": "assets/icons/md-star.svg",
    "revision": "7fafa5dfe53ccde93ff6d8ad4712d4f7"
  },
  {
    "url": "assets/icons/md-stats.svg",
    "revision": "3e0f3935521e3e6e7cc37197f0f264ed"
  },
  {
    "url": "assets/icons/md-stopwatch.svg",
    "revision": "991f01f26d2433f354c6198bd7a08c93"
  },
  {
    "url": "assets/icons/md-subway.svg",
    "revision": "1499b6c893161f092fff342302057d03"
  },
  {
    "url": "assets/icons/md-sunny.svg",
    "revision": "3bdb7709b273f81d544f7e52dded1033"
  },
  {
    "url": "assets/icons/md-swap.svg",
    "revision": "aabb9aac3ee602aefab7317be4d92896"
  },
  {
    "url": "assets/icons/md-switch.svg",
    "revision": "7c2a4afdeea031d824d32a3c38c2a7b7"
  },
  {
    "url": "assets/icons/md-sync.svg",
    "revision": "748703e30514402b5b6553cc815ae885"
  },
  {
    "url": "assets/icons/md-tablet-landscape.svg",
    "revision": "0e6b0038266a58ca1206d949a080310d"
  },
  {
    "url": "assets/icons/md-tablet-portrait.svg",
    "revision": "033803d8bc368d1edaa75cfaf5151c36"
  },
  {
    "url": "assets/icons/md-tennisball.svg",
    "revision": "bff5e0a4c441c700dc7372ab6b6efade"
  },
  {
    "url": "assets/icons/md-text.svg",
    "revision": "97b746f96b35650a0fd9d12c4ec2778d"
  },
  {
    "url": "assets/icons/md-thermometer.svg",
    "revision": "52f42278009144d8614c2f068e6a6770"
  },
  {
    "url": "assets/icons/md-thumbs-down.svg",
    "revision": "3c151e52a91a488a8bb98ac9bd22be99"
  },
  {
    "url": "assets/icons/md-thumbs-up.svg",
    "revision": "2c7f8227b293d2c5bb92242f04945411"
  },
  {
    "url": "assets/icons/md-thunderstorm.svg",
    "revision": "232fc4f6d8459906f53e903e7c8ad5f6"
  },
  {
    "url": "assets/icons/md-time.svg",
    "revision": "f94763f937ff7cd132bf3e781b5445d1"
  },
  {
    "url": "assets/icons/md-timer.svg",
    "revision": "a9da4e17b2f820f48ac0de408f0b909f"
  },
  {
    "url": "assets/icons/md-today.svg",
    "revision": "0af27607e4ede8045f164a69cabb751a"
  },
  {
    "url": "assets/icons/md-train.svg",
    "revision": "595f872ef0712cb923e7300ff9619a67"
  },
  {
    "url": "assets/icons/md-transgender.svg",
    "revision": "7ba88bc56780ef17b76e8c78ceb8f6de"
  },
  {
    "url": "assets/icons/md-trash.svg",
    "revision": "41ee8eed83a54c09be14bf63bb5d7f3b"
  },
  {
    "url": "assets/icons/md-trending-down.svg",
    "revision": "a0ae4de298f6e4864273f3ac56873a38"
  },
  {
    "url": "assets/icons/md-trending-up.svg",
    "revision": "7c37617f51434234261f57fa2274a8e1"
  },
  {
    "url": "assets/icons/md-trophy.svg",
    "revision": "a26c9b82912a5d127d1c3c431300b80c"
  },
  {
    "url": "assets/icons/md-tv.svg",
    "revision": "8dcbc9f292cc4b2a63b6080a1143f78f"
  },
  {
    "url": "assets/icons/md-umbrella.svg",
    "revision": "76c9db2448102d71beb2b851ecda43dd"
  },
  {
    "url": "assets/icons/md-undo.svg",
    "revision": "c899c04ee4f0093c8df1454e616cd8d4"
  },
  {
    "url": "assets/icons/md-unlock.svg",
    "revision": "f579ccc849e2a11d0aea5cda9e1d51f2"
  },
  {
    "url": "assets/icons/md-videocam.svg",
    "revision": "d99e843dd5d088848f8e0ba40c396eee"
  },
  {
    "url": "assets/icons/md-volume-high.svg",
    "revision": "9eea8f1f1d648f96b1989fd7014a7548"
  },
  {
    "url": "assets/icons/md-volume-low.svg",
    "revision": "ef9c91b5e950178330cec5600239eb24"
  },
  {
    "url": "assets/icons/md-volume-mute.svg",
    "revision": "6553a53dbb1e6aabbc2f7cc835409d6e"
  },
  {
    "url": "assets/icons/md-volume-off.svg",
    "revision": "1a975b90c00e1ee9f25a15beb23cfe55"
  },
  {
    "url": "assets/icons/md-walk.svg",
    "revision": "0b331bec8e473b6efc5bfb758714e379"
  },
  {
    "url": "assets/icons/md-wallet.svg",
    "revision": "b08cf810d215fd96897a14bbdcee611f"
  },
  {
    "url": "assets/icons/md-warning.svg",
    "revision": "9b81f4efb85c57c509a78741bb01646a"
  },
  {
    "url": "assets/icons/md-watch.svg",
    "revision": "61a5975ce1e3c5869eadf5b38397eafb"
  },
  {
    "url": "assets/icons/md-water.svg",
    "revision": "23d2407305d2d2a10b762b7dac2fef2e"
  },
  {
    "url": "assets/icons/md-wifi.svg",
    "revision": "69c337decf0d9b08cfa89d5fd8fcf5cb"
  },
  {
    "url": "assets/icons/md-wine.svg",
    "revision": "83e2ae34e1bbf13ec41ef24677a21e59"
  },
  {
    "url": "assets/icons/md-woman.svg",
    "revision": "5019f960ff470e46e50926abaef3b51f"
  },
  {
    "url": "build/wss.js",
    "revision": "9d576f035b9bd8f91ef0bdd9a0de6d81"
  },
  {
    "url": "build/wss/abxnfeya.entry.js",
    "revision": "fda0579c5798004bc64fd4c2694f2974"
  },
  {
    "url": "build/wss/abxnfeya.sc.entry.js",
    "revision": "003c2eea626cf762a7d477e79f0281c7"
  },
  {
    "url": "build/wss/om7pgs82.entry.js",
    "revision": "38cecf192f3eda5485a64d39ee12e368"
  },
  {
    "url": "build/wss/om7pgs82.sc.entry.js",
    "revision": "c761f7056b21c520e4562be2af356736"
  },
  {
    "url": "build/wss/wss.lyhuskyj.js",
    "revision": "972854b246238b8e77e7ffd58c74de5b"
  },
  {
    "url": "build/wss/wss.vycrkw66.js",
    "revision": "558091916eba8302d9daf78a1154d33d"
  },
  {
    "url": "index.html",
    "revision": "b352f82841634456fbe65af3bef1c7d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
