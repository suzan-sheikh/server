import type { Res } from "./type";

export function sendResponse <T>(res: Res, {message, data, error}:{message: string, data?:T, error?: boolean}, status = 300){
    res.writeHead(status, {"content-type": "application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: data ? data : null

    }))
}