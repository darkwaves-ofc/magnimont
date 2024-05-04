export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favico.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CPJiDMbr.js","app":"_app/immutable/entry/app.QMX1JfXB.js","imports":["_app/immutable/entry/start.CPJiDMbr.js","_app/immutable/chunks/entry.CUCF3KzH.js","_app/immutable/chunks/scheduler.VrTUKpSc.js","_app/immutable/chunks/index.luoHnVav.js","_app/immutable/entry/app.QMX1JfXB.js","_app/immutable/chunks/scheduler.VrTUKpSc.js","_app/immutable/chunks/index.Cb11SN46.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
