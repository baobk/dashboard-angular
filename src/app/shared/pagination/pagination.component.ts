import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
		selector: 'pagination',
		templateUrl: './pagination.component.html',
		styleUrls: [ './pagination.component.css' ]
})

export class PaginationComponent {
		@Input() limit: number;

		total: number;
		@Input('total')
		set _total(total: number) {
				if (!this.limit) {
						this.limit = 20;
				}
				this.total = total || 0;
				this.initialize();
		}

		@Output() onSelectPage = new EventEmitter<any>();

		loading: boolean;
		show: boolean;

		pageCount: number;
		totalPages: any;
		current: number;
		next: number;
		last: number;
		
		pagination: any;

		constructor() {}

		ngOnInit() {}

		initialize() {
				this.loading = true;
				this.show = false;

				this.totalPages = [];

				if (this.total && this.total > 0) {

						this.pageCount = Math.ceil(this.total / this.limit);
						if (this.limit > this.total) {
								this.pageCount = 1;
						}
						for (let i = 1; i < this.pageCount + 1; i++) {
								this.totalPages.push(i);
						}

						this.last = this.totalPages[this.totalPages.length - 1];
						this.current = (this.current) ? this.current : 1;
						this.next = (this.current === this.last) ? 0 : this.current + 1;

						this.generatePagination();

						this.show = true;
						this.loading = false;
				}
		}

		generatePagination() {
			const pageCount = this.pageCount;
			const pages = this.totalPages;
			const current = this.current

				this.pagination = {
					first: [],
					second: [],
					third: []
				};

				if ((current !== 0) && (current < (pageCount + 1))) {
						if (pageCount < 6) {
								this.pagination.first = pages;
								this.pagination.second = [];
								this.pagination.third = [];
						}

						if (pageCount === 6) {
								if ((pageCount - current) < 2) {
										this.pagination.first = pages.slice(0, 1); // first
										this.pagination.second = pages.slice((pages.length - 3), pages.length); // last4
										this.pagination.third = [];
								} else {
										if (current < 3) {
												this.pagination.first = pages.slice(0, 3); // first3
												this.pagination.second = pages.slice((pages.length - 1), pages.length); // last
												this.pagination.third = [];
										}

										if (current === 3) {
												this.pagination.first = pages.slice(0, 4); // first4
												this.pagination.second = pages.slice((pages.length - 1), pages.length); // last
												this.pagination.third = [];
										}

										if (current > 3) {
												this.pagination.first = pages.slice(0, 1); // first
												this.pagination.second = pages.slice((pages.length - 4), pages.length); // last4
												this.pagination.third = [];
										}
								}
						}

						if (pageCount > 6) {
								if (pageCount - current < 2) {
										this.pagination.first = pages.slice(0, 1); // first
										this.pagination.second = pages.slice((pages.length - 3), pages.length); // last4
										this.pagination.third = [];
								} else if (pageCount - current === 2) {
										this.pagination.first = pages.slice(0, 1); // first
										this.pagination.second = pages.slice((pages.length - 4), pages.length); // last4
										this.pagination.third = [];
								} else {
										if (current < 3) {
												this.pagination.first = pages.slice(0, 3); // first3
												this.pagination.second = pages.slice((pages.length - 1), pages.length); // last
												this.pagination.third = [];
										}

										if (current === 3) {
												this.pagination.first = pages.slice(0, 4); // first4
												this.pagination.second = pages.slice((pages.length - 1), pages.length); // last
												this.pagination.third = [];
										}

										if (current > 3) {
												this.pagination.first = pages.slice(0, 1); // first
												this.pagination.second = pages.slice((current - 2), (current + 1)); // i-1, i, i+1
												this.pagination.third = pages.slice((pages.length - 1), pages.length); // last
										}
								}
						}
				}
		}

		selectPage(page: number) {
				this.current = page;
				if (page === this.last) {
						this.next = 0;
				} else {
						this.next = this.current + 1;
				}
				this.generatePagination();
				this.onSelectPage.emit(page);
		}

		goPrev() {
				if (this.current > 0) {
						this.selectPage(this.current - 1);
				}
		}

		goNext() {
				this.selectPage(this.current + 1);
		}
}