import {Modal} from "bootstrap";

const hideModal = (modalEl: HTMLElement | null): void => {
	if (!modalEl) return;
	Modal.getInstance(modalEl)?.hide();
};

const removeModalBackdrop = (): void => {
	const el = document.querySelectorAll(".modal-backdrop.fade.show");
	el?.forEach((item) => item.remove());
};

export {removeModalBackdrop, hideModal};
