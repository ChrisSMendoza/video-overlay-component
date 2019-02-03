// video-overlay.js

Vue.component('video-overlay', {

	template: `
		<div class="card bg-dark text-white h-100">

			<video class="card-img background-video" autoplay>
				<source src="city.mp4" type="video/mp4"/>
				
				Your browser does not support HTML5 videos.
			</video>
			
			<div class="card-img-overlay">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content.
					This content is a little bit longer.
				</p>
				<p class="card-text">Last updated 3 mins ago</p>
			</div>
		</div>
	`
});