"use client";
import {
  DateRangePicker,
  defaultTheme,
  Provider,
  SSRProvider,
} from "@adobe/react-spectrum";

export default function App() {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <DateRangePicker label="Date range" />
      </Provider>
    </SSRProvider>
  );
}
