// Copyright 2020-     Robot Framework Foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Response } from './generated/playwright_pb';

export function emptyWithLog(text: string): Response.Empty {
    const response = new Response.Empty();
    response.setLog(text);
    return response;
}

export function stringResponse(body: string, logMessage: string) {
    const response = new Response.String();
    response.setBody(body);
    response.setLog(logMessage);
    return response;
}

export function jsonResponse(body: string, logMessage: string) {
    const response = new Response.Json();
    response.setJson(body);
    response.setLog(logMessage);
    return response;
}

export function intResponse(body: number, logMessage: string) {
    const response = new Response.Int();
    response.setBody(body);
    response.setLog(logMessage);
    return response;
}

export function boolResponse(value: boolean, logMessage: string) {
    const response = new Response.Bool();
    response.setBody(value);
    response.setLog(logMessage);
    return response;
}

export function jsResponse(result: string, logMessage: string) {
    const response = new Response.JavascriptExecutionResult();
    response.setResult(JSON.stringify(result));
    return response;
}