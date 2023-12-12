import { getProfile } from "../../api/profiles/index.mjs";
import { load } from "../../storage/index.mjs";

export function profileThumbnailTemplate(profileData) {
  const profileThumbnail = document.createElement("div");
  profileThumbnail.classList.add(
    "row",
    "mt-3",
    "pb-3",
    "align-items-center",
    "border-bottom"
  );

  const profileAvatarWrapper = document.createElement("div");
  profileAvatarWrapper.classList.add("col-2");
  profileThumbnail.appendChild(profileAvatarWrapper);

  const profileAvatar = document.createElement("img");
  profileAvatar.classList.add("rounded", "w-100");
  profileAvatar.src = profileData.avatar;
  profileAvatar.alt = `Image for the profile of ${profileData.name}`;
  profileAvatarWrapper.appendChild(profileAvatar);

  const profileNameWrapper = document.createElement("div");
  profileNameWrapper.classList.add("col-8");
  profileThumbnail.appendChild(profileNameWrapper);

  const profileName = document.createElement("h1");
  profileName.classList.add("fw-light", "fs-5");
  profileName.innerHTML = `@ ${profileData.name}`;
  profileNameWrapper.appendChild(profileName);

  return profileThumbnail;
}

export async function renderProfileThumbnail() {
  const { name } = load("profile");
  const profile = await getProfile(name);

  const container = document.querySelector("#profileThumbnail");
  container.innerHTML = "";
  container.append(profileThumbnailTemplate(profile));
}

renderProfileThumbnail();
