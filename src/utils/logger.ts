// Provides all different sorts of logging

export const logger = {
  debug: (...args: any) => {
    if (__DEV__) {
      const textArg: string = args[0];
      console.log(`DEBUG ====> ${textArg}`);
      if (args[1]) {
        for (let arg of args) {
          if (arg !== textArg) {
            console.log('DEBUG DATA ====>', arg);
          }
        }
      }
    } else {
      // do nothing
    }
  },
  analytics: (text: string, data?: any) => {
    if (__DEV__) {
      console.log(`ANALYTICS ====> ${text}`, data);
    } else {
      // use analytics service
    }
  },
  error: (text: string, error: any) => {
    if (__DEV__) {
      console.warn(`ERROR ====> ${text}`, error);
    } else {
      // use error service
    }
  },
  operation: (text: string) => {
    // graphql operation
    if (__DEV__) {
      console.log(`OPERATION ====>  ${text}`);
    } else {
      // use service
    }
  },
};
