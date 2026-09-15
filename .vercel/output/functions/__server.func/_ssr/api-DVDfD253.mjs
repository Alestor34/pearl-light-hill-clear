import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as record, i as object, o as string, r as number, t as boolean } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-DVDfD253.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchPublicSite = createServerFn({ method: "GET" }).handler(createSsrRpc("907cd7713e3f46fcb57e599e63c819799a1049b8e2f2760025d100fe707d7af8"));
var fetchAdminSite = createServerFn({ method: "POST" }).validator((d) => object({ token: string() }).parse(d)).handler(createSsrRpc("951cc198528b91c3c528e2617a84be965e0283f50cbf56084cbce96fd1974286"));
var loginAdmin = createServerFn({ method: "POST" }).validator((d) => object({ pin: string().min(1) }).parse(d)).handler(createSsrRpc("c3b725f2f99ee1aa5fd01c61f38425f6a2cf50faf61fc94bb242a2d6370dc102"));
var logoutAdmin = createServerFn({ method: "POST" }).validator((d) => object({ token: string() }).parse(d)).handler(createSsrRpc("4730c7d373e8f6dcccb6f2cb017607b33d1302030f10d2a2670eed8145088590"));
var saveContent = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	entries: record(string(), string())
}).parse(d)).handler(createSsrRpc("f1eb09f35577ffe12110eb6dcfe991ab596c14ef4c310ebe017a0cc768a322a0"));
var saveSettings = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	phone: string().min(4),
	instagram: string().min(1),
	ordersClosed: boolean(),
	ordersClosedUntil: string().nullable(),
	ordersClosedMessage: string()
}).parse(d)).handler(createSsrRpc("c404a16d9136556fbb8a5091533fa47f3101af1ae6af2aa7f329d5fde3d62eaa"));
var changePin = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	currentPin: string().min(1),
	nextPin: string().min(3)
}).parse(d)).handler(createSsrRpc("f8379665f353f5210d9684c3142b66d18f5f44406db487827e56b1f6a48dc502"));
var categoryInput = object({
	token: string(),
	id: number().optional(),
	name: string().min(1),
	slug: string().min(1),
	description: string(),
	image: string(),
	visible: boolean(),
	sortOrder: number()
});
var saveCategory = createServerFn({ method: "POST" }).validator((d) => categoryInput.parse(d)).handler(createSsrRpc("0a42fc408bf691bfef804d9ff2a3641a2ca173d251f765f6e896d3db959d48f5"));
var deleteCategory = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	id: number()
}).parse(d)).handler(createSsrRpc("f55eaa95289b8f1b330c83eb3e5932f109b2b16f990788889398d9018280894d"));
var productInput = object({
	token: string(),
	id: number().optional(),
	categoryId: number(),
	name: string().min(1),
	description: string(),
	price: number().int().nonnegative(),
	unit: string().min(1),
	image: string(),
	badge: string(),
	visible: boolean(),
	sortOrder: number()
});
var saveProduct = createServerFn({ method: "POST" }).validator((d) => productInput.parse(d)).handler(createSsrRpc("c379b68d60b7249485dc8aa2509312d8567ba94bb7e74177761b445bc10b1f77"));
var deleteProduct = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	id: number()
}).parse(d)).handler(createSsrRpc("9d0ed4aa0a41d4e37d5378e3c3892cfb1d23156d376093d3be2948c1a196cc8d"));
//#endregion
export { fetchPublicSite as a, saveCategory as c, saveSettings as d, fetchAdminSite as i, saveContent as l, deleteCategory as n, loginAdmin as o, deleteProduct as r, logoutAdmin as s, changePin as t, saveProduct as u };
