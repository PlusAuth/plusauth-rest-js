/**
 * @public
 */
export class PlusAuthRestError extends Error {
  error?: string
  error_description?: string
  status?: number

  constructor(error: Error | any) {
    super(error.message || error.error || error.name)
    if (!(error instanceof Error)) {
      Object.assign(this, error)
    } else {
      Object.defineProperty(this, "_raw", error)
    }
  }
}
