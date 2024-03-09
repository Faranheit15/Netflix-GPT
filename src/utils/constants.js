export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcdk1iCbqnp0L9eChv7Q8IHGZ2WTy26xTot4zHhnhnjjBiVicIkUNo9qBqvdD49rOnefHYhJ_ghofRGnfHobQ87SzOh_J4E.png?r=a4f";
export const BANNER_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  },
};
export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "ur", name: "Urdu" },
];
export const OPEN_API_KEY = import.meta.env.VITE_OPEN_API_KEY;
