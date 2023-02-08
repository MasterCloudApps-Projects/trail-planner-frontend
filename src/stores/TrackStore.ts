import { defineStore } from "pinia";
import axios from "axios";

export const useTrackStore = defineStore("tracks", {
  state: () => {
    return {
      tracks: [] as TrackInfo[],
    };
  },
  getters: {
    trackList(state): TrackInfo[] {
      return state.tracks;
    },
  },
  actions: {
    async fetchTracks() {
      axios.get("http://localhost:8080/track").then((response) => {
        this.tracks = [];
        response.data.map((trackInfo: TrackInfo) => {
          this.tracks.push({
            id: trackInfo.id,
            name: trackInfo.name,
            description: trackInfo.description,
          });
        });
      });
    },
  },
});

export interface TrackInfo {
  id: number;
  name: string;
  description: string;
}
