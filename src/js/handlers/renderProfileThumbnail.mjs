import { getProfile } from "../api/profiles/get.mjs";
import { load } from "../storage/index.mjs";
import { clearContainer } from "../templates/components.mjs";
import { profileThumbnailTemplate } from "../templates/index.mjs";

export async function renderProfileThumbnail() {
  const { name } = load("profile");
  const profile = await getProfile(name);

  const thumbnailContainer = document.querySelector("#profileThumbnail");
  clearContainer(thumbnailContainer);
  thumbnailContainer.append(profileThumbnailTemplate(profile));
}
