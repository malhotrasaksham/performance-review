import { Injectable } from '@angular/core';
import { feedbacks } from '../data/feedbacks';
import { UserService } from './user.service';
import { Feedback, Status } from '../models/feedback.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private userService: UserService) {}

  getFeedbacks() {
    const currentUserId = this.userService.$user.value?.id;
    return feedbacks.filter((feedback) => feedback.userId === currentUserId);
  }

  getFeedbacksForUser(userId: string) {
    return new Promise<Feedback[]>((resolve) => {
      resolve(feedbacks.filter((feedback) => feedback.userId === userId));
    });
  }

  assignFeedbackToUser(userId: string, userForId: string) {
    return new Promise<Feedback>(async (resolve) => {
      const userForName =
        (await this.userService.findUsersName(userForId)) || '';
      const addedFeedback = {
        id: uuid(),
        userId,
        userForId,
        userForName,
        status: Status.pending,
        description: '',
      };
      feedbacks.push(addedFeedback);

      resolve(addedFeedback);
    });
  }
}
