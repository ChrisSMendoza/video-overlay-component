// video-overlay.js

Vue.component('video-overlay', {

	template: `
		<div class="card bg-dark text-white h-100">

			<img class="card-img background-video" src="pexels-photo-37487.jpeg" alt="Card image">
			
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