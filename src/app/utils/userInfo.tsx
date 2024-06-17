"use server";
import { auth } from "@/auth/auth";

export async function getAllUserData() {
    try {
        const session = await auth();
        if (!session) {
            throw new Error("No session found");
        }

        const accessToken = session.user.accessToken;  
        const response = await fetch("https://discord.com/api/oauth2/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error retrieving current authorization information: ${response.status} ${response.statusText}`);
        }

        const userInfo = await response.json();
        return { userInfo };
    } catch (error) {
        console.error('Error retrieving authorization information:', error);
        throw error;
    }
}


export async function getUserName() {
  try {
    const userData = await getAllUserData();
    console.log(userData.userInfo.user.username)
    return userData.userInfo.user.username;
    
  } catch (error) {
    console.error("Error fetching user name:", error);
    return null;
  }
}

export async function getUserImage() {
  try {
    const userData = await auth();
    return userData?.user.image;
  } catch (error) {
    console.error("Error fetching user image:", error);
    return null;
  }
}

export async function getUsserSesion() {
  try {
    const userData = await auth();
    return userData;
  } catch (error) {
    console.error("Error fetching user image:", error);
    return null;
  }
}



