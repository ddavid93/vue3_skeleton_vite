import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
	path: "/ticketing",
	name: "ticketing",
	redirect: "/tickets",
	component: () => import("./Ticketing.vue"),
	children: [
		{
			path: "/tickets",
			name: "ticketing.tickets",
			component: () => import("./views/Tickets/TicketList.vue"),
		},
		{
			path: "tickets/:id?",
			name: "ticketing.tickets.data",
			props: true,
			component: () => import("./views/Tickets/TicketData.vue"),
		},
	],
};

export default routes;
