<template>
    <div
        id="yn_delete_modal"
        ref="modalElement"
        class="modal fade"
        tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Delete Item
                    </h5>
                    <!--begin::Close-->
                    <div
                        class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        data-bs-dismiss="modal"
                    >
            <span class="svg-icon svg-icon-2x">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg"/>
            </span>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <p>{{ message }}</p>
                </div>

                <div class="modal-footer">
                    <button
                        :disabled="!!loading"
                        type="button"
                        class="btn btn-light"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary indication"
                        :disabled="!!loading"
                        @click="_delete"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, PropType, Ref, ref} from "vue";
import {Modal} from "bootstrap";
import {storeToRefs} from "pinia";
import {UtilService} from "@/_core/services/util-service";
import {StoreNameType} from "@/_core/types/store-name-type";

let modalElement = ref();
let deleteModal: Modal;
const props = defineProps({
    message: {type: String, default: 'Are you sure to delete this item?'},
    store: {type: String as PropType<StoreNameType>, required: true},
});

const storeFactory = UtilService.getStore(props.store)();
const {loading} = storeToRefs(storeFactory);
const item: Ref<number | number[]> = ref(0)
onMounted(() => {
    deleteModal = new Modal(modalElement.value, {
        backdrop: "static",
        keyboard: false,
    });
});

const _show = (value: number | number[]) => {
    item.value = value
    deleteModal?.show()
};

const _delete = async () => {
    if (typeof item.value === 'number') {
        await storeFactory.remove(item.value);
    } else await storeFactory.removeAll(item.value);
    deleteModal.hide();
};

defineExpose({show: _show});
</script>
