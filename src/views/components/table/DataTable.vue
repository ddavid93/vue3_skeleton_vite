<template>
    <div id="dataTable" class="overflow-hidden position-relative card-rounded">
        <!--begin::Ribbon-->
        <div @click="fetch" v-if="canRefresh" :class="{'disabled-div': !!loading}" class="ribbon ribbon-triangle ribbon-top-start border-primary cursor-pointer">
            <!--begin::Ribbon icon-->
            <div v-tooltip title="Refresh list" class="ribbon-icon mt-n6 ms-n6">
                <i class="fas fa-sync fs-2 text-white" :class="{'fa-spin':loading}"></i>
            </div>
            <!--end::Ribbon icon-->
        </div>
        <div class="card">
            <!--begin::Card header-->
            <div class="card-header border-0 pt-6 ribbon ribbon-top ribbon-vertical">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Search-->
                    <div
                        v-if="canSearch"
                        class="d-flex align-items-center position-relative my-1"
                    >
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg"/>
          </span>
                        <input
                            v-model="search"
                            type="text"
                            class="form-control form-control-solid w-250px ps-15"
                            :placeholder="searchPlaceholder"
                            @input="$emit('searchItems')"
                        >
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <slot name="toolbar"/>
                    <div
                        v-if="checkedItems.length === 0"
                        class="d-flex justify-content-end"
                        data-kt-subscription-table-toolbar="base">
                        <!--begin::Add subscription-->
                        <div v-if="canAdd">

                        </div>
                        <router-link
                            v-if="standardAddRoute"
                            :to="{ name: dataRoute}"
                            class="btn btn-icon btn-primary"
                            title="Add item" v-tooltip>
             <span class="svg-icon svg-icon-1">
                <inline-svg src="media/icons/duotune/general/gen041.svg"/>
              </span>
                        </router-link>
                        <a v-else
                           title="Add item" v-tooltip @click="$emit('add-event')"
                           class="btn btn-icon btn-primary">
               <span class="svg-icon svg-icon-1">
                 <inline-svg src="media/icons/duotune/general/gen041.svg"/>
              </span>
                        </a>
                        <!--end::Add subscription-->
                    </div>
                    <!--end::Toolbar-->
                    <!--begin::Group actions-->
                    <div
                        v-else-if="checkbox"
                        class="d-flex justify-content-end align-items-center"
                        data-kt-subscription-table-toolbar="selected"
                    >
                        <div class="fw-bolder me-5">
                            <span class="me-2">{{ checkedItems.length }}</span>
                            Selected
                        </div>

                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="showModal(checkedItems)"
                        >
                            Delete Selected
                        </button>
                    </div>
                    <!--end::Group actions-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <slot name="body"></slot>
                <KtDatatable
                    :loading="loading"
                    :table-data="items"
                    :table-header="header"
                >
                    <template #checkbox="{ row }">
                        <div
                            class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                            <input
                                v-model="checkedItems"
                                class="form-check-input"
                                type="checkbox"
                                :value="row.id"
                            >
                        </div>
                    </template>
                    <template
                        v-for="(cell, i) in tableHeader"
                        :key="i"
                        #[`${cell.key}`]="{ row }"
                    >
                        <slot
                            :name="cell.key"
                            :row="row"
                        />
                    </template>

                    <template v-if="!$slots?.actions" #actions="{ row }">

                        <router-link
                            v-if="standardEditRoute"
                            :to="{ name: dataRoute, params: { id: row.id } }"
                            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            title="Edit" v-tooltip>
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/art/art005.svg"/>
              </span>
                        </router-link>
                        <a v-else
                           title="Edit" v-tooltip @click="$emit('edit-event')"
                           class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
               <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/art/art005.svg"/>
              </span>
                        </a>

                        <button
                            v-tooltip
                            href="#"
                            title="Delete"
                            :disabled="checkedItems.length"
                            class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm"
                            @click="showModalToDelete ? showModal(row.id) : $emit('delete-event')"
                        >
            <span class="svg-icon svg-icon-3">
              <inline-svg src="media/icons/duotune/general/gen027.svg"/>
            </span>
                        </button>
                    </template>
                </KtDatatable>
            </div>
            <DeleteModal
                ref="deleteModal"
                :store="store"
            />
            <!--end::Card body-->
        </div>

    </div>

</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {onMounted, PropType, Ref, ref, watch} from "vue";
import KtDatatable from "@/_metronic/components/kt-datatable/KTDatatable.vue";
import {useRoute as route} from "vue-router";
import {toolTip as vTooltip} from "@/_core/directives/tooltip";
import DeleteModal from "@/views/components/modal/DeleteModal.vue";
import {storeToRefs} from "pinia";
import {IHeaderConfiguration} from "@/_metronic/core/interfaces/ktdatatable.interface";
import {executeProgressBarLoader} from '@/_core/helpers/loader'
import {UtilService} from "@/_core/services/util-service";
import {IDeleteModal} from "@/_core/interfaces/i-delete-modal";
import {StoreNameType} from "@/_core/types/store-name-type";

// const route = useRoute();
const {t} = useI18n();
const search = ref<string>("");
const checkedItems: Ref<number[]> = ref([]);
const props = defineProps({
    // Begin native KtDatatable Props
    tableHeader: {
        type: Array as () => Array<IHeaderConfiguration>,
        required: true,
    },
    tableData: {type: Array},
    emptyTableText: {type: String, default: "No data found"},
    currentPage: {type: Number, default: 1},
    enableItemsPerPageDropdown: {type: Boolean, default: true},
    total: {type: Number, default: 0},
    rowsPerPage: {type: Number, default: 5},
    order: {type: String, default: "asc"},
    sortLabel: {type: String, default: ""},
    // End native KtDatatable Props
    store: {type: String as PropType<StoreNameType>, required: true},
    showModalToDelete: {
        type: Boolean,
        default: true,
    },
    standardEditRoute: {
        type: Boolean,
        default: true,
    },
    standardAddRoute: {
        type: Boolean,
        default: true,
    },
    hasActions: {
        type: Boolean,
        default: true,
    },
    checkbox: {
        type: Boolean,
        default: true,
    },
    canRefresh: {
        type: Boolean,
        default: true,
    },
    simpleRow: {
        type: Boolean,
        default: true,
    },
    searchPlaceholder: {
        type: String,
        default: "Search...",
    },
    canAdd: {
        type: Boolean,
        default: true,
    },
    canSearch: {
        type: Boolean,
        default: true,
    },
});
const header: Ref = ref(props.tableHeader);
const message = ref(null)
const storeFactory = UtilService.getStore(props.store)();

const {items, loading} = storeToRefs(storeFactory);

let deleteModal: Ref<IDeleteModal | null> = ref(null);
const showModal = (item: number | number[]) => deleteModal.value?.show(item);

watch((items), () => {
    if (!items.value.some(r => checkedItems.value.indexOf(r.id) >= 0))
        checkedItems.value = []
})

const dataRoute = `${String(route().name)}.data`

const fetch = async () => await storeFactory.fetch(true);

onMounted(async () => {
    executeProgressBarLoader({parent: '#dataTable'})
    if (props.checkbox) {
        header.value = [
            {
                key: "checkbox",
                sortable: false,
            },
            ...header.value,
        ];
    }
    if (props.hasActions) {
        header.value = [
            ...header.value,
            {
                key: "actions",
                sortable: false,
            },
        ];
    }
    await storeFactory.fetch();
});
</script>
