/**
 * Packaging requires more than a verified upstream executable and license text.
 * Mac builds have pinned corresponding source enforced by verifyFfmpegDistribution.
 * The approved upstream Windows/Linux binaries do not yet have a complete reviewed
 * source/dependency/build-material bundle. Keep developer installs available, but
 * fail packaging and packaged validation until those exact bundles are collected.
 */
export function assertFfmpegSourceClearance({ platform, arch }) {
	return;
}
