import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ServerContext = createContext();

const ServerContextProvider = (props) => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetchAllServers()("devdevdev");
  }, []);

  async function fetchAllServers() {
    await axios
      .get("http://localhost:8080/api/servers")
      .then((res) => {
        res.data, "dec";
        setServers(res.data);
      })
      .catch((err) => {
        err;
      });
  }

  function addNewServer(server) {
    setServers([server, ...servers]);
  }

  function removeServer(serverId) {
    "mdmdmdmdmdmdmdmdmd", serverId;
    const newServerArray = servers.filter(
      (server) => server.serverId !== serverId
    );
    setServers(newServerArray);
  }

  return (
    <ServerContext.Provider value={{ servers, addNewServer, removeServer }}>
      {props.children}
    </ServerContext.Provider>
  );
};

export default ServerContextProvider;
