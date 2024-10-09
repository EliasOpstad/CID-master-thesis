interface Window {
  datadogRum: {
    addAction: (actionName: string, context?: object) => void;
  };
}
