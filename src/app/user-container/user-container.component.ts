import { Component, OnInit } from '@angular/core';
import { Feedback, Status } from '../models/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent implements OnInit {
  feedbacks: Feedback[] = [];
  activeFeedback!: Feedback | null;
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  fetchFeedbacks() {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  activatePendingFeedback(feedbackId: string) {
    const activeFeedback = this.pendingFeedbacks.find(
      (feedback) => feedback.id === feedbackId
    );
    if (activeFeedback) {
      this.activeFeedback = {
        ...activeFeedback,
      };
    }
  }

  activateDraftFeedback(feedbackId: string) {
    const activeFeedback = this.draftFeedbacks.find(
      (feedback) => feedback.id === feedbackId
    );
    if (activeFeedback) {
      this.activeFeedback = {
        ...activeFeedback,
      };
    }
  }

  deactivateFeedback() {
    this.activeFeedback = null;
  }

  changeStatus(statusTo: number) {
    let currentFeedback = this.feedbacks.find(
      (feedback) => feedback.id === this.activeFeedback?.id
    );

    if (currentFeedback && this.activeFeedback) {
      currentFeedback.status = statusTo;
      currentFeedback.description = this.activeFeedback.description;
    }
    this.deactivateFeedback();
  }

  get pendingFeedbacks() {
    return this.feedbacks.filter(
      (feedback) => feedback.status === Status.pending
    );
  }

  get draftFeedbacks() {
    return this.feedbacks.filter(
      (feedback) => feedback.status === Status.draft
    );
  }

  get submittedFeedbacks() {
    return this.feedbacks.filter(
      (feedback) => feedback.status === Status.submitted
    );
  }
}
