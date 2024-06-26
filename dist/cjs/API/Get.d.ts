import type { HentaiMetadata, EpisodeMetadata } from '../util/interfaces.js';
/**
 * Get metadata of episode or hentai page from a valid URL.
 *
 * @param {string} url - Nekopoi episode or hentai page URL.
 * @returns {Promise<HentaiMetadata | EpisodeMetadata>} Object of episode or hentai metadata.
 */
export declare const get: (url: string) => Promise<HentaiMetadata | EpisodeMetadata>;
