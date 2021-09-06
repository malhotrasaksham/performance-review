import { Component } from '@angular/core';
import { Feedback, Status } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'admin-feedbacks',
  templateUrl: './admin-feedbacks.component.html',
  styleUrls: ['./admin-feedbacks.component.scss'],
})
export class AdminFeedbacksComponent {
  users!: User[];
  usersFeedbackPendingFor!: User[];
  selectedUserId!: string;
  requestFeedbackForUserId: string = '';
  feedbacks!: Feedback[];

  constructor(
    private userService: UserService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.userService.getUsers();
  }

  async updateSelectedUser(eventTarget: EventTarget | null) {
    this.selectedUserId = (eventTarget as HTMLInputElement).value;
    await this.getUserFeedbacks();
    this.getUsersFeedbackPendingFor();
  }

  async requestFeedback() {
    const addedFeedback = await this.feedbackService.assignFeedbackToUser(
      this.selectedUserId,
      this.requestFeedbackForUserId
    );
    this.feedbacks.push(addedFeedback);
    this.requestFeedbackForUserId = '';
    this.getUsersFeedbackPendingFor();
  }

  getUsersFeedbackPendingFor() {
    this.usersFeedbackPendingFor = this.users.filter(
      (user) =>
        user.id !== this.selectedUserId &&
        this.feedbacks.every((feedback) => feedback.userForId !== user.id)
    );
  }

  async getUserFeedbacks() {
    this.feedbacks = await this.feedbackService.getFeedbacksForUser(
      this.selectedUserId
    );
  }

  get pendingFeedbacks() {
    return this.feedbacks?.filter((feedback) =>
      [Status.pending, Status.draft].includes(feedback.status)
    );
  }

  get submittedFeedbacks() {
    return this.feedbacks?.filter(
      (feedback) => feedback.status === Status.submitted
    );
  }
}
