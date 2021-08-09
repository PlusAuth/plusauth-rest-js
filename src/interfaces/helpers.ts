//https://stackoverflow.com/a/64176221
/** Union of primitives to skip with deep omit utilities. */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Primitive = string | Function | number | boolean | Symbol | undefined | null

/** Deeply omit members of an array of interface or array of type. */
export type DeepOmitArray<T extends any[], K> = {
  [P in keyof T]: DeepOmit<T[P], K>
}

/** Deeply omit members of an interface or type. */
export type DeepOmit<T, K> = T extends Primitive ? T : {
  [P in Exclude<keyof T, K>]: //extra level of indirection needed to trigger homomorhic behavior
  T[P] extends infer TP ? // distribute over unions
    TP extends Primitive ? TP : // leave primitives and functions alone
      TP extends any[] ? DeepOmitArray<TP, K> : // Array special handling
        DeepOmit<TP, K>
    : never
}

/** Deeply omit members of an array of interface or array of type, making all members optional. */
export type PartialDeepOmitArray<T extends any[], K> = Partial<{
  [P in Partial<keyof T>]: Partial<PartialDeepOmit<T[P], K>>
}>

/** Deeply omit members of an interface or type, making all members optional. */
export type PartialDeepOmit<T, K> = T extends Primitive ? T : Partial<{
  [P in Exclude<keyof T, K>]: //extra level of indirection needed to trigger homomorhic behavior
  T[P] extends infer TP ? // distribute over unions
    TP extends Primitive ? TP : // leave primitives and functions alone
      TP extends any[] ? PartialDeepOmitArray<TP, K> : // Array special handling
        PartialDeepOmit<TP, K>
    : never
}>
