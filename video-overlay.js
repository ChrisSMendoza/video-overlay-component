// video-overlay.js

Vue.component('video-overlay', {

	template: `
		<div class="card bg-dark text-white h-100">

			<video class="card-img background-video" autoplay>
				<source src="city.mp4" type="video/mp4"/>
				
				Your browser does not support HTML5 videos.
			</video>
			
			<div class="card-img-overlay">

				<slot></slot>

			</div>
		</div>
	`
});