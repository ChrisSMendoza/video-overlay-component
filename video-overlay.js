// video-overlay.js

Vue.component('video-overlay', {

	props: {

		videoSource: {
			type: String,
			required: true
		}
	},
	template: `
		<div class="card bg-dark text-white h-100">

			<video class="card-img background-video" autoplay>
				<source :src=videoSource type="video/mp4"/>
				
				Your browser does not support HTML5 videos.
			</video>
			
			<div class="card-img-overlay">

				<slot></slot>

			</div>
		</div>
	`
});