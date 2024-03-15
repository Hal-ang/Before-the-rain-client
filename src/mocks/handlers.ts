import { HttpResponse, http } from "msw";

import { CDN_URL } from "@/constants/image";
import { HOURLY } from "@/constants/mockup";

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
    const BANNERS = {
      smile: {
        desc: "오늘은 조금",
        title: "안심해도 되겠어요!",
        imageUrl: CDN_URL + "/smile.png"
      },
      worry: {
        desc: "운에 맡기시려고요?",
        title: "혹시 몰라요...",
        imageUrl: CDN_URL + "/worry.png"
      },
      umbrella: {
        desc: "비가 올 확률이 높아요",
        title: "우산을 챙기세요!",
        imageUrl: CDN_URL + "/umbrella.png"
      }
    };

    const response =
      (Math.random() * 100) % 2 === 0
        ? BANNERS.smile
        : (Math.random() * 100) % 2 === 0
        ? BANNERS.worry
        : BANNERS.umbrella;
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
      dt: 1710331489,
      temp: 18.15,
      weather: {
        id: 804,
        main: "Clouds",
        description: "온흐림",
        icon: "04d"
      },
      min: 17.06,
      max: 18.17,
      cityName: "서울특별시 은평구"
    };
    return HttpResponse.json(response);
  }),
  http.get("/weathers/hourly", async ({ request }) => {
    console.log("call /weathers/hourly");
    const url = new URL(request.url);

    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    const offset = url.searchParams.get("offset");

    if (!lat || !lon) {
      return new HttpResponse(null, { status: 400 });
    }

    return HttpResponse.json(HOURLY);
  })
];
