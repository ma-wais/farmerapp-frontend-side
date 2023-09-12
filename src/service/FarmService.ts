import axios  from "axios";
import { getBackendUrl } from "./getBackendUrl.js";
import { middleField } from "./middlefield.js";

class Farm {
    baseURL:string=''
    api
  constructor(baseURL:string) {
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL,
    });
    middleField(this.api);
  }

  createFarm({owner='',name='',location={},maincrop='',image={}}) {
    return this.api.post("/" ,{owner,name,location,maincrop,image});
  }
  getFarm() {
    return this.api.get("/" );
  }
  getSingleFarm({farmId=''}) {
    return this.api.get("/",{params:{farmId}} );
  }
  deleteFarm({farmId=''}) {
    return this.api.delete("/",{params:{farmId}} );
  }
 
}

export default new Farm(`${getBackendUrl()}/Farm`);
