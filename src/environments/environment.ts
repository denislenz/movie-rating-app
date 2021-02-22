// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const ENV = {
  production: false,
  rapidapi: {
    url: "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/",
    headers: {
      'x-rapidapi-key': '12174c9f44msh6fbc38f944bd77ep18fc41jsn921766bda0a8',
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
