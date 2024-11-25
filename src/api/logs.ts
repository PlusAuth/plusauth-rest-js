import { HttpService } from "../http"
import { encodedQueryString } from "../utils"

export class LogService extends HttpService {
  /**
 * Query over every log generated by PlusAuth belongs to your tenant.
### DateMath Reference[](#datemath-reference):
If you are used to ElasticSearch, Kibana or Grafana date math queries, than you can ignore this section as PlusAuth includes  same characteristics with them.
The expression starts with an anchor date, which can either be `now`, or a date string ending with `||`. This anchor date can optionally be followed by one or more maths expressions:
- `+1h`: Add one hour
- `-1d`: Subtract one day
- `/d`: Round down to the nearest day
The supported units are:

| Time Unit | Duration |
| --- | --- |
| `y` | Years |
| `M` | Months |
| `w` | Weeks |
| `d` | Days |
| `h` | Hours |
| `H` | Hours |
| `m` | Minutes |
| `s` | Seconds |

Assuming `now` is `2001-01-01 12:00:00`, some examples are:

| Expression | Description | Resolves To |
| --- | --- | --- |
| `now+1h` | `now` in milliseconds plus one hour |  `2001-01-01 13:00:00` |
| `now-1h` | `now` in milliseconds minus one hour | `2001-01-01 11:00:00` |
| `now-1h/d` | `now` in milliseconds minus one hour, rounded down to UTC 00:00 | `2001-01-01 00:00:00` |

 * @param queryParams Query parameters
 * @param queryParams.limit Limit the number of results returned
 * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
 * @param queryParams.from Filter logs occurred after this date. This can be a datetime string or date math expression.
 * @param queryParams.to Filter logs occurred until this date. This can be a datetime string or date math expression.
 * @param queryParams.type Type/s of logs to be retrieved. Comma separated. Comma separated.
Ex.: error,warning,info
 * @param queryParams.operation Retrieve logs belongs to one or more operation. Comma separated.
Ex.: authorization.error,create.user
 * @param queryParams.include_api Set `true` to include REST API logs
 */
  async getAll(queryParams?: {
    limit?: number
    offset?: number
    from?: string
    to?: string
    type?: "error" | "warning" | "info"
    operation?: string
    include_api?: boolean
  }): Promise<Record<string, any>[]> {
    return await this.http.get(`/logs/${encodedQueryString(queryParams)}`)
  }
}
