<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1"><span class="svg-icon svg-icon-1 position-absolute ms-6"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect xmlns="http://www.w3.org/2000/svg" opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
<path xmlns="http://www.w3.org/2000/svg" d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
</svg></span><input type="text" class="form-control form-control-solid w-250px ps-15" placeholder="Search Customers">
        </div>
      </div>
      <div class="card-toolbar">
        <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
          <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_customers_export_modal"><span class="svg-icon svg-icon-2"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect xmlns="http://www.w3.org/2000/svg" opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="currentColor"></rect>
<path xmlns="http://www.w3.org/2000/svg" d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor"></path>
<path xmlns="http://www.w3.org/2000/svg" opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor"></path>
</svg></span> Export
          </button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer"><span class="svg-icon svg-icon-2"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect xmlns="http://www.w3.org/2000/svg" opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
<rect xmlns="http://www.w3.org/2000/svg" x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
</svg></span> Add Customer
          </button>
        </div>
        <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
          <div class="fw-bold me-5"><span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected
          </div>
          <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected"> Delete Selected</button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="dataTables_wrapper dt-bootstrap4 no-footer" enable-items-per-page-dropdown="true">
        <div class="table-responsive">
          <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
            <thead>
            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
              <th style="width: 30px;">
                <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                  <input class="form-check-input" type="checkbox"></div>
              </th>
              <th class="" style="min-width: 175px; width: auto; cursor: pointer;">name <!----></th>
              <th class="" style="min-width: 230px; width: auto; cursor: pointer;">email <!----></th>
              <th class="" style="min-width: 175px; width: auto; cursor: pointer;">company <!----></th>
              <th class="" style="min-width: 175px; width: auto; cursor: pointer;">paymentMethod <!----></th>
              <th class="" style="min-width: 225px; width: auto; cursor: pointer;">date <!----></th>
              <th class="text-end" style="min-width: 135px; width: auto; cursor: auto;">actions <!----></th>
            </tr>
            </thead>
            <tbody class="fw-semibold text-gray-600">
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="25068"></div>
              </td>
              <td class="">Emma Smith</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">e.smith@kpmg.com.au</a></td>
              <td class="">-</td>
              <td class=""><img src="media/svg/card-logos/mastercard.svg" class="w-35px me-3" alt="">**** 8236</td>
              <td class="">14 Dec 2020, 8:43 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="76141"></div>
              </td>
              <td class="">Melody Macy</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">melody@altbox.com</a></td>
              <td class="">Google</td>
              <td class=""><img src="media/svg/card-logos/visa.svg" class="w-35px me-3" alt="">**** 1270</td>
              <td class="">01 Dec 2020, 10:12 am</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="20931"></div>
              </td>
              <td class="">Max Smith</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">max@kt.com</a></td>
              <td class="">Bistro Union</td>
              <td class=""><img src="media/svg/card-logos/mastercard.svg" class="w-35px me-3" alt="">**** 1252</td>
              <td class="">12 Nov 2020, 2:01 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="27877"></div>
              </td>
              <td class="">Sean Bean</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">sean@dellito.com</a></td>
              <td class="">Astro Limited</td>
              <td class=""><img src="media/svg/card-logos/american-express.svg" class="w-35px me-3" alt="">**** 3865
              </td>
              <td class="">21 Oct 2020, 5:54 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="58901"></div>
              </td>
              <td class="">Brian Cox</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">brian@exchange.com</a></td>
              <td class="">-</td>
              <td class=""><img src="media/svg/card-logos/visa.svg" class="w-35px me-3" alt="">**** 8331</td>
              <td class="">19 Oct 2020, 7:32 am</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="1124"></div>
              </td>
              <td class="">Mikaela Collins</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">mikaela@pexcom.com</a></td>
              <td class="">Keenthemes</td>
              <td class=""><img src="media/svg/card-logos/american-express.svg" class="w-35px me-3" alt="">**** 1412
              </td>
              <td class="">23 Sep 2020, 12:37 am</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="28332"></div>
              </td>
              <td class="">Francis Mitcham</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">f.mitcham@kpmg.com.au</a></td>
              <td class="">Paypal</td>
              <td class=""><img src="media/svg/card-logos/mastercard.svg" class="w-35px me-3" alt="">**** 2676</td>
              <td class="">11 Sep 2020, 3:15 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="40540"></div>
              </td>
              <td class="">Olivia Wild</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">olivia@corpmail.com</a></td>
              <td class="">-</td>
              <td class=""><img src="media/svg/card-logos/american-express.svg" class="w-35px me-3" alt="">**** 7479
              </td>
              <td class="">03 Sep 2020, 1:08 am</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="86309"></div>
              </td>
              <td class="">Neil Owen</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">owen.neil@gmail.com</a></td>
              <td class="">Paramount</td>
              <td class=""><img src="media/svg/card-logos/visa.svg" class="w-35px me-3" alt="">**** 5289</td>
              <td class="">01 Sep 2020, 4:58 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="20100"></div>
              </td>
              <td class="">Dan Wilson</td>
              <td class=""><a href="#" class="text-gray-600 text-hover-primary mb-1">dam@consilting.com</a></td>
              <td class="">Trinity Studio</td>
              <td class=""><img src="media/svg/card-logos/visa.svg" class="w-35px me-3" alt="">**** 7956</td>
              <td class="">18 Aug 2020, 3:34 pm</td>
              <td class="text-end">
                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                  <span class="svg-icon svg-icon-5 m-0"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg></span></a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4" data-kt-menu="true">
                  <div class="menu-item px-3">
                    <a href="#/apps/customers/customer-details" class="menu-link px-3">View</a></div>
                  <div class="menu-item px-3"><a class="menu-link px-3">Delete</a></div>
                </div>
              </td>
            </tr>
            </tbody><!----></table>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
            <label for="items-per-page"><select class="form-select form-select-sm form-select-solid" name="items-per-page" id="items-per-page">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select></label></div>
          <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
            <div class="dataTables_paginate paging_simple_numbers">
              <ul class="pagination">
                <li class="paginate_button page-item disabled" style="cursor: auto;">
                  <a class="page-link"><span class="svg-icon"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor"></path>
</svg></span></a></li>
                <li class="paginate_button page-item disabled" style="cursor: auto;">
                  <a class="page-link"><span class="svg-icon"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="currentColor"></path>
</svg></span></a></li>
                <li class="paginate_button page-item active" style="cursor: auto;"><a class="page-link">1</a></li>
                <li class="paginate_button page-item" style="cursor: pointer;"><a class="page-link">2</a></li>
                <li class="paginate_button page-item" style="cursor: pointer;"><a class="page-link">3</a></li>
                <li class="paginate_button page-item" style="cursor: pointer;"><a class="page-link">4</a></li>
                <li class="paginate_button page-item" style="cursor: pointer;"><a class="page-link">5</a></li>
                <li class="paginate_button page-item" style="cursor: pointer;">
                  <a class="paginate_button page-link"><span class="svg-icon"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
</svg></span></a></li>
                <li class="paginate_button page-item" style="cursor: pointer;">
                  <a class="paginate_button page-link"><span class="svg-icon"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" opacity="0.5" d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z" fill="currentColor"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z" fill="currentColor"></path>
</svg></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>