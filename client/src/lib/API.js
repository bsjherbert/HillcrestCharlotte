import axios from "axios";

export default {
  Users: {
    login: function(email, password) {
      return axios.post("/api/users/login", { email, password });
    },

    create: function(email, password) {
      return axios.post("/api/users", { email, password });
    },

    getMe: function(authToken) {
      return axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
  },

  ConnectionCard: {
    create: function(connCard) {
      return axios.post("/api/connection-card/", connCard);
    }
  },

  Secrets: {
    getAll: function(authToken) {
      return axios.get("/api/secrets", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
  },

  Seeders: {
    seed: function(seedData) {
      return axios.get("/api/seeders", {




        
      });
    }
  }



};
