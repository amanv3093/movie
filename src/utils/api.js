import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTkxMzhiYTE2NTc5ODYzZDA0YTc1MDM3MTZhODQzZCIsInN1YiI6IjY2MGI3YWIwNWFhZGM0MDE2MzYzNDhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5U-t1fsqLVomEsHAOk3k_GDp0ciqnWnX_CgEx2Ku5iE";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};
// console.log(headers);
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        // console.log(headers);
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};