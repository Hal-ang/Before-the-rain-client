import { CDN_URL, EMOJI_PATH } from "@/constants/image";
import { HttpResponse, http } from "msw";

const allPosts = new Map();

export const handlers = [
  http.get("/user", ({ cookies }) => {
    const { session } = cookies;

    if (!session) {
      return new HttpResponse(null, { status: 401 });
    }
  }),
  http.get("/weathers/today/banner", async ({ request }) => {
    console.log("call /weathers/today/banner");
    const url = new URL(request.url);

    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");

    if (!lat || !lon) {
      return new HttpResponse(null, { status: 400 });
    }
    const response =
      (Math.random() * 100) % 2 === 0
        ? {
            desc: "운에 맡기시려고요?",
            title: "혹시 몰라요...",
            imageUrl: CDN_URL + EMOJI_PATH.worry
          }
        : (Math.random() * 100) % 2 === 0
        ? {
            desc: "운에 맡기시려고요?",
            title: "혹시 몰라요...",
            imageUrl: CDN_URL + EMOJI_PATH.worry
          }
        : {
            desc: "비가 올 확률이 높아요",
            title: "우산을 챙기세요!",
            imageUrl: CDN_URL + EMOJI_PATH.umbrella
          };
    return HttpResponse.json({ ...response, rainGage: 0.3 });
  }),
  http.get("/weathers/today/summary", async ({ request }) => {
    console.log("call /weathers/today/summary");
    const url = new URL(request.url);

    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");

    if (!lat || !lon) {
      return new HttpResponse(null, { status: 400 });
    }
    const response = {
      dt: 1684929490,
      temp: 3,
      weather: {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
      },
      min: 2,
      max: 14,
      cityName: "서울특별시 은평구"
    };
    return HttpResponse.json(response);
  }),
  http.post("/posts", async ({ request }) => {
    // Read the intercepted request body as JSON.
    const newPost = await request.json();

    // Push the new post to the map of all posts.
    // @ts-ignore
    allPosts.set(newPost.id, newPost);

    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!
    return HttpResponse.json(newPost, { status: 201 });
  }),
  http.delete("/posts/:id", ({ params }) => {
    // All request path params are provided in the "params"
    // argument of the response resolver.
    const { id } = params;

    // Let's attempt to grab the post by its ID.
    const deletedPost = allPosts.get(id);

    // Respond with a "404 Not Found" response if the given
    // post ID does not exist.
    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 });
    }

    // Delete the post from the "allPosts" map.
    allPosts.delete(id);

    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(deletedPost);
  })
];
