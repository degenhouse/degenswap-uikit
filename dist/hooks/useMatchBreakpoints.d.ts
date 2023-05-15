type State = {
    [key: string]: boolean;
};
type BreakpointChecks = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} & State;
declare const useMatchBreakpoints: () => BreakpointChecks;
export default useMatchBreakpoints;
