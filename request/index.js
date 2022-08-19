// import axios from "axios";
// async function processStatus(response) {
//   if (response.ok) {
//     return response.json();
//   }
//   return Promise.resolve({
//     success: false,
//     status: response.status,
//   });
// }

// async function resposePackage(jsonRes) {
//   if (jsonRes.success) {
//     return Promise.resolve(jsonRes.extras);
//   }
//   return Promise.reject({
//     status: jsonRes.status,
//     message: jsonRes.extras ? jsonRes.extras.msg : 0,
//   });
// }

// /* Easy fetch is xhr for GET, DELETE..., request without body */
// export const serverFetch = async (url, method) => {
//   const options = { method, responseType: "arraybuffer" };
//   const requestUri = url;
//   const res = await fetch(requestUri, options);
//   console.log(res);

//   // const resjson = await processStatus(res);
//   // return resposePackage(resjson);
// };

// export const clientFetch = async (url, method, query) => {
//   const options = {
//     method,
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${window.localStorage.admintoken}`,
//     },
//   };
//   const requestUri = query ? `${url}?${query}` : `${url}`;
//   const res = await fetch(requestUri, options);
//   const resjson = await processStatus(res);
//   return resposePackage(resjson);
// };

// export const wrapFetch = async (url, method, query) => {
//   const options = {
//     method,
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const requestUri = query ? `${url}?${query}` : `${url}`;

//   const result = await fetch(requestUri, options);

//   // console.log(result.json());

//   return result.json();
// };

// export const getBufferOnline = async (url) => {
//   if (!url) {
//     return null;
//   }
//   let resp;
//   try {
//     resp = await axios.get(url, { responseType: "arraybuffer" });
//   } catch (e) {
//     console.error(e);
//   }
//   return new Promise((resolve, reject) => {
//     if (!resp || !resp.data) {
//       reject();
//     }
//     resolve(resp.data);
//     // this.audioContext.decodeAudioData(resp.data).then((buffer) => {
//     //   if (buffer) {
//     //     resolve(buffer);
//     //   }
//     //   reject();
//     // });
//   });
// };
export async function clientFetch() {
  const url =
    "https://sf1-scmcdn-tos.pstatp.com/goofy/ee/sce/hera/music/She-Sells-Sea-Shells.mp3";
  const res = await fetch(url, {
    headers: {
      responseType: "arraybuffer",
      credentials: "same-origin",
    },
  });

  const data = await res.arrayBuffer();
  return data;
  // const data2 = Buffer.from(data).toJSON();
}
