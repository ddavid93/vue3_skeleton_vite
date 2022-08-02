import * as yup from 'yup';
import {InferType, object} from 'yup';

export type ValidationTicketType = InferType<typeof ticketingValidation>

export const ticketingValidation = object({
    id: yup.number().required(),
    assigned_user_id: yup.number().required(),
    created_at: yup.date().required(),
    project_id: yup.number().required(),
    ticket_priority: yup.string().required(),
    ticket_status: yup.string().required(),
    title: yup.string(),
    account_id: yup.number().required(),
    description: yup.string().required(),
    ticket_scope: yup.number().required(),
    supervising_user_id: yup.number().required(),
    estimated_time: yup.string().required(),
    planned_start: yup.date().required(),
    planned_end: yup.date().required(),
    timelogs_sum_time: yup.number().required(),
    tags: yup.string().required(),
});