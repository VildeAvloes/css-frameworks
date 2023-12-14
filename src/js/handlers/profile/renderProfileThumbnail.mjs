import { getProfile } from "../../api/profiles/get.mjs";
import { load } from "../../storage/index.mjs";
import {
  clearContainer,
  profileThumbnailTemplate,
} from "../../templates/index.mjs";

/**
 * Renders the profile thumbnail in the thumbnail container.
 *
 * @async
 * @function
 * @throws {Error} If the rendering of the thumbnail fails.
 */
export async function renderProfileThumbnail() {
  try {
    const { name } = load("profile");
    const profile = await getProfile(name);

    const thumbnailContainer = document.querySelector("#profileThumbnail");
    clearContainer(thumbnailContainer);
    thumbnailContainer.append(profileThumbnailTemplate(profile));
  } catch (error) {
    console.error(error, "Failed to render thumbnail.");
  }
}
