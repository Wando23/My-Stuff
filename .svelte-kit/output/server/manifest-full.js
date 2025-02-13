export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cat-meow.gif","happy-cat.gif","oia-uia.gif","petting-cat.gif","plink-cat-blink.gif"]),
	mimeTypes: {".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.cpaqJJ3f.js",app:"_app/immutable/entry/app.RTghS6Hu.js",imports:["_app/immutable/entry/start.cpaqJJ3f.js","_app/immutable/chunks/M0xraAtw.js","_app/immutable/chunks/D1LESAtf.js","_app/immutable/chunks/BPlo9-nk.js","_app/immutable/entry/app.RTghS6Hu.js","_app/immutable/chunks/D1LESAtf.js","_app/immutable/chunks/GZLUYLMk.js","_app/immutable/chunks/DExQp5ZK.js","_app/immutable/chunks/BzH45Zlb.js","_app/immutable/chunks/BuPu5GEG.js","_app/immutable/chunks/BPlo9-nk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
