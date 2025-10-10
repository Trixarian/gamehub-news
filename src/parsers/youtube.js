// YouTube RSS Feed Parser
// Fetches videos from YouTube channel RSS feeds

export async function fetchYouTubeFeed(channelId) {
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'GameHub-News-Aggregator/1.0'
      }
    });

    if (!response.ok) {
      console.error(`Failed to fetch YouTube feed for ${channelId}: ${response.status}`);
      return [];
    }

    const xmlText = await response.text();
    return parseYouTubeRSS(xmlText);
  } catch (error) {
    console.error(`Error fetching YouTube feed for ${channelId}:`, error);
    return [];
  }
}

function parseYouTubeRSS(xmlText) {
  const items = [];

  // Match all <entry> blocks (Atom format used by YouTube)
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi;
  let match;

  while ((match = entryRegex.exec(xmlText)) !== null) {
    const entryContent = match[1];

    // Extract fields
    const videoId = extractTag(entryContent, 'yt:videoId');
    const title = extractTag(entryContent, 'title');
    const published = extractTag(entryContent, 'published');
    const channelName = extractTag(entryContent, 'name'); // Author name
    const description = extractTag(entryContent, 'media:description');

    // YouTube thumbnail URL
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    // Video URL
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    items.push({
      title: title,
      link: videoUrl,
      description: description || `Watch ${title} on YouTube`,
      content: `<div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
      </div>
      <p style="color: #e0e0e0; line-height: 1.6; padding: 0 20px;">${description || ''}</p>`,
      pubDate: published,
      imageUrl: thumbnailUrl,
      timestamp: new Date(published).getTime(),
      channelName: channelName,
      videoId: videoId,
      isYouTube: true
    });
  }

  return items.slice(0, 3); // Limit to 3 most recent videos per channel
}

function extractTag(content, tagName) {
  // Handle both self-closing and regular tags
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}
