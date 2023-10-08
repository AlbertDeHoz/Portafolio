export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.e313b583.js","app":"_app/immutable/entry/app.6f3113d0.js","imports":["_app/immutable/entry/start.e313b583.js","_app/immutable/chunks/scheduler.97daf090.js","_app/immutable/chunks/singletons.84c2b165.js","_app/immutable/chunks/index.a36c05d7.js","_app/immutable/entry/app.6f3113d0.js","_app/immutable/chunks/scheduler.97daf090.js","_app/immutable/chunks/index.eac28ebb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/[[lang]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
