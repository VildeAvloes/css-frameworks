import { getProfile } from "../../api/profiles/get.mjs";
import { load } from "../../storage/index.mjs";
import {
  clearContainer,
  profileThumbnailTemplate,
} from "../../templates/index.mjs";

export async function renderProfileThumbnail() {
  try {
    const { name } = load("profile");
    const profile = await getProfile(name);

    const thumbnailContainer = document.querySelector("#profileThumbnail");
    clearContainer(thumbnailContainer);
    thumbnailContainer.append(profileThumbnailTemplate(profile));
  } catch (error) {
    console.log(error, "Failed to render thumbnail.");
  }
}
