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
      const apiHost = import.meta.env.VITE_API_HOST;

      axios.get(`${apiHost}tracks`).then((response) => {
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

    async addTrack(name: string, description: string, type: string, file: any) {
      const apiHost = import.meta.env.VITE_API_HOST;

      const formData = new FormData();

      formData.append("file", file[0]);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("type", type);

      await axios.post(`${apiHost}tracks/upload-gpx`, formData);
    },
  },
});

export interface TrackInfo {
  id: number;
  name: string;
  description: string;
}