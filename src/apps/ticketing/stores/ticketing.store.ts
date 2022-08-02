import {_GettersTree, defineStore, StateTree} from "pinia";
import {Ticketing} from "@/apps/ticketing/models/ticketing";
import {TicketingService} from "@/apps/ticketing/services/ticketing-service";
import {ActionType, StateType} from "@/_core/types/store-name-type";

export const useTicketsStore = defineStore<'tickets', StateType<Ticketing>, _GettersTree<StateTree>, ActionType>(
    "tickets",
    {
        state: () => ({
            loading: false,
            items: [],
        }),
        actions: {
            async fetch(refresh?: boolean) {
                try {
                    this.loading = true;
                    const ticketingService = new TicketingService();
                    if (refresh || !this.items.length) {
                        const {data} = await ticketingService.getItems({});
                        this.items = data.data;
                    }
                    this.loading = false;
                } catch (error) {
                    this.loading = false;
                }
            },
            remove(id: number) {
                this.hello = false
                this.loading = true;
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].id === id) {
                        this.items.splice(i, 1);
                    }
                }
                this.loading = false;
            },
            removeAll(item: number[]) {
                this.loading = true;
                this.items = this.items.filter(f => item.indexOf(f.id) < 0);
                this.loading = false;
            },
        },
    });
