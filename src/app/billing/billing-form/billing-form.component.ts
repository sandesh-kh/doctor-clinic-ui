import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../services/billing.service';
import { Billing } from '../../models/billing'; // Update with your actual model
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
  billing: Billing = {
    id: 0, patientId: 0, amount: 0, date: '',
    status: ''
  }; // Adjust properties as needed
  isEdit: boolean = false;

  constructor(
    private billingService: BillingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.billingService.getBilling(id).subscribe((billing) => (this.billing = billing));
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.billingService.updateBilling(this.billing.id, this.billing).subscribe(() => {
        alert('Billing updated successfully');
        this.router.navigate(['/billing']);
      });
    } else {
      this.billingService.addBilling(this.billing).subscribe(() => {
        alert('Billing added successfully');
        this.router.navigate(['/billing']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/billing']);
  }
}
