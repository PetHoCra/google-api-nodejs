// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace ideahub_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Idea Hub API
   *
   * This is an invitation-only API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const ideahub = google.ideahub('v1alpha');
   * ```
   */
  export class Ideahub {
    context: APIRequestContext;
    ideas: Resource$Ideas;
    platforms: Resource$Platforms;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.ideas = new Resource$Ideas(this.context);
      this.platforms = new Resource$Platforms(this.context);
    }
  }

  /**
   * Represents locales that are available for a web property.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaAvailableLocale {
    /**
     * A string in BCP 47 format, without a resource prefix.
     */
    locale?: string | null;
    /**
     * A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform\}/properties/{property\}/locales/{locale\}
     */
    name?: string | null;
  }
  /**
   * A single Idea that we want to show the end user.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaIdea {
    /**
     * Unique identifier for the idea. Format: ideas/{ideaId\}
     */
    name?: string | null;
    /**
     * The idea’s text.
     */
    text?: string | null;
    /**
     * The Topics that match the idea.
     */
    topics?: Schema$GoogleSearchIdeahubV1alphaTopic[];
  }
  /**
   * An idea activity entry.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaIdeaActivity {
    /**
     * The Idea IDs for this entry. If empty, topics should be set.
     */
    ideas?: string[] | null;
    /**
     * Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform\}/properties/{property\}/ideaActivities/{idea_activity\}
     */
    name?: string | null;
    /**
     * The Topic IDs for this entry. If empty, ideas should be set.
     */
    topics?: string[] | null;
    /**
     * The type of activity performed.
     */
    type?: string | null;
    /**
     * The uri the activity relates to.
     */
    uri?: string | null;
  }
  /**
   * Represents idea state specific to a web property.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaIdeaState {
    /**
     * Whether the idea is dismissed.
     */
    dismissed?: boolean | null;
    /**
     * Unique identifier for the idea state. Format: platforms/{platform\}/properties/{property\}/ideaStates/{idea_state\}
     */
    name?: string | null;
    /**
     * Whether the idea is saved.
     */
    saved?: boolean | null;
  }
  /**
   * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse {
    /**
     * Locales for which ideas are available for the given Creator.
     */
    availableLocales?: Schema$GoogleSearchIdeahubV1alphaAvailableLocale[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$GoogleSearchIdeahubV1alphaListIdeasResponse {
    /**
     * Results for the ListIdeasRequest.
     */
    ideas?: Schema$GoogleSearchIdeahubV1alphaIdea[];
    /**
     * Used to fetch the next page in a subsequent request.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaTopic {
    /**
     * String displayed to the creator indicating the name of the Topic.
     */
    displayName?: string | null;
    /**
     * The mID of the topic.
     */
    mid?: string | null;
    /**
     * Unique identifier for the topic. Format: topics/{topic\}
     */
    name?: string | null;
  }
  /**
   * Represents topic state specific to a web property.
   */
  export interface Schema$GoogleSearchIdeahubV1alphaTopicState {
    /**
     * Whether the topic is dismissed.
     */
    dismissed?: boolean | null;
    /**
     * Unique identifier for the topic state. Format: platforms/{platform\}/properties/{property\}/topicStates/{topic_state\}
     */
    name?: string | null;
    /**
     * Whether the topic is saved.
     */
    saved?: boolean | null;
  }

  export class Resource$Ideas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List ideas for a given Creator and filter and sort options.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.ideas.list({
     *     // Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
     *     filter: 'placeholder-value',
     *     // Order semantics described below.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
     *     pageSize: 'placeholder-value',
     *     // Used to fetch next page.
     *     pageToken: 'placeholder-value',
     *     // If defined, specifies the creator for which to filter by. Format: publishers/{publisher\}/properties/{property\}
     *     parent: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ideas": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Ideas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Ideas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>;
    list(
      params: Params$Resource$Ideas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Ideas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      params: Params$Resource$Ideas$List,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Ideas$List
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ideas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ideas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/ideas').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Ideas$List extends StandardParameters {
    /**
     * Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
     */
    filter?: string;
    /**
     * Order semantics described below.
     */
    orderBy?: string;
    /**
     * The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
     */
    pageSize?: number;
    /**
     * Used to fetch next page.
     */
    pageToken?: string;
    /**
     * If defined, specifies the creator for which to filter by. Format: publishers/{publisher\}/properties/{property\}
     */
    parent?: string;
  }

  export class Resource$Platforms {
    context: APIRequestContext;
    properties: Resource$Platforms$Properties;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.properties = new Resource$Platforms$Properties(this.context);
    }
  }

  export class Resource$Platforms$Properties {
    context: APIRequestContext;
    ideaActivities: Resource$Platforms$Properties$Ideaactivities;
    ideas: Resource$Platforms$Properties$Ideas;
    ideaStates: Resource$Platforms$Properties$Ideastates;
    locales: Resource$Platforms$Properties$Locales;
    topicStates: Resource$Platforms$Properties$Topicstates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.ideaActivities = new Resource$Platforms$Properties$Ideaactivities(
        this.context
      );
      this.ideas = new Resource$Platforms$Properties$Ideas(this.context);
      this.ideaStates = new Resource$Platforms$Properties$Ideastates(
        this.context
      );
      this.locales = new Resource$Platforms$Properties$Locales(this.context);
      this.topicStates = new Resource$Platforms$Properties$Topicstates(
        this.context
      );
    }
  }

  export class Resource$Platforms$Properties$Ideaactivities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an idea activity entry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.platforms.properties.ideaActivities.create({
     *     // Required. The parent resource where this idea activity will be created. Format: platforms/{platform\}/property/{property\}
     *     parent: 'platforms/my-platform/properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ideas": [],
     *       //   "name": "my_name",
     *       //   "topics": [],
     *       //   "type": "my_type",
     *       //   "uri": "my_uri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ideas": [],
     *   //   "name": "my_name",
     *   //   "topics": [],
     *   //   "type": "my_type",
     *   //   "uri": "my_uri"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Platforms$Properties$Ideaactivities$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Platforms$Properties$Ideaactivities$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>;
    create(
      params: Params$Resource$Platforms$Properties$Ideaactivities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Platforms$Properties$Ideaactivities$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
    ): void;
    create(
      params: Params$Resource$Platforms$Properties$Ideaactivities$Create,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Platforms$Properties$Ideaactivities$Create
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Properties$Ideaactivities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Platforms$Properties$Ideaactivities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/ideaActivities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaIdeaActivity>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Platforms$Properties$Ideaactivities$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this idea activity will be created. Format: platforms/{platform\}/property/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleSearchIdeahubV1alphaIdeaActivity;
  }

  export class Resource$Platforms$Properties$Ideas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List ideas for a given Creator and filter and sort options.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.platforms.properties.ideas.list({
     *     // Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
     *     filter: 'placeholder-value',
     *     // Order semantics described below.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
     *     pageSize: 'placeholder-value',
     *     // Used to fetch next page.
     *     pageToken: 'placeholder-value',
     *     // If defined, specifies the creator for which to filter by. Format: publishers/{publisher\}/properties/{property\}
     *     parent: 'platforms/my-platform/properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ideas": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Platforms$Properties$Ideas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Platforms$Properties$Ideas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>;
    list(
      params: Params$Resource$Platforms$Properties$Ideas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Platforms$Properties$Ideas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      params: Params$Resource$Platforms$Properties$Ideas$List,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Platforms$Properties$Ideas$List
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Properties$Ideas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Properties$Ideas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/ideas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListIdeasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Platforms$Properties$Ideas$List
    extends StandardParameters {
    /**
     * Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
     */
    filter?: string;
    /**
     * Order semantics described below.
     */
    orderBy?: string;
    /**
     * The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
     */
    pageSize?: number;
    /**
     * Used to fetch next page.
     */
    pageToken?: string;
    /**
     * If defined, specifies the creator for which to filter by. Format: publishers/{publisher\}/properties/{property\}
     */
    parent?: string;
  }

  export class Resource$Platforms$Properties$Ideastates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Update an idea state resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.platforms.properties.ideaStates.patch({
     *     // Unique identifier for the idea state. Format: platforms/{platform\}/properties/{property\}/ideaStates/{idea_state\}
     *     name: 'platforms/my-platform/properties/my-propertie/ideaStates/my-ideaState',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dismissed": false,
     *       //   "name": "my_name",
     *       //   "saved": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dismissed": false,
     *   //   "name": "my_name",
     *   //   "saved": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Platforms$Properties$Ideastates$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Platforms$Properties$Ideastates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaIdeaState>;
    patch(
      params: Params$Resource$Platforms$Properties$Ideastates$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Platforms$Properties$Ideastates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
    ): void;
    patch(
      params: Params$Resource$Platforms$Properties$Ideastates$Patch,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Platforms$Properties$Ideastates$Patch
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaIdeaState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaIdeaState>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Properties$Ideastates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Properties$Ideastates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaIdeaState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaIdeaState>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Platforms$Properties$Ideastates$Patch
    extends StandardParameters {
    /**
     * Unique identifier for the idea state. Format: platforms/{platform\}/properties/{property\}/ideaStates/{idea_state\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleSearchIdeahubV1alphaIdeaState;
  }

  export class Resource$Platforms$Properties$Locales {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns which locales ideas are available in for a given Creator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.platforms.properties.locales.list({
     *     // The maximum number of locales to return. The service may return fewer than this value. If unspecified, at most 100 locales will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAvailableLocales` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAvailableLocales` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The web property to check idea availability for Format: platforms/{platform\}/property/{property\}
     *     parent: 'platforms/my-platform/properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "availableLocales": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Platforms$Properties$Locales$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Platforms$Properties$Locales$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>;
    list(
      params: Params$Resource$Platforms$Properties$Locales$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Platforms$Properties$Locales$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
    ): void;
    list(
      params: Params$Resource$Platforms$Properties$Locales$List,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Platforms$Properties$Locales$List
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Properties$Locales$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Properties$Locales$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/locales').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Platforms$Properties$Locales$List
    extends StandardParameters {
    /**
     * The maximum number of locales to return. The service may return fewer than this value. If unspecified, at most 100 locales will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAvailableLocales` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAvailableLocales` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The web property to check idea availability for Format: platforms/{platform\}/property/{property\}
     */
    parent?: string;
  }

  export class Resource$Platforms$Properties$Topicstates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Update a topic state resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ideahub.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ideahub = google.ideahub('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ideahub.platforms.properties.topicStates.patch({
     *     // Unique identifier for the topic state. Format: platforms/{platform\}/properties/{property\}/topicStates/{topic_state\}
     *     name: 'platforms/my-platform/properties/my-propertie/topicStates/my-topicState',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dismissed": false,
     *       //   "name": "my_name",
     *       //   "saved": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dismissed": false,
     *   //   "name": "my_name",
     *   //   "saved": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Platforms$Properties$Topicstates$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Platforms$Properties$Topicstates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaTopicState>;
    patch(
      params: Params$Resource$Platforms$Properties$Topicstates$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Platforms$Properties$Topicstates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
    ): void;
    patch(
      params: Params$Resource$Platforms$Properties$Topicstates$Patch,
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Platforms$Properties$Topicstates$Patch
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSearchIdeahubV1alphaTopicState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSearchIdeahubV1alphaTopicState>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Properties$Topicstates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Properties$Topicstates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ideahub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSearchIdeahubV1alphaTopicState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSearchIdeahubV1alphaTopicState>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Platforms$Properties$Topicstates$Patch
    extends StandardParameters {
    /**
     * Unique identifier for the topic state. Format: platforms/{platform\}/properties/{property\}/topicStates/{topic_state\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleSearchIdeahubV1alphaTopicState;
  }
}
