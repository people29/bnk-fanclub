export class Feed {
    current_page: number;
    total_page: number;
    feeds: FeedItem[]
}

export class FeedItem {
    id: string;
    username: string;
    item_id: string;
    service: string;
    title: string;
    url: string;
    thumbnail: string;
    created_time: string;
    data: string;
    status: string;
    created: string;
    changed: string;
}

