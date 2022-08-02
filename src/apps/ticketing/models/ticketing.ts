import {ValidationTicketType} from "@/apps/ticketing/models/validations/ticketing-validations";
import {IModel} from "@/_core/interfaces/i-model";

export class Ticketing implements IModel, ValidationTicketType {
    id!: number;
    assigned_user_id!: number;
    created_at!: Date;
    project_id!: number;
    ticket_priority!: string;
    ticket_status!: string;
    title: string | undefined;
    account_id!: number;
    description!: string;
    ticket_scope!: number;
    supervising_user_id!: number;
    estimated_time!: string;
    planned_start!: Date;
    planned_end!: Date;
    timelogs_sum_time!: number;
    tags!: string;
}

