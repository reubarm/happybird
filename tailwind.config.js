module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	safelist: [
		{
		  pattern: /./
		},
	  ],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			zIndex: {
				9999: '9999',
			},
			borderRadius: {
				'none': '0',
				'good': '20px',
			  }
		},
	},
}
