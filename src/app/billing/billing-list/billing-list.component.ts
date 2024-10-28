import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../services/billing.service';
import { Billing } from '../../models/billing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {
  billings: Billing[] = [];

  constructor(private billingService: BillingService, private router: Router) {}

  ngOnInit(): void {
    this.loadBillings();
  }

  loadBillings(): void {
    this.billingService.getBillings().subscribe((data) => (this.billings = data));
  }

  editBilling(id: number): void {
    this.router.navigate(['/billing/edit', id]);
  }

  deleteBilling(id: number): void {
    if (confirm('Are you sure you want to delete this billing?')) {
      this.billingService.deleteBilling(id).subscribe(() => {
        this.billings = this.billings.filter((bill) => bill.id !== id);
        alert('Billing deleted successfully');
      });
    }
  }
}
