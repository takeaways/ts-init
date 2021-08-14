declare type ShadowType = "hard";
interface Option {
    shadow_type: ShadowType;
    padding?: boolean;
}
declare function shadowizard(option: Option): void;
export default shadowizard;
