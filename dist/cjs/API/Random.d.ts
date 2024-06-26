import type { HentaiMetadata, EpisodeMetadata } from '../util/interfaces.js';
/**
 * Get random hentai or episode page.
 *
 * @returns {Promise<HentaiMetadata | EpisodeMetadata>} Object of episode or hentai metadata.
 */
export declare const random: () => Promise<HentaiMetadata | EpisodeMetadata>;
