import axios from "axios";


export default async function registerUser(user1) {
    console.log(user1);
    const res = await axios.post("/api/auth/signup", user1);
    console.log(res);
    return res.data;
}


export const loginUser = async (email, password) => {
    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
}