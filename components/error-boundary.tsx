"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Rendered in place of `children` once an error is caught. */
  fallback: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Generic React error boundary for wrapping arbitrary subtrees (widgets,
 * MDX content, third-party embeds) that shouldn't take down the whole page
 * if they throw. Route-level failures are handled by app/error.tsx instead
 * — use this component for narrower, in-page isolation.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
  }

  reset = (): void => {
    this.setState({ error: null });
  };

  render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return typeof this.props.fallback === "function"
      ? this.props.fallback(error, this.reset)
      : this.props.fallback;
  }
}
