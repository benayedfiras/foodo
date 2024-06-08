import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "name";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.name?.toString() || String(record.id);
};
