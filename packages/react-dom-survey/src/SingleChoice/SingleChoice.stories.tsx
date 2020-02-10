/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";

export default {
  title: "Welcome"
};

export const toStorybook = () => <div>Hi</div>;

toStorybook.story = {
  name: "to Storybook"
};
