import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";
export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    uploadPhoto(filename),
    signUpUser(firstName, lastName),
  ]).then((result) => {
    const profile = [];
    result.forEach((index) => {
      if (index && index.status == "fulfilled") {
        profile.push({
          status: index.status,
          value: index.value,
        });
      } else {
        profile.push({
          status: index.status,
          value: `Error: ${index.reason.message}`,
        });
      }
    });
    return profile;
  });
}
