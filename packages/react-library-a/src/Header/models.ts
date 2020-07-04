export interface QuestionHeading {
  heading: string;
}

export enum QuestionFamily {
  OpenEnded,
  SingleChoice,
}

export interface Question {
  family: QuestionFamily;
  headings: QuestionHeading[];
  position: number;
}

/**
 * List of available choices for the user
 *
 * @export
 * @interface AnswerChoice
 */
export interface AnswerChoice {
  /**
   * Choice for user selection
   *
   * @type {string}
   * @memberof AnswerChoice
   */
  text: string;
  /**
   * Position of the current choice
   *
   * @type {number}
   * @memberof AnswerChoice
   */
  position?: number;
}

export interface SingleChoiceAnswer {
  /**
   * List of available choices for the user
   *
   * @type {AnswerChoice[]}
   * @memberof SingleChoiceAnswer
   */
  choices: AnswerChoice[];
}
