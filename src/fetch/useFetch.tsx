import { useEffect, useState } from "react";

const useFetch = (url: string, func?: any) => {
  const [trevariData, setTrevariData] = useState<any>({});

  const getCall = async () => {
      const urlData = await fetch(url, {
        headers : {
            Authorization : 'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj'
       }
    })
      .then((res) => res.json())
      .then((array) => array);

      setTrevariData(urlData);
      func(true);
  };

  useEffect(() => {
    getCall();
  }, []);

  return trevariData;
};

export default useFetch;