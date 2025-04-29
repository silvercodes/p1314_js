class Post {
    constructor(title, img) {
        this.title = title;
        this.img = img
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            test: 'test',
            title: this.title,
            img: this.img,
            date: this.date
        }, null, 4);
    }
}

export default Post;